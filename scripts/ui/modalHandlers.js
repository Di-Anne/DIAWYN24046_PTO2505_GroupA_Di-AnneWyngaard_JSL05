
/**
 * Opens modal and shows pre-filled details
 * @param {Object} task - task object to dsiplay in modal
 */
export function openTaskModal (task) {
    const modal = document.getElementById('task-modal');
    document.getElementById('task-title').value = task.title;
    document.getElementById('task-descrip').value = task.description;
    document.getElementById('task-status').value = task.status;
    modal.showModal();
}

 export function closeTaskModal () {
    const modal = document.getElementById('task-modal');
    const closeModalBtn = document.getElementById('close-btn');

    closeModalBtn.addEventsListener('click', () => {
        modal.close();
    });
}