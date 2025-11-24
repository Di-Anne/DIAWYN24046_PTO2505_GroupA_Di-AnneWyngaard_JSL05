const loader = document.getElementById('loader');

function showLoader() {
    loader.style.display = 'block'; 
}

function hideLoader() {
    loader.style.display = 'none'; 
}

const API_URL = "https://jsl-kanban-api.vercel.app/";

// Empty initial tasks array 
let initialTasks;

/**
 * Fetches initial task data from a given API and populate empty initialTasks array, saves array to localStorage
 * @returns - populated initialTasks array
 */

export async function fetchInitialData() {
    // Runs if data has already been fetched
    if (initialTasks) {
        return initialTasks;
    }

    // Fetching data from API and populating array 
    try {
        showLoader();
        const response = await fetch(API_URL);
        initialTasks = await response.json();

        // Save API data (array) to localStorage 
        localStorage.setItem("tasks", JSON.stringify(initialTasks));
        console.log(initialTasks);

        return initialTasks;
    } catch (error) {
        console.error("API Error:", error);
    } finally {
        hideLoader();
    }
}

//Empty array for holding all of the tasks in localStorage
export const allTasks = [];