import { removeExistingTaskDivs, renderTasks } from "./ui/render.js";
import { closeTaskModal, newTaskModalHandler, editTaskHandler } from "./ui/modalHandlers.js";
import { initTasks } from "./utils/localStorage.js";
import { hideSidebar, showSidebar } from "./utils/sidebar.js";
import { openMobileMenuModal, closeMobileMenuModal } from "./ui/sidebarUI.js";

/**
 * Initializes task-board 
 */
async function initializeTaskBoard() {
    // This ensures loader completes before rendering tasks
    const storedTasks = await initTasks();
    console.log('Loaded from storage:', storedTasks);

    removeExistingTaskDivs();
    renderTasks(storedTasks);

    // Then initialize your modal
    closeTaskModal();
    newTaskModalHandler();
    editTaskHandler();
    openMobileMenuModal();
    closeMobileMenuModal();
    

    hideSidebar();
    showSidebar(); 
}

// Initialize taskBoard after DOM has fully loaded
window.addEventListener("load", initializeTaskBoard);



