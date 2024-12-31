let element = document.querySelector(".cont");
element.addEventListener("click", (event) => {
  element.innerHTML = `<div class="hearte"></div>`;
  let heart = document.querySelector(".hearte");
  heart.style.left = String(event.offsetX) + "px";
  heart.style.top = String(event.offsetY) + "px";
  setTimeout(() => {
    element.innerHTML = ``;
  }, 900);
});
