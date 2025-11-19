import { removeExistingTaskDivs, renderTasks } from "./ui/render.js";
import { closeTaskModal } from "./ui/modalHandlers.js";

/**
 * Initializes task-board 
 */
function initTaskBoard() {
    removeExistingTaskDivs ();
    renderTasks(storedTasks);
    closeTaskModal();
}

// Initialize taskBoard after DOM has fully loaded
window.addEventListener("load", initTaskBoard());



