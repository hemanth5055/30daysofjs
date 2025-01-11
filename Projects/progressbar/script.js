let progress = document.querySelector(".progressbar");
let circle = document.querySelectorAll(".circle");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let currentstate = 0;
next.addEventListener("click", () => {
  currentstate++;
  if (currentstate < 4) {
    update();
  } else {
    currentstate--;
  }
});
prev.addEventListener("click", () => {
  currentstate--;
  if (currentstate >= 0) {
    update();
  } else {
    currentstate++;
  }
});
function update() {
  console.log(currentstate);
  for (let i = 0; i < circle.length; i++) {
    if (i <= currentstate) {
      circle[i].classList.add("active");
    } else {
      circle[i].classList.remove("active");
    }
  }
  progress.style.width = String((currentstate / 4) * 100) + "%";
}
