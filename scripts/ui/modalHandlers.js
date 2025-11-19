
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

 export function closeTaskModal() {
    const modal = document.getElementById('task-modal');
    const closeModalBtn = document.getElementById('close-btn');

    closeModalBtn.addEventsListener('click', () => {
        modal.close();
    });
}

export function openNewTaskModal() {
    
    const addNewTaskBtn1 = document.getElementById('btn-addnewtask');
    const addNewTaskBtn2 = document.getElementById('btn-addnewtask');

    addNewTaskBtn1.addEventListener('click', () => {
        const newModal = document.getElementById('addtask-modal');
        newModal.showModal();
    });

    addNewTaskBtn2.addEventListener('click', () => {
        const newModal = document.getElementById('addtask-modal');
        newModal.showModal();
    });    
}
