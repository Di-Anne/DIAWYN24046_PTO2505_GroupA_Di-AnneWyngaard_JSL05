import { initialTasks } from "../../initialData.js";

/**
 * Saves task array to localStorage
 * @param {Array<Object>} tasks 
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
  // No tasks in storage then initialize with default data: initialTasks
  localStorage.setItem("tasks", JSON.stringify(initialTasks));
  return initialTasks;
}