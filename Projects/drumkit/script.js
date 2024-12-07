let items = document.querySelectorAll(".item");
let aud = document.querySelectorAll(".aud");
items.forEach((item) => {
  item.addEventListener("click", () => {
    playmusic(item.dataset.snd);
  });
});
function playmusic(sound) {
  aud[sound].play();
}
document.addEventListener("keydown", (event) => {
  console.log(event.key);
  switch (event.key.toLowerCase()) {
    case "a":
      playmusic(0);
      break;
    case "s":
      playmusic(1);
      break;
    case "d":
      playmusic(2);
      break;
    case "f":
      playmusic(3);
      break;
    case "g":
      playmusic(4);
      break;
    case "h":
      playmusic(5);
      break;
    case "j":
      playmusic(6);
      break;
    case "k":
      playmusic(7);
      break;
    case "l":
      playmusic(8);
      break;

    default:
      break;
  }
});
