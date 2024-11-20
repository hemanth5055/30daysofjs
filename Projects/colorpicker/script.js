let picker = document.querySelector(".picker");
let background = document.querySelector(".maincont");
let hextag = document.querySelector(".hex");
let rgbtag = document.querySelector(".rgb");
let hsltag = document.querySelector(".hsl");
let notification = document.querySelector('.notification');
let color = "#92a5dd";
picker.value = color;
picker.addEventListener("input", () => {
  render();
});
render();
function render() {
  color = picker.value;
  background.style.backgroundColor = color;
  hextag.innerHTML = color;
  updatergb();
}
function updatergb() {
  let r = color.charAt(1) + color.charAt(2);
  let g = color.charAt(3) + color.charAt(4);
  let b = color.charAt(5) + color.charAt(6);
  let temp = `rgb(${hexToDecimal(r)},${hexToDecimal(g)},${hexToDecimal(b)})`;
  rgbtag.innerHTML = temp;
  updatehsl(hexToDecimal(r), hexToDecimal(g), hexToDecimal(b));
}
function updatehsl(r, g, b) {
  r = r / 255;
  g = g / 255;
  b = b / 255;
  let cmax = Math.max(r, g, b);
  let cmin = Math.min(r, g, b);
  let l = (cmax + cmin) / 2;
  let delta = cmax - cmin;
  let h = 0,
    s = 0;
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
  if (h < 0) {
    h += 360;
  }
  let temp1 = `hsl(${tpr(h, 0)}°,${tpr(s * 100, 1)}%,${tpr(l * 100, 1)}%)`;
  hsltag.innerHTML = temp1;
}

function hexToDecimal(hex) {
  return parseInt(hex, 16);
}
function tpr(a, b) {
  return a.toFixed(b);
}

hextag.addEventListener("click", () => {
  navigator.clipboard.writeText(hextag.innerHTML);
  shownoti();
});
rgbtag.addEventListener("click", () => {
  navigator.clipboard.writeText(rgbtag.innerHTML);
  shownoti();
});
hsltag.addEventListener("click", () => {
  navigator.clipboard.writeText(hsltag.innerHTML);
  shownoti();
});

function shownoti(){
  notification.style.display="flex";
  setTimeout(() => {
    notification.style.display="none";
  }, 1800);
}