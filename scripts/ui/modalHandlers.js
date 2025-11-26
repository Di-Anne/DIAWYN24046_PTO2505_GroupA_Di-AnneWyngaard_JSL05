import { addNewTask, deleteTask, editTask } from "../tasks/newTaskManager.js";

let currentEditingTaskId = null; // Track task being edited


export function openTaskModal(task) {
    const modal = document.getElementById('task-modal');
    currentEditingTaskId = task.id;   // set ID here
    document.getElementById('task-title').value = task.title;
    document.getElementById('task-descrip').value = task.description;
    document.getElementById('task-status').value = task.status;
   
     // Delete button on task modal opens up delete confirmation modal
    document.getElementById('delete-btn').addEventListener('click', (event) => {
        event.stopPropagation(); 
        const deleteConfirmationModal = document.getElementById('deletion-message');
        deleteConfirmationModal.showModal();
    });

    // Confirm button to officially delete task 
    document.getElementById('btn-delete-confirm').addEventListener('click', () => {
        deleteTask(task.id);
        const deleteConfirmationModal = document.getElementById('deletion-message');
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
        currentEditingTaskId = null; // Adding a new task
    });

    newTaskCloseBtn.addEventListener('click', () => {
        newModal.close();
    });

    newTaskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Check validity of form
        if (!newTaskForm.checkValidity()) {
            newTaskForm.reportValidity();
            return;
        } 
        const title = document.getElementById("task-title").value.trim();
        const description = document.getElementById("task-descrip").value.trim();
        const status = document.getElementById("task-status").value.trim();

        if(currentEditingTaskId) {
            // Editing existing task
            editTask(currentEditingTaskId, {title, description, status});
        } else {
            //Add new task
            addNewTask();
        }
    });
}

export function editTaskHandler() {
    const saveChangesBtn = document.getElementById('save-btn');
    
    saveChangesBtn.addEventListener('click', () => {
        const title = document.getElementById("task-title").value.trim();
        const description = document.getElementById("task-descrip").value.trim();
        const status = document.getElementById("task-status").value.trim();
        if (currentEditingTaskId != null) {
            editTask(currentEditingTaskId, {title, description, status});
        } 
    });
}

