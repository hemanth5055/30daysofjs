let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let timestamparea = document.querySelector(".timestamparea");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let mark = document.querySelector(".mark");

let secs = 0;
let mins = 0;
let hrs = 0;
let timerId;
let isRunning = false;
let timestamps = [];

update();

start.addEventListener("click", () => {
  run();
});

stop.addEventListener("click", () => {
  isRunning = false;
  clearTimeout(timerId);
});

mark.addEventListener("click", () => {
  if (isRunning) {
    let temp = `${addzeroes(hrs)}:${addzeroes(mins)}:${addzeroes(secs)}`;
    timestamps.push(temp);
    updatetimestamps();
  }
});

reset.addEventListener("click", () => {
  isRunning = false;
  clearTimeout(timerId);
  hrs = mins = secs = 0;
  timestamps = [];
  update();
  updatetimestamps();
});

function update() {
  hours.innerHTML = addzeroes(hrs);
  minutes.innerHTML = addzeroes(mins);
  seconds.innerHTML = addzeroes(secs);
}

function addzeroes(num) {
  return num < 10 ? "0" + num : num;
}

function updatetimestamps() {
  let html = "";
  timestamps.forEach((timestamp) => {
    html = `<div class="stamp">${timestamp}</div>` + html;
  });
  timestamparea.innerHTML = html;
}

async function delay() {
  return new Promise((resolve) => {
    timerId = setTimeout(resolve, 1000);
  });
}

async function run() {
  if (isRunning) return;
  isRunning = true;
  while (isRunning) {
    secs++;
    if (secs === 60) {
      secs = 0;
      mins++;
    }
    if (mins === 60) {
      mins = 0;
      hrs++;
    }
    update();
    await delay();  // Wait 1 second before continuing
  }
}
