/**
 * Open mobile nav-bar menu
 */
export function openMobileMenuModal() {
    const mobileModal = document.getElementById('nav-bar-mobile-menu');
    const favicon = document.getElementById('favicon-mobile');
    const bodyBackgroundDiv = document.createElement('div');
    const bodyElement = document.body;
    

    favicon.addEventListener('click', () => {
        mobileModal.showModal();

        bodyBackgroundDiv.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        bodyBackgroundDiv.style.zIndex = "2";
        bodyBackgroundDiv.style.width = "100vh";
        bodyBackgroundDiv.style.height = "100vh";
        bodyElement.appendChild(bodyBackgroundDiv);
        
    });
}

/**
 * Close mobile nav-bar menu
 */
export function closeMobileMenuModal() {
    const mobileModal = document.getElementById('nav-bar-mobile-menu');
    const closeBtn = document.getElementById('cancel-mobilemenu-btn');

    closeBtn.addEventListener('click', () => {
        mobileModal.close();
    });
}