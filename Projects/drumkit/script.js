// Select all the items and audio elements
let items = document.querySelectorAll(".item");
let aud = document.querySelectorAll(".aud");

// Add click event listener to each item to play corresponding sound
items.forEach((item) => {
  item.addEventListener("click", () => {
    playmusic(item.dataset.snd); // Play sound based on data-snd attribute
  });
});

// Function to play the selected sound based on its index
function playmusic(sound) {
  aud[sound].play(); // Play the audio element based on the sound index
}

// Add keyboard event listener for specific keys (a, s, d, etc.)
document.addEventListener("keydown", (event) => {
  console.log(event.key); // Log the pressed key for debugging
  switch (event.key.toLowerCase()) { // Convert the key to lowercase for consistency
    case "a":
      playmusic(0); // Play the first sound
      break;
    case "s":
      playmusic(1); // Play the second sound
      break;
    case "d":
      playmusic(2); // Play the third sound
      break;
    case "f":
      playmusic(3); // Play the fourth sound
      break;
    case "g":
      playmusic(4); // Play the fifth sound
      break;
    case "h":
      playmusic(5); // Play the sixth sound
      break;
    case "j":
      playmusic(6); // Play the seventh sound
      break;
    case "k":
      playmusic(7); // Play the eighth sound
      break;
    case "l":
      playmusic(8); // Play the ninth sound
      break;
    default:
      break; // No action for other keys
  }
});
