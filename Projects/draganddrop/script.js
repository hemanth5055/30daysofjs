let rightbox = document.querySelector(".rightbox");
let leftbox = document.querySelector(".leftbox"); // Corrected to refer to leftbox
let dropsound = document.querySelector(".dropsound");
let items = document.querySelectorAll(".item");
let element;

// Add event listener for dragstart on items
items.forEach((itm) => {
  itm.addEventListener("dragstart", (e) => {
    element = e.target;
  });
});

// Allow dragover event on rightbox to enable drop
rightbox.addEventListener("dragover", (e) => {
  e.preventDefault();
});

// Handle drop event in rightbox
rightbox.addEventListener("drop", () => {
  rightbox.appendChild(element); // Move the dragged item to rightbox
  dropsound.play(); // Play the drop sound
});
