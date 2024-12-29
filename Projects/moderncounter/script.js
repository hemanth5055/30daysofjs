// Select elements from the DOM for increment, decrement, display, collection, save, and clear actions
let increase = document.querySelector(".plus");
let decrease = document.querySelector(".minus");
let number = document.querySelector(".number");
let collection = document.querySelector(".collection");
let save = document.querySelector(".save");
let clear = document.querySelector(".clear");

// Initialize the counter value and an array to store saved numbers
let value = 0;
let numbers = [];

// Add an event listener for the increment button
increase.addEventListener("click", () => {
  value++; // Increment the value
  update(); // Update the displayed number
});

// Add an event listener for the decrement button
decrease.addEventListener("click", () => {
  value--; // Decrement the value
  update(); // Update the displayed number
});

// Add an event listener for the save button
save.addEventListener("click", () => {
  numbers.push(value); // Add the current value to the saved numbers array
  updatesavednumbers(); // Update the saved numbers display
});

// Function to update the displayed number
function update() {
  number.innerHTML = value; // Set the inner HTML of the number element to the current value
}

// Function to update the displayed collection of saved numbers
function updatesavednumbers() {
  let html = ``; // Initialize an empty string for the HTML
  // Iterate through the saved numbers array in reverse order
  for (let i = numbers.length - 1; i >= 0; i--) {
    html += `<div class="card">${numbers[i]}</div>`; // Add a card for each saved number
  }
  collection.innerHTML = html; // Update the inner HTML of the collection element
}

// Add an event listener for the clear button
clear.addEventListener("click", () => {
  numbers = []; // Reset the saved numbers array
  collection.innerHTML = `<h3 class="datanone">No Numbers saved</h3>`; // Display a message indicating no saved numbers
});
