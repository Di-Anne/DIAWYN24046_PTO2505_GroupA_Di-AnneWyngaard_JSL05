import { fetchInitialData } from "../api/fetchTasks.js";

/**
 * Show loading message while tasks are being fetched from API
 */
const loader = document.getElementById('loader');
function showLoader() {
    loader.style.display = 'block'; 
}
function hideLoader() {
    loader.style.display = 'none'; 
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


/**
 * Synchronous version - read tasks from local Storage immediately
 * @returns - Array of stored tasks
 */
export function getTasksSync() {
  const raw = localStorage.getItem("tasks");
  if (!raw) {
    return [];
  }
  try {
    const parsed = JSON.parse(raw);
    if(Array.isArray(parsed)) {
      return parsed;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Could not parse tasks from localStorage", error);
    return [];
  }
}

/**
 * Saves task array to localStorage
 * @param {Array<Object>} tasks - The array of tasks
 */
export function saveTasksToStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

/**
 * Async-init version. Should be called on App start
 * Shows loader, checks storage, fetches from API if storage is empty
 * Otherwise, use existing storage
 * @returns {Array<Object>} the array of tasks
 */
export async function initTasks() {
  showLoader();   
  await delay(250);  // give browser a moment to paint the loader

  const stored = localStorage.getItem("tasks");
  let tasks;

  if (!stored) {
    // No tasks -> fetch from API
    try {
      await fetchInitialData();
    } catch (error) {
      console.warn("API fetch failed — will use empty list", error);
    }
  } else {
    try {
      const parsed = JSON.parse(stored);
      if (!Array.isArray(parsed) || parsed.length === 0) {
        // storage empty or invalid -> fetch from API
        await fetchInitialData();
      }
      // But if storage is not empty -> keep it
    } catch (error) {
      console.warn("Could not parse tasks from storage- refetching from API", error);
      await fetchInitialData();
    }
  }
  tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  hideLoader();  // hide loader when done
  return tasks;
}
 
