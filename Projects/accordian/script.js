// Select all buttons and corresponding accordion data sections
let down = document.querySelectorAll(".btn"); // Buttons to toggle accordion sections
let accdata = document.querySelectorAll(".accdata"); // Accordion data sections

// Add click event listeners to each button
down.forEach((dn) => {
  dn.addEventListener("click", () => {
    open(dn.dataset.id); // Toggle the accordion section associated with the button
    changelogo(dn.dataset.id); // Update the button's rotation (icon state)
  });
});

// Function to toggle the visibility of an accordion section
function open(id) {
  accdata.forEach((acc) => {
    if (acc.dataset.id == id) {
      // If the accordion's ID matches, toggle its "active" class
      acc.classList.toggle("active");
    } else {
      // Remove "active" class from all other accordion sections
      if (acc.classList.contains("active")) {
        acc.classList.remove("active");
      }
    }
  });
}

// Function to toggle the rotation of buttons
function changelogo(id) {
  down.forEach((dn) => {
    if (dn.dataset.id == id) {
      // Rotate the button 180 degrees if it was not already rotated
      dn.style.transform =
        dn.style.transform === "rotate(180deg)"
          ? "rotate(0deg)" // Reset rotation if already rotated
          : "rotate(180deg)"; // Rotate to 180 degrees
    } else {
      // Reset rotation for all other buttons
      dn.style.transform = "rotate(0deg)";
    }
  });
}
