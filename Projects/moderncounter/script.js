let increase = document.querySelector(".plus");
let decrease = document.querySelector(".minus");
let number = document.querySelector(".number");
let collection = document.querySelector(".collection");
let save = document.querySelector(".save");
let clear = document.querySelector(".clear");
let value = 0;
let numbers = [];
increase.addEventListener("click", () => {
  value++;
  update();
});
decrease.addEventListener("click", () => {
  value--;
  update();
});
save.addEventListener("click", () => {
  numbers.push(value);
  updatesavednumbers();
});

function update() {
  number.innerHTML = value;
}
function updatesavednumbers() {
  let html = ``;
  for (let i = numbers.length - 1; i >= 0; i--) {
    html += `<div class="card">${numbers[i]}</div>`;
  }
  collection.innerHTML = html;
}
clear.addEventListener("click", () => {
  numbers = [];
  collection.innerHTML = `<h3 class="datanone">No Numbers saved</h3>`;
});
