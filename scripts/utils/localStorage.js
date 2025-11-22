import { fetchInitialData } from "../api/fetchTasks.js";

// Store initial tasks from API in variable 
  let initialTasks = fetchInitialData();
  
/**
 * Saves task array to localStorage
 * @param {Array<Object>} tasks - The array of tasks
 */

export function saveTasksToStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

/**
 * Gets tasks from LocalStorage 
 * @returns {Array<Object>} the array of tasks
 */
export function getTasksFromStorage() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    try {
      return JSON.parse(storedTasks);
    } catch(error) {
      console.error("Error parsing JSON:", error)
    }
  }
  
  // No tasks in storage then initialize storage with default data from API: initialTasks
  localStorage.setItem("tasks", JSON.stringify(initialTasks));
  return initialTasks;
}

