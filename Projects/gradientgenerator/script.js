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
let generate = document.querySelector(".generate");
let copy = document.querySelector(".copy");
let cl1 = document.querySelector(".color1");
let cl2 = document.querySelector(".color2");
let dirs = document.querySelectorAll(".dir");
let notify = document.querySelector(".copyclip");
cl2.value = `#8A80F4`;
cl1.value = `#000000`;
let dirindex = 5;
updateoption(dirindex);
dirs.forEach((element) => {
  element.addEventListener("click", () => {
    dirindex = element.dataset.id;
    updateoption(dirindex);
  });
});
let gradient = `linear-gradient(
    to right bottom,
    rgb(0, 0, 0),
    rgb(136, 128, 244)
  );`;
generate.addEventListener("click", () => {
  console.log(cl1.value, cl2.value);
  console.log(document.body.style);
  let color1 = cl1.value;
  let color2 = cl2.value;
  let direc = data[dirindex];
  console.log(color1, color2, direc);
  gradient = `linear-gradient(to ${direc},${color1},${color2})`;
  document.body.style.background = `linear-gradient(to ${direc},${color1},${color2})`;
});
function updateoption(is) {
  dirs.forEach((element) => {
    if (element.dataset.id == is) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(gradient);
  notify.style.display = "inline";
  setTimeout(() => {
    notify.style.display = "none";
  }, 800);
});
