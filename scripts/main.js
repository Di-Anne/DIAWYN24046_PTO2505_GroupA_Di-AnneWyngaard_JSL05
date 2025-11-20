import { removeExistingTaskDivs, renderTasks } from "./ui/render.js";
import { closeTaskModal, newTaskModalHandler } from "./ui/modalHandlers.js";
import { getTasksFromStorage } from "./utils/localStorage.js";
import { renderTasks } from "./tasks/newTaskManager.js";

/**
 * Initializes task-board 
 */
function initializeTaskBoard() {
    const storedTasks = getTasksFromStorage();
    removeExistingTaskDivs ();
    renderTasks(storedTasks);
    closeTaskModal();
    newTaskModalHandler();
}

// Initialize taskBoard after DOM has fully loaded
window.addEventListener("load", initializeTaskBoard());



