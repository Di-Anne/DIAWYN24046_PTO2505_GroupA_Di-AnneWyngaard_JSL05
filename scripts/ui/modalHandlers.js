
/**
 * Opens modal and shows pre-filled details
 * @param {Object} task - task object to dsiplay in modal
 */
function openTaskModal (task) {
    const modal = document.getElementById('task-modal');
    document.getElementById('task-title').value = task.title;
    document.getElementById('task-descrip').value = task.description;
    document.getElementById('task-status').value = task.status;
    modal.showModal();
}