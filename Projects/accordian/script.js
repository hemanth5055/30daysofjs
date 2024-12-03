let down = document.querySelectorAll(".btn");
let accdata = document.querySelectorAll(".accdata");
down.forEach((dn) => {
  dn.addEventListener("click", () => {
    open(dn.dataset.id);
    changelogo(dn.dataset.id);
  });
});

function open(id) {
  accdata.forEach((acc) => {
    if (acc.dataset.id == id) {
      acc.classList.toggle("active");
    } else {
      if (acc.classList.contains("active")) {
        acc.classList.remove("active");
      }
    }
  });
}
function changelogo(id) {
  down.forEach((dn) => {
    if (dn.dataset.id == id) {
      dn.style.transform =
        dn.style.transform === "rotate(180deg)"
          ? "rotate(0deg)"
          : "rotate(180deg)";
    }
    else{
      dn.style.transform = "rotate(0deg)";
    }
  });
}
