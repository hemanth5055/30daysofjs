let date = document.querySelector(".date");
let week = document.querySelector(".week");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  // Array for days
  const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
update();

function update() {
  let date = new Date();
  console.log(
    date.getDate(),
    date.getDay(),
    date.getMonth(),
    date.getFullYear()
  );
  date.innerHTML = zeroes(date.getDate());
  week.innerHTML = days[date.getDay()];
  month.innerHTML = months[date.getMonth()];
  year.innerHTML = date.getFullYear();
}

function zeroes(a) {
  return a <= 9 ? "0" + 9 : a;
}
