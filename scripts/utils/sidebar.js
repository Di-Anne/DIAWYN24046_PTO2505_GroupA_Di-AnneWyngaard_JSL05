
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

/**
 * Show sidebar when eyes-icon is clicked
 */
export function showSidebar() {
    const sidebar = document.getElementById('side-nav-bar');
    const showSidebarBtn = document.getElementById('nav-eyes');


    showSidebarBtn.addEventListener('click', () => {
        sidebar.style.display = "block";
        showSidebarBtn.style.display = "none";
        sidebar.style.display = "flex";
        sidebar.style.flexDirection = "column";
        sidebar.style.justifyContent = "space-between";
        sidebar.classList.add("side-nav-bar");
    })
}









