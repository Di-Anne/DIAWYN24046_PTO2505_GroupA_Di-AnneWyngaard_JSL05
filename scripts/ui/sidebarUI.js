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