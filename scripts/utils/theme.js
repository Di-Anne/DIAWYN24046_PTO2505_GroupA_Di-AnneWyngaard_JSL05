const themeToggle = document.getElementById('nav-theme-toggle');
const themeToggleMobile = document.getElementById('mobile-nav-theme-toggle');
const logoLight = document.getElementById('nav-logo');
const logoDark = document.getElementById('nav-logo-dark');
const body = document.body;

/**
 * Enable dark-mode by adding dark-mode classlist to body element and save theme preference to local storage
 */
function enableDarkmode() {
    body.classList.add('dark-mode');
    logoLight.style.display = "none";
    logoDark.style.display = "block";
    localStorage.setItem('darkmode', 'active');
    // Make both toggles reflect dark mode
    if (themeToggle) themeToggle.checked = true;
    if (themeToggleMobile) themeToggleMobile.checked = true;
}

/**
 * Disable dark-mode by removing dark-mode classlist from body element and save theme preference to local storage
 */
function disableDarkmode() {
    body.classList.remove('dark-mode');
    logoLight.style.display = "block";
    logoDark.style.display = "none";
    localStorage.removeItem('darkmode');
    if (themeToggle) themeToggle.checked = false;
    if (themeToggleMobile) themeToggleMobile.checked = false;
}

/**
 * Switch theme when toggle is clicked on desktop and mobile screens
 */

export function changeTheme() {
    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) enableDarkmode();
            else disableDarkmode();
        });
    }
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('change', () => {
            if (themeToggleMobile.checked) enableDarkmode();
            else disableDarkmode();
        });
    }

    // Retrive saved theme from local storage and display after the page refreshes/ loads
    const storedTheme = localStorage.getItem('darkmode');
    if (storedTheme === 'active') {
        enableDarkmode();
    } else {
        disableDarkmode();
    }
}
