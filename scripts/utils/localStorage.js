import { fetchInitialData } from "../api/fetchTasks.js";

// Synchronous version - read tasks from local Storage immediately
export function getTasksSync() {
  const raw = localStorage.getItem("tasks");
  if (!raw) {
    return [];
  }
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
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
 * Async-init version. Should be called on App start
 * If no tasks in localStorage, fetch from API once
 * Otherwise, use existing storage
 * @returns {Array<Object>} the array of tasks
 */
export async function initTasks() {
  const stored = localStorage.getItem("tasks");

  showLoader();   // show your loader UI

  await delay(250);  // give browser a moment to paint the loader

  if (!stored) {
    try {
      const apiTasks = await fetchInitialData();
      localStorage.setItem("tasks", JSON.stringify(apiTasks));
    } catch (err) {
      console.warn("API fetch failed — will use empty list or stored data", err);
    }
  }

  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  hideLoader();  // hide loader when done

  return tasks;
  
}
 
