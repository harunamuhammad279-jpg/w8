/* ================================================================
 * TechCare Solutions — Bot & AI-Scraper Guard
 * -----------------------------------------------------------------
 * Legitimate defenses against:
 *  - Automated scrapers / crawlers without JS execution
 *  - Headless browsers (Puppeteer, Selenium, Playwright defaults)
 *  - AI training scrapers that respect webdriver/headless hints
 *  - Simple bot traffic / hotlinking
 *
 * NOTE: This is a client-side deterrent. For real protection against
 * attacks (DDoS, credential stuffing, sophisticated scraping), pair
 * this with a WAF like Cloudflare, Cloudflare Turnstile, or a
 * server-side rate limiter.
 * ================================================================ */
(function () {
    'use strict';

    var w = window, d = document, n = navigator;
    var suspicious = 0;

    // --- 1. Headless / WebDriver detection -----------------------
    try {
        if (n.webdriver === true) suspicious += 3;

        var ua = (n.userAgent || '').toLowerCase();
        var botPatterns = [
            'headlesschrome', 'phantomjs', 'slimerjs', 'htmlunit',
            'puppeteer', 'playwright', 'selenium', 'chrome-lighthouse',
            'gptbot', 'chatgpt-user', 'ccbot', 'anthropic-ai', 'claude-web',
            'perplexitybot', 'bytespider', 'amazonbot', 'google-extended',
            'curl/', 'wget/', 'python-requests', 'python-urllib',
            'node-fetch', 'axios/', 'go-http-client', 'java/',
            'scrapy', 'bot', 'spider', 'crawler'
        ];
        for (var i = 0; i < botPatterns.length; i++) {
            if (ua.indexOf(botPatterns[i]) !== -1) { suspicious += 3; break; }
        }

        // Typical headless signatures
        if (!n.languages || n.languages.length === 0) suspicious += 1;
        if (!n.plugins || n.plugins.length === 0) suspicious += 1;

        // Chrome headless telltales
        if (/HeadlessChrome/i.test(n.userAgent)) suspicious += 3;

        // Missing / suspicious window properties
        if (typeof w.chrome === 'undefined' && /Chrome/i.test(n.userAgent)) suspicious += 1;
        if (w.outerWidth === 0 || w.outerHeight === 0) suspicious += 2;

        // Permissions API inconsistency (headless trick)
        if (n.permissions && n.permissions.query) {
            n.permissions.query({ name: 'notifications' }).then(function (p) {
                if (p.state === 'denied' && Notification && Notification.permission === 'default') {
                    suspicious += 1;
                }
            }).catch(function () { });
        }
    } catch (e) { suspicious += 1; }

    // --- 2. Honeypot link (invisible, bots follow links blindly) -
    try {
        var trap = d.createElement('a');
        trap.href = '/__do-not-follow__.html';
        trap.setAttribute('rel', 'nofollow');
        trap.setAttribute('aria-hidden', 'true');
        trap.setAttribute('tabindex', '-1');
        trap.style.cssText = 'position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;opacity:0;pointer-events:none;';
        trap.textContent = 'Admin Panel Login';
        trap.addEventListener('click', function (e) {
            e.preventDefault();
            suspicious += 5;
            _blockBot();
        });
        (d.body || d.documentElement).appendChild(trap);
    } catch (e) { }

    // --- 3. Require basic human interaction ----------------------
    var humanVerified = false;
    function markHuman() { humanVerified = true; }
    ['mousemove', 'touchstart', 'scroll', 'keydown', 'click'].forEach(function (ev) {
        w.addEventListener(ev, markHuman, { passive: true, once: true });
    });

    // --- 4. Expose flags for content loader ----------------------
    w.__bg = {
        suspicious: function () { return suspicious; },
        human: function () { return humanVerified; },
        isBot: function () { return suspicious >= 3; }
    };

    // --- 5. Block actions when flagged ---------------------------
    function _blockBot() {
        try {
            w.__bg.blocked = true;

            // Remove any data-k attributes so content.js won't populate them
            var els = d.querySelectorAll('[data-k]');
            for (var i = 0; i < els.length; i++) {
                els[i].removeAttribute('data-k');
                els[i].textContent = '';
            }

            // Also clear already-injected content aggressively
            var wipeTargets = ['.hero-text', '.ios-alert-body', '.article'];
            for (var k = 0; k < wipeTargets.length; k++) {
                var nodes = d.querySelectorAll(wipeTargets[k]);
                for (var m = 0; m < nodes.length; m++) { nodes[m].innerHTML = ''; }
            }
        } catch (e) { }
    }

    // Run blocker after short delay if suspicious
    setTimeout(function () {
        if (suspicious >= 3) _blockBot();
    }, 50);

    // Re-check periodically (async checks may add to suspicious later)
    setInterval(function () {
        if (!w.__bg.blocked && suspicious >= 3) _blockBot();
    }, 1500);

    // --- 6. Hotlink / framing protection -------------------------
    try {
        if (w.top !== w.self) {
            // Page loaded inside iframe / frame
            d.documentElement.style.display = 'none';
        }
    } catch (e) {
        // Cross-origin frame = likely malicious embed
        d.documentElement.style.display = 'none';
    }

})();
