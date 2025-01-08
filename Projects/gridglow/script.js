let items = document.querySelectorAll(".griditems");
let color = "#1e90ff";
items.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    e.target.style.background = color;
    e.target.style.boxShadow = `1px 1px 5px ${color}`;
  });
  items.forEach((item) => {
    item.addEventListener("mouseout", (e) => {
      setTimeout(() => {
        e.target.style.background = "";
        e.target.style.boxShadow = ``;
      }, 300);
    });
  });
});
function randomcolor() {
  let a = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let c = Math.floor(Math.random() * 255);
  let k = `RGB(${a},${b},${c})`;
  return k;
}
document.addEventListener("keydown", (e) => {
  if (e.key == "r") {
    let a = randomcolor();
    document.querySelector(".rclr").style.color = a;
    color = a;
  }
});
