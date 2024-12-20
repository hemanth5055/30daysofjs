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

const daysInMonth = [
  31, // January
  28, // February (non-leap year)
  31, // March
  30, // April
  31, // May
  30, // June
  31, // July
  31, // August
  30, // September
  31, // October
  30, // November
  31, // December
];
function firstDay(d, m, y) {
  let k = d + MonthCode[m] + 6 + y - 2000 + Math.floor((y - 2000) / 4);
  return k % 7;
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

const MonthCode = [0, 3, 3, 6, 1, 4, 6, 2, 5, 1, 3, 5];
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
    html += ` <div class="date rdate"> </div>`;
  }
  if ((ny % 4 == 0 && ny % 100 != 0) || ny % 400 == 0) {
    if (nm == 1) {
      for (let i = 1; i <= 29; i++) {
        if (nm == nmonth && ny == nyear && i == ndate) {
          html += `<div class="date rdate active">${i}</div>`;
        } else {
          html += `<div class="date rdate rhover">${i}</div>`;
        }
      }
    } else {
      for (let i = 1; i <= daysInMonth[nm]; i++) {
        if (nm == nmonth && ny == nyear && i == ndate) {
          html += `<div class="date rdate active">${i}</div>`;
        } else {
          html += `<div class="date rdate rhover">${i}</div>`;
        }
      }
    }
  } else {
    for (let i = 1; i <= daysInMonth[nm]; i++) {
      if (nm == nmonth && ny == nyear && i == ndate) {
        html += `<div class="date rdate active">${i}</div>`;
      } else {
        html += `<div class="date rdate rhover">${i}</div>`;
      }
    }
  }

  calarea3.innerHTML = html;
  monthyear.innerHTML = months[nm] + " " + ny;
}

prev.addEventListener("click", () => {
  if (monthTracker == 0) {
    monthTracker = 11;
    yearTracker--;
  } else {
    monthTracker--;
  }
  console.log(monthTracker, yearTracker);
  update(monthTracker, yearTracker);
});
next.addEventListener("click", () => {
  if (monthTracker == 11) {
    monthTracker = 0;
    yearTracker++;
  } else {
    monthTracker++;
  }
  console.log(monthTracker, yearTracker);
  update(monthTracker, yearTracker);
});
