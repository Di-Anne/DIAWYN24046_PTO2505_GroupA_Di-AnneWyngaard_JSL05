import { openTaskModal } from "./modalHandlers.js";


/**
 * Creates a single task div element in DOM
 * @param {Object} task - task object
 * @returns {HTML element} The created task element
 */
export function createTaskElement(task) {
    const taskDiv = document.createElement('div');
    taskDiv.className = "task-div";
    taskDiv.dataset.taskId = task.id;

    // Title of card
    const titleElement = document.createElement('div');
    titleElement.className = 'task-title';
    titleElement.textContent = task.title;
    taskDiv.appendChild(titleElement);

    // Priority dot (only if task.priority exists)
    if (task.priority) {
      const dot = document.createElement('span');
      dot.classList.add('priority-dot');
      // Add colour class depending on priority value
      if (task.priority === 'high') {
        dot.classList.add('high');
      } else if (task.priority === 'medium') {
        dot.classList.add('medium');
      } else if (task.priority === 'low') {
        dot.classList.add('low');
      } else {
        // optional: fallback class
        dot.classList.add('low');
      }
      taskDiv.appendChild(dot);
    }

    // Click listener to open task modal
    taskDiv.addEventListener('click', () => {
        openTaskModal(task);
    });
    return taskDiv;
}





