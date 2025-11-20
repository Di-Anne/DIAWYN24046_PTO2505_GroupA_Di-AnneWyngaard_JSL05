// Clearing form inputs after submission gives visual evidence form was submitted
export function resetForm() {
    document.getElementById('addtask-title').value = "";
    document.getElementById('addtask-descrip').value = "";
    document.getElementById('addtask-status').value = "todo";
}