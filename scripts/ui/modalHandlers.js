import { addNewTask, deleteTask } from "../tasks/newTaskManager.js";

export function openTaskModal(task) {
    const modal = document.getElementById('task-modal');
    document.getElementById('task-title').value = task.title;
    document.getElementById('task-descrip').value = task.description;
    document.getElementById('task-status').value = task.status;

    document.getElementById('delete-btn').addEventListener('click', () => {
        const deleteModal = document.getElementById('deletion-message');
         // Show modal delete confirmation when delete button is clicked
        deleteModal.showModal();
   });

    modal.showModal();
};

function deleteConfirmationModal(task) {
    const deleteConfirmBtn = document.getElementById('btn-delete-confirm');
    const deleteCancelBtn = document.getElementById('btn-delete-cancel');

     deleteConfirmBtn.addEventListener('click', () => {
        deleteTask(task.id);
    });

    deleteCancelBtn.addEventListener('click', () => {
        deleteModal.close()
    });
}

deleteConfirmationModal();

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





