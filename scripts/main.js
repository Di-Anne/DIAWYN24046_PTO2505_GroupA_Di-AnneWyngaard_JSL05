import { removeExistingTaskDivs, renderTasks } from "./ui/render.js";
import { closeTaskModal, newTaskModalHandler, editTaskHandler } from "./ui/modalHandlers.js";
import { initTasks } from "./utils/localStorage.js";

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
}

// Initialize taskBoard after DOM has fully loaded
window.addEventListener("load", initializeTaskBoard);



