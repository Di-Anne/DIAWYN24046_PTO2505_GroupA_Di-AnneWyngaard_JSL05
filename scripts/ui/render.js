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

const priorityRank = { 
    high: 3, 
    medium: 2, 
    low: 1 
};

/**
 * Loop through tasks' statuses and sort tasks by priority from high to low
 */
 export function renderTasks(tasks) {
    // Gather all the task statuses
    const statuses = [...new Set(tasks.map(t => t.status))];

    statuses.forEach((status) => {
        const taskContainer = getTaskContainerByStatus(status);
        if (!taskContainer) return;

        // filter tasks' statuses and sort by priority from high to low
        const tasksWithStatus = tasks.filter(t => t.status === status)
        .sort((a, b) => (priorityRank[b.priority] || 0) - (priorityRank[a.priority] || 0));
       
        // After sorting by priority append to container and render
        tasksWithStatus.forEach(task => {
            const taskDiv = createTaskElement(task);
            taskContainer.appendChild(taskDiv);
    });
  });
}