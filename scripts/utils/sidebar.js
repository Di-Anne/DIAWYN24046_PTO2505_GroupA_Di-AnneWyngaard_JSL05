
/**
 * Hide sidebar when hide-icon clicked
 */
export function hideSidebar() {
    const hideSidebarBtn = document.getElementById('nav-hide');
    const sidebar = document.getElementById('side-nav-bar');
    const showSidebarBtn = document.getElementById('nav-eyes');

    hideSidebarBtn.addEventListener('click', () => {
        sidebar.style.display = "none";
        showSidebarBtn.style.display = "block";
        showSidebarBtn.style
    });
}

