window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-87R5B38JX4');

/**
 * this checks the localStorage 
 * if it already has the variable saved
 */
 function checkAcceptedCookies() {
    if (localStorage.acceptCookies != 'true') {
        cajacookies.style.display = 'block';
    } else {
        cajacookies.style.display = 'none';
    }
}

/**
 * here we save the variable that 
 * stores if the use of cookies 
 * has been accepted so we 
 * will not show the message again
 *  */ 
function acceptCookies() {
    localStorage.acceptCookies = 'true';
    cajacookies.style.display = 'none';
}

/* run on web load */
document.addEventListener('DOMContentLoaded', function () {
    checkAcceptedCookies();
}, false);