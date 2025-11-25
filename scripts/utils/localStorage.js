import { fetchInitialData } from "../api/fetchTasks.js";

/**
 * Saves task array to localStorage
 * @param {Array<Object>} tasks - The array of tasks
 */
export function saveTasksToStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Gets tasks from LocalStorage 
 * @returns {Array<Object>} the array of tasks
 */
export async function getTasksFromStorage() {
  // Ensure tasks are fetched (and saved) before reading
  await fetchInitialData();

  // Artificial delay so UI has time to update/ loader to show
  await delay(10);

  let storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    try {
      return JSON.parse(storedTasks);
    } catch(error) {
      console.error("Error parsing JSON:", error)
    }
  }
}

