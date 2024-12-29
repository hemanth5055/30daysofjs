let joke = document.querySelector(".joke");
let randombtn = document.querySelector(".rdmbtn");
let joketxt = "";
const jokeAPIUrl = "https://v2.jokeapi.dev/joke/Any?type=single";

update(); // Initial joke fetch

function update() {
  joke.innerHTML = "Loading...";  // Display loading message
  fetch(jokeAPIUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        joke.innerHTML = "Sorry, there was an error fetching the joke!";
      } else {
        joketxt = data.joke;
        joke.innerHTML = joketxt;
      }
    })
    .catch((error) => {
      console.error("Error fetching the joke:", error);
      joke.innerHTML = "Failed to fetch joke. Please try again.";
    });
}

randombtn.addEventListener("click", () => {
  update();  // Fetch and display a new joke when the button is clicked
});
