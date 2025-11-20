import { getTasksFromStorage,  saveTasksToStorage } from "../utils/localStorage.js";
import { getTaskContainerByStatus } from "../ui/render.js";
import { createTaskElement } from "../ui/taskElement.js";


export function addNewTask() {
    const modalNew = document.getElementById('addtask-modal')
    const inputTitle = document.getElementById('addtask-title');
    const inputDescrip = document.getElementById('addtask-descrip');
    const selectStatus = document.getElementById('addtask-status');
    
    const storedTasks = getTasksFromStorage();
    //Push new task inputs to initial array (all tasks) already in memory.
    const newTask = {
        id: Math.max(...tasks.map(t => t.id)) + 1, //Find maximun existing id in initial tasks array then increment when new task added/ every new task gets an id greater than the existing one
        title: inputTitle.value.trim(),
        description: inputDescrip.value.trim(),
        status: selectStatus.value,
    }   
    const updatedTasks = storedTasks.push(newTask);

    // Save the updated tasks array to localStorage
    saveTasksToStorage(updatedTasks);
}

 // Re-render: create task div element and append it to correct column based on status
export function renderTasks(tasks) {
    tasks.forEach((task) => {
        const taskDivElement = createTaskElement(task);
        const taskContainer = getTaskContainerByStatus (task.status);

        taskContainer.appendChild(taskDivElement);
    })

    modalNew.close();
}
