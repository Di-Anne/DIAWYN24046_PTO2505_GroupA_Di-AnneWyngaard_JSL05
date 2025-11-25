import { removeExistingTaskDivs, renderTasks } from "./ui/render.js";
import { closeTaskModal, newTaskModalHandler } from "./ui/modalHandlers.js";
import { getTasksFromStorage } from "./utils/localStorage.js";

/**
 * Initializes task-board 
 */
function initializeTaskBoard() {
    const storedTasks = getTasksFromStorage();
    console.log('Loaded from storage:', storedTasks);
    removeExistingTaskDivs();
    renderTasks(storedTasks);
    closeTaskModal();
    newTaskModalHandler();
    
}

// Initialize taskBoard after DOM has fully loaded
window.addEventListener("load", initializeTaskBoard);



