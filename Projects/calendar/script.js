let calarea3 = document.querySelector(".calarea3");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let monthyear = document.querySelector(".monthyear");
let today = document.querySelector(".todaybtn");

let weekrepesentatives = `<div class="date week">S</div>
            <div class="date week">M</div>
            <div class="date week">T</div>
            <div class="date week">W</div>
            <div class="date week">T</div>
            <div class="date week">F</div>
            <div class="date week">S</div>`;

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function firstDay(d, m, y) {
  const day = String(d).padStart(2, "0");
  const month = String(m + 1).padStart(2, "0");
  const dateString = `${y}-${month}-${day}`;
  const date = new Date(dateString);
  return date.getDay();
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let date = new Date();
let ndate = date.getDate();
let nmonth = date.getMonth();
let nyear = date.getFullYear();

update(nmonth, nyear);

let monthTracker = nmonth;
let yearTracker = nyear;

today.addEventListener("click", () => {
  update(nmonth, nyear);
});

function update(nm, ny) {
  let html = weekrepesentatives;
  let fday = firstDay(1, nm, ny);
  for (let j = 0; j < fday; j++) {
    html += `<div class="date rdate"></div>`;
  }

  const daysInCurrentMonth =
    nm === 1 && ((ny % 4 === 0 && ny % 100 !== 0) || ny % 400 === 0)
      ? 29
      : daysInMonth[nm];

  for (let i = 1; i <= daysInCurrentMonth; i++) {
    if (nm === nmonth && ny === nyear && i === ndate) {
      html += `<div class="date rdate active">${i}</div>`;
    } else {
      html += `<div class="date rdate rhover">${i}</div>`;
    }
  }

  calarea3.innerHTML = html;
  monthyear.innerHTML = `${months[nm]} ${ny}`;
}

prev.addEventListener("click", () => {
  if (monthTracker === 0) {
    monthTracker = 11;
    yearTracker--;
  } else {
    monthTracker--;
  }
  update(monthTracker, yearTracker);
});

next.addEventListener("click", () => {
  if (monthTracker === 11) {
    monthTracker = 0;
    yearTracker++;
  } else {
    monthTracker++;
  }
  update(monthTracker, yearTracker);
});
