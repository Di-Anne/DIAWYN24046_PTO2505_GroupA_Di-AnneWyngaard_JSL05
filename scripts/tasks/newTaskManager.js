import { getTasksFromStorage,  saveTasksToStorage } from "../utils/localStorage.js";
import { removeExistingTaskDivs, renderTasks } from "../ui/render.js";
import { resetForm } from "./form.js";

export function addNewTask() {
    const modalNew = document.getElementById('addtask-modal')
    const inputTitle = document.getElementById('addtask-title');
    const inputDescrip = document.getElementById('addtask-descrip');
    const selectStatus = document.getElementById('addtask-status');
    
    const storedTasks = getTasksFromStorage();
    console.log(storedTasks);
    //Find maximum existing id in initial tasks array then increment id when new task added. If 0 tasks then give task id = 1
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
    const updatedTasks = [...storedTasks, newTask]; //WHY? Why not modify original array and push new task to original array instead?

    // Save the updated tasks array to localStorage
    saveTasksToStorage(updatedTasks);

    // Remove all existing task divs before rendering to prevent duplicates/ overflow
    removeExistingTaskDivs();
    renderTasks(updatedTasks);
    resetForm();
    modalNew.close();
}
