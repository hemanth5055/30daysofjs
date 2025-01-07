let boxes = document.querySelectorAll(".item");
boxes.forEach((element) => {
  element.addEventListener("click", () => {
    let city;
    switch (element.dataset.city) {
      case "hyd":
        city = "Hyderabad";
        setname(city);
        break;
      case "beng":
        city = "Bangalore";
        setname(city);
        break;
      case "kerala":
        city = "Kerala";
        setname(city);
        break;
      case "vizag":
        city = "Vizag";
        setname(city);
        break;
      case "mumb":
        city = "Mumbai";
        setname(city);
        break;
      default:
        break;
    }
    element.classList = "item active";
    boxes.forEach((ele) => {
      if (ele != element) {
        ele.classList = "item";
      }
    });
  });
});

function setname(name) {
  document.documentElement.style.cssText = `--city : ""`;
  setTimeout(() => {
    document.documentElement.style.cssText = `--city : "${name}"`;
  }, 800);
}
