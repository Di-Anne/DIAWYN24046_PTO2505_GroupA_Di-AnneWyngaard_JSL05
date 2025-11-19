import { removeExistingTaskDivs, renderTasks } from "./ui/render.js";
import { closeTaskModal, openNewTaskModal } from "./ui/modalHandlers.js";
import { getTasksFromStorage } from "./utils/localStorage.js";

/**
 * Initializes task-board 
 */
function initializeTaskBoard() {
    const storedTasks = getTasksFromStorage();
    removeExistingTaskDivs ();
    renderTasks(storedTasks);
    closeTaskModal();
    openNewTaskModal();
}

// Initialize taskBoard after DOM has fully loaded
window.addEventListener("load", initializeTaskBoard());



