let dateElement = document.querySelector(".date");
let week = document.querySelector(".week");
let month = document.querySelector(".month");
let year = document.querySelector(".year");

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const days = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

// Update the displayed date
update();

function update() {
  let currentDate = new Date();
  dateElement.innerHTML = zeroes(currentDate.getDate());
  week.innerHTML = days[currentDate.getDay()];
  month.innerHTML = months[currentDate.getMonth()];
  year.innerHTML = currentDate.getFullYear();
}

// Function to add leading zero for single-digit dates
function zeroes(a) {
  return a <= 9 ? "0" + a : a; // Fix: add leading zero to the value of `a`
}
