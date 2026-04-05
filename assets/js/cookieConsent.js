document.addEventListener('DOMContentLoaded', function() {
    fetch('cookieConsent.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
            initializeCookieConsent();
        });

    function initializeCookieConsent() {
        if (!localStorage.getItem('cookiesAccepted')) {
            document.getElementById('cookieConsent').style.display = 'block';
        }

        document.getElementById('acceptCookies').addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'true');
            document.getElementById('cookieConsent').style.display = 'none';
            // Aquí puedes añadir el código para activar las cookies.
        });

        document.getElementById('rejectCookies').addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'false');
            document.getElementById('cookieConsent').style.display = 'none';
            // Aquí puedes añadir el código para desactivar las cookies.
        });
    }
});
