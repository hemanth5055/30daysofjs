let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");
let minute = document.querySelector(".minutes");
let second = document.querySelector(".seconds");
let start = document.querySelector(".play");
let reset = document.querySelector(".reset");
let alertSound = document.querySelector(".alert");

let minutes = 5;
let seconds = 0;
let timeoutId;
let isRunning = false;

update();

inc.addEventListener("click", () => {
  if (!isRunning) {
    minutes++;
    update();
  }
});

dec.addEventListener("click", () => {
  if (!isRunning && minutes > 1) {
    minutes--;
    update();
  }
});

start.addEventListener("click", () => {
  running();
});

reset.addEventListener("click", () => {
  clearTimeout(timeoutId);
  isRunning = false;
  minutes = 5;
  seconds = 0;
  update();
});

function update() {
  minute.innerHTML = formatTime(minutes);
  second.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

async function running() {
  if (isRunning) return;
  isRunning = true;
  disableButtons(true);  // Disable buttons while running

  while (minutes > 0 || seconds > 0) {
    if (seconds === 0 && minutes > 0) {
      minutes--;
      seconds = 59;
    }
    update();
    await delay();
    seconds--;
  }
  
  update();
  alertSound.play();
  disableButtons(false); // Re-enable buttons after countdown ends
}

function disableButtons(disable) {
  inc.disabled = disable;
  dec.disabled = disable;
  start.disabled = disable;
}

async function delay() {
  return new Promise((resolve) => {
    timeoutId = setTimeout(resolve, 1000);
  });
}
