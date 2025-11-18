

/**
 * Creates a single task div element in DOM
 * @param {Object} task - new task object
 * @returns the created task element
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