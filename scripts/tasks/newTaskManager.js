import { getTasksSync,  saveTasksToStorage } from "../utils/localStorage.js";
import { removeExistingTaskDivs, renderTasks } from "../ui/render.js";
import { resetForm } from "./form.js";

/**
 * Add a new task
 */
export function addNewTask() {
    const modalNew = document.getElementById('addtask-modal')
    const inputTitle = document.getElementById('addtask-title');
    const inputDescrip = document.getElementById('addtask-descrip');
    const selectStatus = document.getElementById('addtask-status');
    
    // Get current tasks (array)
    const storedTasks = getTasksSync();

    //Find maximum existing ID in tasks array then increment ID when new task added. If 0 tasks then give task id = 1
    let nextId;
    if (storedTasks.length > 0) {
        const ids = storedTasks.map((t) => t.id);
        const maxId = Math.max(...ids);
        nextId = maxId + 1;
    } else {
        nextId = 1;
    }
    
    const newTask = {
        id: nextId,
        title: inputTitle.value.trim(),
        description: inputDescrip.value.trim(),
        status: selectStatus.value
    };   

    //Add new task inputs to initial array (all tasks) already in memory= forming new array
    const updateTasks = [...storedTasks, newTask]; 

    // Save the updated tasks array to localStorage
    saveTasksToStorage(updateTasks);
    console.log('Saving tasks:', updateTasks);

    // Remove all existing task divs before rendering to prevent duplicates/ overflow
    removeExistingTaskDivs();
    renderTasks(updateTasks);
    resetForm();
    modalNew.close();
    return updateTasks; 
}

/**
 * Deletes tasks by its ID
 * @param {number} taskId - ID of task to delete
 */
export function deleteTask(taskId) {
    const tasks = getTasksSync();
    // If ID of task I want to delete is not equal, dont add into new array
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    saveTasksToStorage(updatedTasks);
    removeExistingTaskDivs();
    renderTasks(updatedTasks);
}


