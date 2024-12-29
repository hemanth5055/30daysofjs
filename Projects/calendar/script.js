// Select DOM elements
let calarea3 = document.querySelector(".calarea3"); // Area where calendar will be displayed
let prev = document.querySelector(".prev"); // Previous month button
let next = document.querySelector(".next"); // Next month button
let monthyear = document.querySelector(".monthyear"); // Displays the current month and year
let today = document.querySelector(".todaybtn"); // Button to jump to today's date

// HTML structure for days of the week
let weekrepesentatives = `<div class="date week">S</div>
            <div class="date week">M</div>
            <div class="date week">T</div>
            <div class="date week">W</div>
            <div class="date week">T</div>
            <div class="date week">F</div>
            <div class="date week">S</div>`;

// Array of days in each month (February defaults to 28 days)
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Function to get the first day of the month (e.g., 0 = Sunday, 1 = Monday)
function firstDay(d, m, y) {
  const day = String(d).padStart(2, "0"); // Ensure day is always 2 digits
  const month = String(m + 1).padStart(2, "0"); // Ensure month is always 2 digits
  const dateString = `${y}-${month}-${day}`; // Construct date string
  const date = new Date(dateString); // Create date object
  return date.getDay(); // Return the day of the week (0-6)
}

// Array of month names
const months = [
  "January", "February", "March", "April", "May", "June", "July", "August", 
  "September", "October", "November", "December"
];

// Initialize date
let date = new Date();
let ndate = date.getDate(); // Current day of the month
let nmonth = date.getMonth(); // Current month (0-11)
let nyear = date.getFullYear(); // Current year

update(nmonth, nyear); // Update calendar for the current month and year

let monthTracker = nmonth; // Tracker for the currently viewed month
let yearTracker = nyear; // Tracker for the currently viewed year

// Event listener for the "Today" button to show the current date
today.addEventListener("click", () => {
  update(nmonth, nyear); // Update the calendar to show the current month and year
});

// Function to update the calendar display
function update(nm, ny) {
  let html = weekrepesentatives; // Start with the week days header
  let fday = firstDay(1, nm, ny); // Get the first day of the month
  for (let j = 0; j < fday; j++) {
    html += `<div class="date rdate"></div>`; // Empty divs for days before the 1st of the month
  }

  // Determine the number of days in the current month
  const daysInCurrentMonth =
    nm === 1 && ((ny % 4 === 0 && ny % 100 !== 0) || ny % 400 === 0)
      ? 29 // Leap year adjustment for February
      : daysInMonth[nm]; // Get the standard days for the month

  // Generate the day boxes for the calendar
  for (let i = 1; i <= daysInCurrentMonth; i++) {
    // Highlight today's date
    if (nm === nmonth && ny === nyear && i === ndate) {
      html += `<div class="date rdate active">${i}</div>`; // Active class for today's date
    } else {
      html += `<div class="date rdate rhover">${i}</div>`; // Regular date box
    }
  }

  calarea3.innerHTML = html; // Update the calendar area with generated HTML
  monthyear.innerHTML = `${months[nm]} ${ny}`; // Update the month/year display
}

// Event listener for the previous month button
prev.addEventListener("click", () => {
  if (monthTracker === 0) {
    monthTracker = 11; // If it's January, go to December
    yearTracker--; // Decrease the year
  } else {
    monthTracker--; // Otherwise just go to the previous month
  }
  update(monthTracker, yearTracker); // Update the calendar
});

// Event listener for the next month button
next.addEventListener("click", () => {
  if (monthTracker === 11) {
    monthTracker = 0; // If it's December, go to January
    yearTracker++; // Increase the year
  } else {
    monthTracker++; // Otherwise just go to the next month
  }
  update(monthTracker, yearTracker); // Update the calendar
});
