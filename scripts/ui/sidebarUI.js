/**
 * Open mobile nav-bar menu
 */
export function openMobileMenuModal() {
    const favicon = document.getElementById('favicon-mobile');
    const navBarMobileModal = document.getElementById('nav-bar-mobile-menu');
    const modalBackground = document.getElementById('mobile-modal-overlay');
    const lauchHeaderContainer = document.getElementById('main-layout-container');
    const launchHeader = document.getElementById('launch-header');

    favicon.addEventListener('click', () => {
        modalBackground.style.display = "block";
        navBarMobileModal.style.display = "block";
        lauchHeaderContainer.classList.add("main-layout-container-mobile");
        launchHeader.classList.add("launch-header-mobile");
    });
}

/**
 * Close mobile nav-bar menu
 */
export function closeMobileMenuModal() {
    const closeBtn = document.getElementById('cancel-mobilemenu-btn');
    const navBarMobileModal = document.getElementById('nav-bar-mobile-menu');
    const modalBackground = document.getElementById('mobile-modal-overlay');
    const lauchHeaderContainer = document.getElementById('main-layout-container');
    const launchHeader = document.getElementById('launch-header');

    closeBtn.addEventListener('click', () => {
        modalBackground.style.display = "none";
        navBarMobileModal.style.display = "none";
        lauchHeaderContainer.classList.remove("main-layout-container-mobile");
        launchHeader.classList.remove("launch-header-mobile");
    });
}