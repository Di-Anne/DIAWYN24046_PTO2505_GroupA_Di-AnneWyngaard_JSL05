import { openTaskModal } from "./modalHandlers.js";

/**
 * Creates a single task div element in DOM
 * @param {Object} task - task object
 * @returns {HTML element} The created task element
 */
export function createTaskElement(task) {
    const taskDiv = document.createElement('div');
    taskDiv.className = "task-div";
    taskDiv.textContent = task.title;

    taskDiv.addEventListener('click', () => {
        openTaskModal(task);
    });
    return taskDiv;
}