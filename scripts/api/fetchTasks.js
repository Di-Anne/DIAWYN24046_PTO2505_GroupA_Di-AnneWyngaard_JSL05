const API_URL = "https://jsl-kanban-api.vercel.app/";

// Empty initial tasks array 
let initialTasks;

/**
 * Fetches initial task data from a given API and populate empty initialTasks array
 * @returns - populated initialTasks array
 */

export async function fetchInitialData() {
    // Runs if data has already been fetched
    if (initialTasks) {
        return initialTasks;
    }

    // Fetching data from API and populating array 
    try {
        const response = await fetch(API_URL);
        initialTasks = await response.json();
        return initialTasks;
    } catch (error) {
        console.error("API Error:", error);
    }
}

//Empty array for holding all of the tasks in localStorage
export const allTasks = [];