import { addNewTask, deleteTask } from "../tasks/newTaskManager.js";


export function openTaskModal(task) {
    const modal = document.getElementById('task-modal');
    document.getElementById('task-title').value = task.title;
    document.getElementById('task-descrip').value = task.description;
    document.getElementById('task-status').value = task.status;
   
     // Delete task when delete button is clicked
    document.getElementById('delete-btn').addEventListener('click', (event) => {
        event.stopPropagation(); 
        
        const deleteConfirmationModal = document.getElementById('deletion-message');
        deleteConfirmationModal.showModal();
    });

    document.getElementById('btn-delete-confirm').addEventListener('click', () => {
        deleteTask(task.id);
        deleteConfirmationModal.close();
    });

    modal.showModal();
};


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





