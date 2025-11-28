import { createTaskElement } from "./taskElement.js";

/**
 * Finds the task container based on status
 * @param {string} status - status of task object
 * @returns {HTML element} The container of the task or null if not found
 */
function getTaskContainerByStatus (status) {
    //Get column by status
    const columnDiv = document.querySelector(`.column-div[data-status="${status}"]`);
    if (!columnDiv) {
        return null;
    }
    //Now get the task container of that column to append task div later
    const taskContainer = columnDiv.querySelector(".task-container");
    return taskContainer;
}

/**
 * Remove all existing task-divs from its task container to prevent duplicates
 */
export function removeExistingTaskDivs() {
    document.querySelectorAll('.task-container').forEach((container) => {
        container.innerHTML = "";
    });
}

const priorityRank = { high: 3, medium: 2, low: 1 };

/**
 * Renders ALL tasks to their appropriate columns
 */
 export function renderTasks(tasks) {
    const columnStatus = ['todo', 'doing', 'done'];
    tasks.forEach((task) => {
        const taskContainer = getTaskContainerByStatus(task.status);
        if (!taskContainer) return;
        const taskDiv = createTaskElement(task);
        taskContainer.appendChild(taskDiv);
    });
}



