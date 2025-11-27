
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
    });
}

export function showSidebar() {
    const sidebar = document.getElementById('side-nav-bar');
    const showSidebarBtn = document.getElementById('nav-eyes');
    const sidebarContainer = document.getElementById('side-nav-bar');

    showSidebarBtn.addEventListener('click', () => {
        sidebar.style.display = "block";
        showSidebarBtn.style.display = "none";
        sidebarContainer.style.display = "flex";
        sidebarContainer.style.flexDirection = "column";
        sidebarContainer.style.justifyContent = "space-between";
    })
}

