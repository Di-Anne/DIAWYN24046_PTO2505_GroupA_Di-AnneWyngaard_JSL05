import { addNewTask } from "../tasks/newTaskManager.js";

export function newTaskModalHandler() {
    const newModal = document.getElementById('addtask-modal');
    const newTaskBtn = document.getElementById('btn-addnewtask');
    const newTaskForm = document.getElementById('addtask-form');
    const newTaskCloseBtn = document.getElementById('cancel-addTask-btn');
    
    newTaskBtn.addEventListener('click', () => {
        newModal.showModal();
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

    newTaskCloseBtn.addEventListener('click', () => {
        newModal.close();    
    });
}


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

