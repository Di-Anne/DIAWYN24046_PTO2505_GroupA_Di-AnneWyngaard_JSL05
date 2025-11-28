
const themeToggle = document.getElementById('nav-theme-toggle');
const themeToggleMobile = document.getElementById('mobile-nav-theme-toggle');
const logoLight = document.getElementById('nav-logo');
const logoDark = document.getElementById('nav-logo-dark');
const body = document.body;

function enableDarkmode() {
    body.classList.add('dark-mode');
    logoLight.style.display = "none";
    logoDark.style.display = "block";
    localStorage.setItem('darkmode', 'active');
}

function disableDarkmode() {
    body.classList.remove('dark-mode');
    logoLight.style.display = "block";
    logoDark.style.display = "none";
    localStorage.setItem('darkmode', null);
}

/**
 * On toggle change for desktop screens: switch to dark-mode theme and save in localStorage
 */

export function changeTheme() {
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            enableDarkmode();
        } else {
            disableDarkmode();
        }
    });
}

/**
 * On toggle change for smaller screens: switch to dark-mode theme and save in localStorage
 */
export function changeThemeMobile() {
    themeToggleMobile.addEventListener('change', () => {
        if (themeToggle.checked) {
            enableDarkmode();
        } else {
            disableDarkmode();
        }
    });
}
    
window.addEventListener("load", function () {
    const saved = localStorage.getItem('darkmode');
    if (saved === 'active') {
        body.classList.add('dark-mode');
        logoLight.style.display = "none";
        logoDark.style.display = "block";
        // Also make sure your toggle checkbox is checked, if relevant:
    if (themeToggle) themeToggle.checked = true;
    } else {
        body.classList.remove('dark-mode');
        logoLight.style.display = "block";
        logoDark.style.display = "none";
    if (themeToggle) themeToggle.checked = false;
    }
});