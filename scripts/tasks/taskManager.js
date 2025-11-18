
function createNewTaskElement(task) {
    const taskNewElement = createElement('div');
    taskNewElement.className = "task-div";
    taskNewElement.textContent = task.title;

    taskNewElement.addEventListener('click', () => {
        openNewTaskModal(task);
    });
    return taskNewElement;
}