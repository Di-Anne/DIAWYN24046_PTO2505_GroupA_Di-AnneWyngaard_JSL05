import { initialTasks } from "../../initialData.js";

/**
 * Saves task array to localStorage
 * @param {Array<Object>} tasks 
 */

export function saveTasksToStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

/**
 * Gets tasks from LocalStorage or initializes with initialTasks if no tasks in storage
 * @returns {Array<Object>} the array of tasks
 */
export function getTasksFromStorage() {
  const stored = localStorage.getItem("tasks");
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (err) {
      console.error("Error parsing tasks from localStorage:", err);
    }
  }

  // No tasks in storage then initialize with initialTasks
  localStorage.setItem("tasks", JSON.stringify(initialTasks));
  return initialTasks;
}