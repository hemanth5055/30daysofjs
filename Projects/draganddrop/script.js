let rightbox = document.querySelector(".rightbox");
let leftbox = document.querySelector(".rightbox");
let dropsound = document.querySelector(".dropsound");
let items = document.querySelectorAll(".item");
let element;

items.forEach((itm) => {
  itm.addEventListener("dragstart", (e) => {
    element = e.target;
  });
});

rightbox.addEventListener("dragover", (e) => {
  e.preventDefault();
});

rightbox.addEventListener("drop", () => {
  rightbox.appendChild(element);
  dropsound.play();
});
