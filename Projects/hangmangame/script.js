// DOM element selectors for various game components
let keypadarea = document.querySelector(".keypadarea"); // Area for virtual keyboard
let wordarea = document.querySelector(".wordarea"); // Area for displaying the word
let hintarea = document.querySelector(".hintarea"); // Area for displaying the hint
let guessarea = document.querySelector(".guessarea"); // Area to show incorrect guesses
let hangimg = document.querySelector(".hangimg"); // Image for hangman state
let popupbg = document.querySelector(".popupbg"); // Background for the popup
let msg = document.querySelector(".popup h3"); // Message in the popup
let close = document.querySelector(".close"); // Close button for popup

// List of words with hints
const wordlist = [
  { word: "PIANO", hint: "A large keyboard musical instrument." },
  { word: "BRIDGE", hint: "A structure built over a river or road." },
  { word: "APPLE", hint: "A round fruit with red or green skin." },
  {
    word: "OCEAN",
    hint: "A vast body of salt water covering most of the Earth.",
  },
  { word: "ROBOT", hint: "A machine capable of carrying out tasks." },
  { word: "DESERT", hint: "A barren area of land with little rainfall." },
  { word: "CANDLE", hint: "A stick of wax that produces light when lit." },
  { word: "JUNGLE", hint: "A dense forest in tropical regions." },
  { word: "ROCKET", hint: "A vehicle propelled by engines into space." },
  { word: "CASTLE", hint: "A large fortified building, often historical." },
  {
    word: "SUNSET",
    hint: "The time of day when the sun disappears below the horizon.",
  },
  { word: "ISLAND", hint: "A piece of land surrounded by water." },
  {
    word: "CLOUD",
    hint: "A visible mass of condensed water vapor in the sky.",
  },
  { word: "WINDOW", hint: "An opening in a wall to let in light or air." },
  { word: "BUTTER", hint: "A dairy product made from churning cream." },
  { word: "PLANET", hint: "A celestial body orbiting a star." },
  { word: "PENCIL", hint: "A writing instrument with a graphite core." },
  { word: "FOREST", hint: "A large area covered with trees and vegetation." },
  { word: "VIOLIN", hint: "A stringed musical instrument played with a bow." },
  {
    word: "MOUNTAIN",
    hint: "A large natural elevation of the Earth's surface.",
  },
];

// Initialize game state
updatekeys(); // Generate keyboard keys
let item = document.querySelectorAll(".item"); // Select all key items
addlistenerstoitems(); // Add event listeners to keys

let knownletters = []; // Array to store correctly guessed letters
let selectedWordObject = wordlist[Math.floor(Math.random() * wordlist.length)]; // Randomly select a word
let rhint = selectedWordObject.hint; // Store the hint for the selected word
let rword = selectedWordObject.word.split(""); // Split the selected word into an array of letters
let rwordstring = selectedWordObject.word; // Store the full word as a string
let incorrect = 0; // Counter for incorrect guesses

updatehint(); // Update the displayed hint
updateword(knownletters, rword); // Update the displayed word with blanks
updateincorrect();

console.log(rwordstring); // Log the selected word for debugging

// Update the count of incorrect guesses and hangman image
function updateincorrect() {
  guessarea.innerHTML = `Incorrect Guesses - <span>${incorrect}/6</span>`;
  hangimg.src = `images/hang${incorrect}.svg`; // Change hangman image based on mistakes
}

// Check if the player has won or lost
function checkwin() {
  if (incorrect == 6) {
    // Player loses
    console.log("you lost");
    msg.innerHTML = "You Lost 😭";
    popupbg.style.display = "flex"; // Show the popup
  } else {
    // Check if all letters are guessed
    let i = wordarea.innerHTML.replace(/\s+/g, ""); // Remove spaces to compare
    if (i == rwordstring) {
      msg.innerHTML = "You Won 😁";
      popupbg.style.display = "flex";
    }
  }
}

// Close popup and reset the game
close.addEventListener("click", () => {
  popupbg.style.display = "none";
  resetgame();
});

// Reset the game state for a new round
function resetgame() {
  knownletters = [];
  selectedWordObject = wordlist[Math.floor(Math.random() * wordlist.length)];
  rhint = selectedWordObject.hint;
  rword = selectedWordObject.word.split("");
  rwordstring = selectedWordObject.word;
  incorrect = 0;
  updateword(knownletters, rword);
  updatehint();
  updateincorrect();
  console.log(rwordstring); // Log the new word
  updatekeys();
  item = document.querySelectorAll(".item");
  addlistenerstoitems();
}

// Generate the virtual keyboard
function updatekeys() {
  let html = ``;
  for (let i = 65; i < 91; i++) {
    // Create a key for each letter (A-Z)
    html += `<div class="item" data-val="${String.fromCharCode(
      i
    )}" data-disable="false">${String.fromCharCode(i)}</div>`;
  }
  keypadarea.innerHTML = html;
}

// Update the displayed word with blanks or guessed letters
function updateword(knownletters, word) {
  let html = ``;
  word.forEach((element) => {
    if (knownletters.includes(element)) {
      // Show the letter if guessed correctly
      html += element + " ";
    } else {
      // Show a blank otherwise
      html += "_ ";
    }
  });
  wordarea.innerHTML = html;
}

// Update the hint displayed to the player
function updatehint() {
  hintarea.innerHTML = `Hint : ${rhint}`;
}

// Add click listeners to each key
function addlistenerstoitems() {
  item.forEach((it) => {
    it.addEventListener("click", (e) => {
      console.log(e.target); // Log the clicked key for debugging
      if (e.target.dataset.disable == "true") {
        // Ignore clicks on disabled keys
      } else {
        if (rword.includes(e.target.dataset.val)) {
          // Correct guess
          knownletters.push(e.target.dataset.val);
          updateword(knownletters, rword);
        } else {
          // Incorrect guess
          incorrect++;
        }
        e.target.dataset.disable = "true"; // Disable the key
        e.target.classList.add("disable"); // Add disabled styling
      }
      updateincorrect();
      checkwin();
    });
  });
}
