let colorboxes = document.querySelectorAll(".color");
let refresh = document.querySelector(".refreshbtn");

toastr.options.timeOut = 1500;

// Event listener for clicking on color boxes to copy color
colorboxes.forEach((box) => {
  box.addEventListener("click", () => {
    let colorCode = box.innerHTML;
    navigator.clipboard.writeText(colorCode);
    toastr.success(`Successfully Copied: ${colorCode}`);
  });
});

render(); // Initial render of color boxes

// Function to render random colors
function render() {
  colorboxes.forEach((box) => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let rgb = `rgb(${r},${g},${b})`;  // RGB color string
    let hex = rgbtohex(r, g, b);  // Convert RGB to Hex
    box.innerHTML = hex;  // Display the color code
    box.style.backgroundColor = rgb;  // Apply the background color
  });
}

// Event listener for the refresh button to regenerate colors
refresh.addEventListener("click", () => {
  render();  // Regenerate the colors when refresh button is clicked
});

// Function to convert RGB to Hex
function rgbtohex(r, g, b) {
  return `#${numtohex(r)}${numtohex(g)}${numtohex(b)}`;
}

// Helper function to convert a number to a 2-digit hex string
function numtohex(num) {
  return num.toString(16).padStart(2, '0');
}
