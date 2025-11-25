/**
 * Show loading message while tasks are being fetched from API
 */
const loader = document.getElementById('loader');

const API_URL = "https://jsl-kanban-api.vercel.app/";

// Empty initial tasks array 
let initialTasks;

function showLoader() {
    loader.style.display = 'block'; 
}

function hideLoader() {
    loader.style.display = 'none'; 
}

/**
 * Fetches initial task data from a given API and populate empty initialTasks array, saves array to localStorage
 * @returns - populated initialTasks array
 */
export async function fetchInitialData() {
    // Runs if data has already been fetched
    if (initialTasks) {
        return initialTasks;
    }

    // Show loader while tasks are being fetched
    showLoader();

    // Fetching data from API and populating array 
    try {
        const response = await fetch(API_URL);
        initialTasks = await response.json();

        // Save API data (array) to localStorage 
        localStorage.setItem("tasks", JSON.stringify(initialTasks));
        console.log("Fetched tasks:", initialTasks);
        return initialTasks;
    } catch (error) {
        console.error("API Error:", error);
    } finally {
        hideLoader();
    }
}

// Empty array for holding API tasks in local storage
export const apiTasks = []
