


export function addNewTask() {
    const inputTitle = document.getElementById('addtask-title');
    const inputDescrip = document.getElementById('addtask-descrip');
    const selectStatus = document.getElementById('addtask-status');

    
    const storedTasksArray = getTasksFromStorage();
    //Add new task inputs to initial array
    const newTask = {
        id: Math.max(...tasks.map(t => t.id)) + 1, //Find maximun existing id in initial tasks array then increment when new task added/ every new task gets an id greater than the existing one
        title: inputTitle.value.trim(),
        description: inputDescrip.value.trim(),
        status: selectStatus.value,
    }   

    storedTasksArray.push(newTask);

    localStorage.setItem('newTaskList', JSON.stringify(storedTasksArray));
}

