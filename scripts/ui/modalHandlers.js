import { addNewTask } from "../tasks/newTaskManager.js";

export function openTaskModal(task) {
    const modal = document.getElementById('task-modal');
    document.getElementById('task-title').value = task.title;
    document.getElementById('task-descrip').value = task.description;
    document.getElementById('task-status').value = task.status;
  
    modal.showModal();
    deleteConfirmationModal();
};

function deleteConfirmationModal() {
    const deleteModal = document.getElementById('deletion-message');
    const deleteModalForm = document.getElementById('delete-message-form');
    const deleteBtn = document.getElementById('delete-btn');
    const deleteCancelBtn = document.getElementById('btn-delete-cancel');

    deleteBtn.addEventListener('click', () => {
        deleteModal.showModal();
    });

    deleteCancelBtn.addEventListener('click', () => {
        deleteModal.close()
    });

    deleteModalForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // If inputs are valid proceed to add new task
        deleteTask(task.id);
    });
}

export function closeTaskModal() {
    const modal = document.getElementById('task-modal');
    const closeModalBtn = document.getElementById('close-btn');
    closeModalBtn.addEventListener('click', () => {
        modal.close();
    });
}

export function newTaskModalHandler() {
    const newModal = document.getElementById('addtask-modal');
    const newTaskBtn = document.getElementById('btn-addnewtask');
    const newTaskForm = document.getElementById('addtask-form');
    const newTaskCloseBtn = document.getElementById('cancel-addTask-btn');
    
    newTaskBtn.addEventListener('click', () => {
        newModal.showModal();
    });

    newTaskCloseBtn.addEventListener('click', () => {
        newModal.close();
    });

    newTaskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // If inputs are valid proceed to add new task
        if (newTaskForm.checkValidity()) {
            addNewTask();
        } else {
            newTaskForm.reportValidity();
        }
    });
}





