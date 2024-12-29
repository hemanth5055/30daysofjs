// Select the necessary DOM elements
let word = document.querySelector(".word");
let submit = document.querySelector(".submit");
let wordhead = document.querySelector(".wordhead");
let wordpop = document.querySelector(".wordpop");
let meaning = document.querySelector(".meaning");
let wordpho = document.querySelector(".wordpho");
let audio = document.querySelector(".audio");
let sound = document.querySelector(".sound");

// Event listener for the submit button
submit.addEventListener("click", update);

// Function to fetch word data and display results
async function update() {
  if (word.value != "") {
    let wordname = word.value; // Get the word from the input
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordname}`; // URL to fetch data
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Check if the word is found
        if (data.message) {
          wordhead.innerHTML = "Word Not Found !"; // Display error message if word not found
        } else {
          // Display the word details
          if (data[0].phonetics[0].audio != "") {
            audio.src = data[0].phonetics[0].audio; // Set the audio source for pronunciation
          }
          wordpho.innerHTML = data[0].phonetic; // Display phonetic transcription
          wordpop.innerHTML = data[0].meanings[0].partOfSpeech; // Display part of speech
          meaning.innerHTML = `${data[0].meanings[0].definitions[0].definition}`; // Display meaning
          wordhead.innerHTML = data[0].word; // Display the word itself
          word.value = ""; // Clear the input field
        }
      });
  }
}

// Event listener for the sound button to play pronunciation
sound.addEventListener("click", () => {
  audio.play(); // Play the pronunciation audio
});

// Event listener for the "Enter" key to trigger search
document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    update(); // Call the update function when Enter key is pressed
  }
});
