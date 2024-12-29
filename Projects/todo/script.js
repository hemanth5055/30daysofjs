// Initialize tasks array and other required elements
let tasks; // Array to store tasks
let taskinp = document.querySelector(".taskinp"); // Input field for tasks
let addbtn = document.querySelector(".addbtn"); // Button to add tasks
let tasksdisplayarea = document.querySelector(".tasksdisplayarea"); // Area to display tasks
let clear = document.querySelector(".clear"); // Button to clear all tasks

// Retrieve unique ID for tasks from local storage, or initialize to 0
let uid = localStorage.getItem("uid")
  ? parseInt(localStorage.getItem("uid"))
  : 0;

// Retrieve tasks from local storage or initialize an empty array
if (localStorage.getItem("data")) {
  tasks = JSON.parse(localStorage.getItem("data"));
} else {
  tasks = [];
  localStorage.setItem("data", JSON.stringify(tasks));
}

// Render the tasks on the page
render();

// Function to update local storage with the current tasks array
function updatelocalstorage() {
  localStorage.setItem("data", JSON.stringify(tasks));
}

// Add a task when the add button is clicked
addbtn.addEventListener("click", () => {
  let temp = taskinp.value; // Get task input value
  taskinp.value = ""; // Clear the input field
  if (temp !== "") {
    // If the input is not empty, create a task object
    let tempObj = { id: uid, t: temp }; // Task object with unique ID and text
    uid++; // Increment unique ID
    tasks.push(tempObj); // Add the task to the tasks array
    render(); // Update the display
    updatelocalstorage(); // Save tasks to local storage
    localStorage.setItem("uid", uid); // Update unique ID in local storage
  } else {
    console.log("Enter the task"); // Log message if input is empty
  }
});

// Function to render tasks on the page
function render() {
  let html = ``; // Initialize empty HTML string
  for (let i = tasks.length - 1; i >= 0; i--) {
    // Loop through tasks in reverse order to display newest first
    html += `<div class="task">
              <div class="taskname"><h2>${tasks[i].t}</h2></div>
              <div class="del" onclick="deleter(${tasks[i].id})">x</div>
            </div>`;
  }
  tasksdisplayarea.innerHTML = html; // Update the tasks display area
}

// Function to delete a task by ID
function deleter(did) {
  tasks = tasks.filter((task) => task.id !== did); // Remove task with matching ID
  render(); // Update the display
  updatelocalstorage(); // Save updated tasks to local storage
}

// Clear all tasks when the clear button is clicked
clear.addEventListener("click", () => {
  tasks = []; // Reset tasks array
  render(); // Update the display
  updatelocalstorage(); // Save updated tasks to local storage
});
