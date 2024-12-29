// Select the hour, minute, second, and AM/PM elements from the DOM
let hour = document.querySelector(".hrs");
let minutes = document.querySelector(".min");
let seconds = document.querySelector(".sec");
let ampm = document.querySelector(".ampm");

// Set an interval to call the render function every second
setInterval(() => {
  render();
}, 1000);

// Function to update the clock display
function render() {
  let date = new Date(); // Get the current date and time
  hour.innerHTML = addzeroes(changetime(date.getHours())); // Update hour with formatted value
  minutes.innerHTML = addzeroes(date.getMinutes()); // Update minutes with formatted value
  seconds.innerHTML = addzeroes(date.getSeconds()); // Update seconds with formatted value
  ampm.innerHTML = decideampm(date.getHours()); // Determine and update AM/PM
}

// Helper function to add leading zeroes for single-digit values
function addzeroes(value) {
  return value > 9 ? value : "0" + value;
}

// Helper function to decide whether it's AM or PM based on the hour
function decideampm(hour) {
  return hour > 12 ? "PM" : "AM";
}

// Helper function to convert 24-hour time to 12-hour time
function changetime(hour) {
  return hour > 12 ? hour - 12 : hour;
}
