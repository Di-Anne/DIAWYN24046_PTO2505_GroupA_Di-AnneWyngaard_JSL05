import { getTasksFromStorage,  saveTasksToStorage } from "../utils/localStorage.js";
import { removeExistingTaskDivs, renderTasks } from "../ui/render.js";
import { resetForm } from "./form.js";



export function addNewTask() {
    const modalNew = document.getElementById('addtask-modal')
    const inputTitle = document.getElementById('addtask-title');
    const inputDescrip = document.getElementById('addtask-descrip');
    const selectStatus = document.getElementById('addtask-status');
    
    const storedTasks = getTasksFromStorage();
    const newTask = {
        id: Math.max(...tasks.map(t => t.id)) + 1, //Find maximun existing id in initial tasks array then increment when new task added/ every new task gets an id greater than the existing one
        title: inputTitle.value.trim(),
        description: inputDescrip.value.trim(),
        status: selectStatus.value,
    }   

    //Add new task inputs to initial array (all tasks) already in memory= forming new array
    const updatedTasks = [...storedTasks, newTask]; //WHY? Why not modify original array and push new task instead?

    // Save the updated tasks array to localStorage
    saveTasksToStorage(updatedTasks);

    // Remove all existing task divs before rendering to prevent duplicates/ overflow
    removeExistingTaskDivs();
    renderTasks(updatedTasks);
    resetForm();
    modalNew.close();
}
