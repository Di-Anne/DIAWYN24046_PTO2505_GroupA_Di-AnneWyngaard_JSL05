

/**
 * Creates a single task div element in DOM
 * @param {Object} task - task object
 * @returns {HTML element} The created task element
 */
export function createNewTaskElement(task) {
    const taskDiv = createElement('div');
    taskDiv.className = "task-div";
    taskDiv.textContent = task.title;

    taskDiv.addEventListener('click', () => {
        openNewTaskModal(task);
    });
    return taskDiv;
}