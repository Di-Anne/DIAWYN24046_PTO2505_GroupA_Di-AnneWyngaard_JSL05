

/**
 * Creates a single task element in DOM
 * @param {Object} task - new task object
 * @returns the created task element
 */
function createNewTaskElement(task) {
    const taskNewElement = createElement('div');
    taskNewElement.className = "task-div";
    taskNewElement.textContent = task.title;

    taskNewElement.addEventListener('click', () => {
        openNewTaskModal(task);
    });
    return taskNewElement;
}