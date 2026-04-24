/* ================================================================
 * TechCare Solutions — Client-side Content Protection
 * Deterrents against copy, right-click, devtools, and print.
 *
 * Primary defense: keyboard shortcut blocking (prevents opening
 * DevTools in the first place). DevTools detection is secondary
 * and deliberately conservative to avoid false positives.
 * ================================================================ */
(function () {
    'use strict';

    var w = window, d = document;

    // ---------- 1. Disable right-click ----------
    d.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        return false;
    });

    // ---------- 2. Disable text selection ----------
    d.addEventListener('selectstart', function (e) {
        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return true;
        e.preventDefault();
        return false;
    });

    // ---------- 3. Disable drag on images ----------
    d.addEventListener('dragstart', function (e) {
        e.preventDefault();
        return false;
    });

    // ---------- 4. Block keyboard shortcuts ----------
    d.addEventListener('keydown', function (e) {
        var key = e.key ? e.key.toLowerCase() : '';
        var code = e.keyCode || e.which;

        // F12
        if (code === 123 || key === 'f12') { e.preventDefault(); return false; }

        // Ctrl / Cmd combos
        var ctrl = e.ctrlKey || e.metaKey;
        if (ctrl) {
            // U: view source, S: save, P: print, C: copy, X: cut, A: select-all
            if (['u', 's', 'p', 'c', 'x', 'a'].indexOf(key) !== -1) {
                e.preventDefault();
                return false;
            }
            // Ctrl+Shift+I / J / C / K — DevTools, Console, Element-picker
            if (e.shiftKey && ['i', 'j', 'c', 'k'].indexOf(key) !== -1) {
                e.preventDefault();
                return false;
            }
        }
    });

    // ---------- 5. Clipboard lock ----------
    ['copy', 'cut', 'paste'].forEach(function (ev) {
        d.addEventListener(ev, function (e) {
            e.preventDefault();
            if (e.clipboardData) e.clipboardData.setData('text/plain', '');
            return false;
        });
    });

    // ---------- 6. DevTools detection (size-based only; reliable) ----------
    // We ONLY use the size-diff heuristic with a generous threshold.
    // Getter-trap tricks trigger false positives in modern browsers
    // even when DevTools is closed, so they've been removed.
    //
    // The threshold is intentionally high (280px) so bookmark bars,
    // vertical tabs, Edge sidebar, etc. do NOT falsely trigger.
    var _blocked = false;
    var _baseline = null;

    function _showBlock() {
        if (_blocked) return;
        _blocked = true;
        try {
            var html = '<div style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;text-align:center;padding:80px 20px;color:#8e8e93;background:#f2f2f7;min-height:100vh;">' +
                '<div style="max-width:420px;margin:0 auto;background:#fff;border-radius:16px;padding:36px 28px;box-shadow:0 4px 20px rgba(0,0,0,0.08);">' +
                '<div style="width:64px;height:64px;margin:0 auto 16px auto;background:linear-gradient(135deg,#ff3b30,#ff6961);border-radius:16px;display:flex;align-items:center;justify-content:center;">' +
                '<svg viewBox="0 0 24 24" width="32" height="32" fill="#fff"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14l-4-4 1.41-1.41L11 12.17l5.59-5.58L18 8l-7 7z"/></svg>' +
                '</div>' +
                '<h2 style="color:#1c1c1e;margin:0 0 8px 0;font-size:22px;font-weight:700;">Content Protected</h2>' +
                '<p style="color:#6e6e73;margin:0 0 20px 0;font-size:14px;">This content is not available for inspection. Please close developer tools to continue.</p>' +
                '<button onclick="location.reload()" style="background:#007aff;color:#fff;border:none;padding:10px 24px;border-radius:20px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;">Reload Page</button>' +
                '</div></div>';
            d.body.innerHTML = html;
            d.title = 'Protected';
        } catch (e) { }
    }

    // Capture baseline dimensions after initial render
    function _captureBaseline() {
        _baseline = {
            outerW: w.outerWidth,
            outerH: w.outerHeight,
            innerW: w.innerWidth,
            innerH: w.innerHeight,
            diffW: w.outerWidth - w.innerWidth,
            diffH: w.outerHeight - w.innerHeight
        };
    }

    function _sizeCheck() {
        if (_blocked || !_baseline) return;
        // Mobile browsers don't have DevTools in this sense; skip
        if ('ontouchstart' in w && w.innerWidth < 1024) return;

        // Only flag if the gap GREW significantly from baseline (≥ 160px)
        // That means DevTools opened AFTER initial page render.
        var curDiffW = w.outerWidth - w.innerWidth;
        var curDiffH = w.outerHeight - w.innerHeight;
        var grewW = curDiffW - _baseline.diffW;
        var grewH = curDiffH - _baseline.diffH;

        if (grewW > 160 || grewH > 160) {
            _showBlock();
        }
    }

    // Capture baseline after a short delay (let layout settle)
    setTimeout(_captureBaseline, 800);

    // Check only when size changes (not on timer — less aggressive)
    w.addEventListener('resize', function () {
        // Wait a tiny bit for the resize to settle before checking
        setTimeout(_sizeCheck, 100);
    });

    // Also periodic — but only AFTER baseline is captured
    setInterval(function () {
        if (_baseline) _sizeCheck();
    }, 1200);

    // ---------- 7. Console warning ----------
    try {
        if (w.console && w.console.clear) w.console.clear();
        w.console.log(
            '%cStop!',
            'color:#ff3b30;font-size:40px;font-weight:700;'
        );
        w.console.log(
            '%cThis browser feature is intended for developers. Content on this site is protected.',
            'color:#1c1c1e;font-size:14px;'
        );
    } catch (err) { }

    // ---------- 8. Disable Print ----------
    w.addEventListener('beforeprint', function () {
        d.body.style.display = 'none';
    });
    w.addEventListener('afterprint', function () {
        d.body.style.display = '';
    });

})();
