let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");
let minute = document.querySelector(".minutes");
let second = document.querySelector(".seconds");
let start = document.querySelector(".play");
let reset = document.querySelector(".reset");
let alert = document.querySelector(".alert");
let minutes = 5;
let seconds = 0;
let timeoutId;
let isRunning = false;
update();

inc.addEventListener("click", () => {
  if (isRunning) {
  } else {
    minutes++;
  }
  update();
});
dec.addEventListener("click", () => {
  if (isRunning) {
  } else {
    if (minutes == 1) {
    } else {
      minutes--;
    }
  }
  update();
});

start.addEventListener("click", () => {
  running();
});
function update() {
  minute.innerHTML = addzero(minutes);
  second.innerHTML = addzero(seconds);
}
function addzero(a) {
  return a < 10 ? "0" + a : a;
}
async function running() {
  if (isRunning) {
    return;
  } else {
    isRunning = true;
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
    alert.play();
    isRunning = false;
  }
}
reset.addEventListener("click", () => {
  clearTimeout(timeoutId);
  isRunning = false;
  minutes = 5;
  seconds = 0;
  update();
});
async function delay() {
  return new Promise((resolve, reject) => {
    timeoutId = setTimeout(() => {
      resolve();
    }, 1000);
  });
}
