let colorboxes = document.querySelectorAll(".color");
let refresh = document.querySelector(".refreshbtn");
toastr.options.timeOut = 1500;
colorboxes.forEach((box) => {
  box.addEventListener("click", () => {
    navigator.clipboard.writeText(box.innerHTML);
    toastr.success("Successfully Copied");
  });
});
render();
function render() {
  colorboxes.forEach((box) => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let rgb = `rgb(${r},${g},${b})`;
    box.innerHTML = rgbtohex(r, g, b);
    box.style.backgroundColor = rgb;
  });
}
refresh.addEventListener("click", () => {
  render();
});

function rgbtohex(r, g, b) {
  return `#${numtohex(r)}${numtohex(g)}${numtohex(b)}`;
}
function numtohex(num) {
  let temp = num.toString(16);
  if (temp.length == 1) {
    return "0" + temp;
  } else {
    return temp;
  }
}
