let joke = document.querySelector(".joke");
let randombtn = document.querySelector(".rdmbtn");
let joketxt = "";
update();
function update() {
  fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.joke);
      joketxt = data.joke;
      joke.innerHTML = joketxt;
    })
    .catch((error) => {
      console.error("Error fetching the joke:", error);
    });
}

randombtn.addEventListener("click", () => {
  update();
});
