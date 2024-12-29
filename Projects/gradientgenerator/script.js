// Initializing gradient direction options and default values
let data = [
  "right",
  "bottom right",
  "bottom",
  "bottom left",
  "left",
  "top left",
  "top",
  "top right",
];

let generate = document.querySelector(".generate"); // Generate button to apply gradient
let copy = document.querySelector(".copy"); // Copy button to copy the gradient
let cl1 = document.querySelector(".color1"); // Color 1 input field
let cl2 = document.querySelector(".color2"); // Color 2 input field
let dirs = document.querySelectorAll(".dir"); // Direction options
let notify = document.querySelector(".copyclip"); // Notification for clipboard copy

// Set default color values
cl2.value = `#8A80F4`;
cl1.value = `#000000`;

// Default direction index (top left)
let dirindex = 5;
updateoption(dirindex); // Set the active direction option based on dirindex

// Event listener for each direction option
dirs.forEach((element) => {
  element.addEventListener("click", () => {
    // Update direction index when a direction option is clicked
    dirindex = element.dataset.id;
    updateoption(dirindex); // Update active direction
  });
});

// Default gradient value
let gradient = `linear-gradient(
    to right bottom,
    rgb(0, 0, 0),
    rgb(136, 128, 244)
  );`;

// Event listener for the generate button
generate.addEventListener("click", () => {
  let color1 = cl1.value; // Get value of color 1
  let color2 = cl2.value; // Get value of color 2
  let direc = data[dirindex]; // Get the selected direction

  // Create a gradient string based on the selected values
  gradient = `linear-gradient(to ${direc},${color1},${color2})`;
  
  // Apply the gradient to the body background
  document.body.style.background = gradient;

  // Log the color values and direction for debugging
  console.log(color1, color2, direc);
});

// Function to update the active direction option
function updateoption(is) {
  dirs.forEach((element) => {
    // Add "active" class to the selected direction
    if (element.dataset.id == is) {
      element.classList.add("active");
    } else {
      // Remove "active" class from other directions
      element.classList.remove("active");
    }
  });
}

// Event listener for the copy button
copy.addEventListener("click", () => {
  // Copy the current gradient CSS string to the clipboard
  navigator.clipboard.writeText(gradient);

  // Show notification that the gradient has been copied
  notify.style.display = "inline";
  
  // Hide the notification after 800 milliseconds
  setTimeout(() => {
    notify.style.display = "none";
  }, 800);
});
