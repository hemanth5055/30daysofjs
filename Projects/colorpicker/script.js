// Select the color input picker
let picker = document.querySelector(".picker");

// Select the main container to apply the background color
let background = document.querySelector(".maincont");

// Select the elements to display color values in HEX, RGB, and HSL formats
let hextag = document.querySelector(".hex");
let rgbtag = document.querySelector(".rgb");
let hsltag = document.querySelector(".hsl");

// Select the notification element to display copy status
let notification = document.querySelector('.notification');

// Set the default color
let color = "#92a5dd";

// Initialize the color picker with the default color
picker.value = color;

// Add an event listener to update the UI whenever the color picker value changes
picker.addEventListener("input", () => {
  render();
});

// Render the initial state
render();

// Function to update the background color and HEX value
function render() {
  // Get the current color from the picker
  color = picker.value;

  // Apply the selected color to the background
  background.style.backgroundColor = color;

  // Display the HEX color value
  hextag.innerHTML = color;

  // Update the RGB value
  updatergb();
}

// Function to update the RGB value based on the HEX color
function updatergb() {
  // Extract red, green, and blue components from the HEX color
  let r = color.charAt(1) + color.charAt(2);
  let g = color.charAt(3) + color.charAt(4);
  let b = color.charAt(5) + color.charAt(6);

  // Convert HEX components to decimal and format them as RGB
  let temp = `rgb(${hexToDecimal(r)},${hexToDecimal(g)},${hexToDecimal(b)})`;

  // Display the RGB color value
  rgbtag.innerHTML = temp;

  // Update the HSL value based on RGB components
  updatehsl(hexToDecimal(r), hexToDecimal(g), hexToDecimal(b));
}

// Function to update the HSL value based on RGB components
function updatehsl(r, g, b) {
  // Normalize RGB values to the range [0, 1]
  r = r / 255;
  g = g / 255;
  b = b / 255;

  // Calculate maximum, minimum, lightness, and delta
  let cmax = Math.max(r, g, b);
  let cmin = Math.min(r, g, b);
  let l = (cmax + cmin) / 2;
  let delta = cmax - cmin;

  // Initialize hue and saturation
  let h = 0, s = 0;

  // Calculate hue and saturation based on delta and RGB values
  if (delta == 0) {
    h = 0;
    s = 0;
  } else {
    s = delta / (1 - Math.abs(2 * l - 1));
    if (cmax == r) {
      h = 60 * (((g - b) / delta) % 6);
    } else if (cmax == g) {
      h = 60 * ((b - r) / delta + 2);
    } else {
      h = 60 * ((r - g) / delta + 4);
    }
  }

  // Ensure hue is non-negative
  if (h < 0) {
    h += 360;
  }

  // Format and display the HSL color value
  let temp1 = `hsl(${tpr(h, 0)}°,${tpr(s * 100, 1)}%,${tpr(l * 100, 1)}%)`;
  hsltag.innerHTML = temp1;
}

// Function to convert a HEX string to a decimal number
function hexToDecimal(hex) {
  return parseInt(hex, 16);
}

// Function to format a number to a fixed number of decimal places
function tpr(a, b) {
  return a.toFixed(b);
}

// Add event listeners to copy color values to the clipboard when clicked
hextag.addEventListener("click", () => {
  navigator.clipboard.writeText(hextag.innerHTML); // Copy HEX value
  shownoti(); // Show notification
});

rgbtag.addEventListener("click", () => {
  navigator.clipboard.writeText(rgbtag.innerHTML); // Copy RGB value
  shownoti(); // Show notification
});

hsltag.addEventListener("click", () => {
  navigator.clipboard.writeText(hsltag.innerHTML); // Copy HSL value
  shownoti(); // Show notification
});

// Function to display a notification for a short duration
function shownoti() {
  notification.style.display = "flex"; // Show notification
  setTimeout(() => {
    notification.style.display = "none"; // Hide notification after 1.8 seconds
  }, 1800);
}
