// Select necessary DOM elements
const calculate = document.querySelector(".submit");
const year = document.querySelector(".year");
const months = document.querySelector(".months");
const days = document.querySelector(".days");
const daySelect = document.getElementById("dayinp");
const monthSelect = document.getElementById("monthinp");
const yearSelect = document.getElementById("yearinp");

// Define the number of days in each month (non-leap year)
const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Populate the day dropdown (1-31)
for (let i = 1; i <= 31; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  daySelect.appendChild(option);
}

// Populate the year dropdown (from current year back to 1900)
const currentYear = new Date().getFullYear();
for (let i = currentYear; i >= 1900; i--) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  yearSelect.appendChild(option);
}

// Event listener for calculating the age
calculate.addEventListener("click", () => {
  // Validate if all date fields are selected
  if (!daySelect.value || !monthSelect.value || !yearSelect.value) {
    alert("Please select a valid birthdate");
    return;
  }

  // Parse selected birthdate values
  const byear = Number(yearSelect.value); // Birth year
  const bmonth = Number(monthSelect.value) - 1; // Birth month (0-indexed)
  const bday = Number(daySelect.value); // Birth day

  // Get the current date
  const today = new Date();
  const nyear = today.getFullYear(); // Current year
  const nmonth = today.getMonth(); // Current month (0-indexed)
  const nday = today.getDate(); // Current day

  // Calculate days in the mid-phase years (full years between birth and current year)
  const midPhaseDays = calculateMidPhaseDays(byear + 1, nyear - 1);

  // Calculate remaining days in the birth year
  const initialPhaseDays = calculateDaysInYear(byear, bmonth, bday, true);

  // Calculate days passed in the current year
  const finalPhaseDays = calculateDaysInYear(nyear, nmonth, nday, false);

  // Compute total days, then convert to years, months, and days
  const totalDays = initialPhaseDays + midPhaseDays + finalPhaseDays;
  const totalYears = Math.floor(totalDays / 365);
  const remainingDays = totalDays % 365;
  const totalMonths = Math.floor(remainingDays / (365 / 12)); // Approximate months
  const totalRemainingDays = remainingDays % 30; // Approximate remaining days

  // Update the UI with the calculated values
  year.textContent = totalYears;
  months.textContent = totalMonths;
  days.textContent = totalRemainingDays;
});

// Function to check if a year is a leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Function to calculate days in a year (either start or end phase)
function calculateDaysInYear(year, month, day, isStartPhase) {
  let days = 0;

  if (isStartPhase) {
    // Add remaining days in the birth month
    days += isLeapYear(year) && month === 1 ? 29 - day : daysInMonths[month] - day;

    // Add days from the remaining months of the birth year
    for (let i = month + 1; i < 12; i++) {
      days += i === 1 && isLeapYear(year) ? 29 : daysInMonths[i];
    }
  } else {
    // Add days from the beginning of the current year to the current month
    for (let i = 0; i < month; i++) {
      days += i === 1 && isLeapYear(year) ? 29 : daysInMonths[i];
    }

    // Add days in the current month
    days += day;
  }

  return days;
}

// Function to calculate total days in the mid-phase years
function calculateMidPhaseDays(startYear, endYear) {
  let days = 0;

  for (let year = startYear; year <= endYear; year++) {
    days += isLeapYear(year) ? 366 : 365; // Add 366 days for leap years, otherwise 365
  }

  return days;
}
