

/**
 * Finds the task container based on status
 * @param {string} status - status of task object
 * @returns {HTML element} The container of the task or null if not found
 */
function getColumnByStatus (status) {
    //Get column by status
    const columnDiv = document.querySelector(`.column-div[data-status="${status}"]`);
    if (!columnDiv) {
        return null;
    }

    //Now get the task container of that column to append task div later
    const taskContainer = columnDiv.querySelector(".task-container");
    return taskContainer;
}

/**
 * Remove all existing task divs from its task container
 */
function removeExistingTaskDivs () {
    initialTasks.forEach((taskContainer) => {
        taskContainer.innerHTML = "";
    });
}



