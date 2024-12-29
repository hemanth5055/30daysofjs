// DOM elements for user input and displaying the text
let word = document.querySelector(".word");
let realtext = document.querySelector(".realtext");

// The text to be searched through
let text =
  "India is a country, a country filled with diversity and a country rich in culture. Known for its traditions, its traditions that are vibrant, and its languages and cuisines, it is home to over 1.4 billion people, 1.4 billion people who make it unique. The country has a long history, a history marked by iconic landmarks like the Taj Mahal, and a history reflected in cities like Mumbai and Delhi. Its economy is growing, growing rapidly and making it a key player on the global stage, the global stage where India stands tall.";

// Log a message to the console to confirm the script is running
console.log("Hello");

// Event listener to trigger every time the user types something in the input field
word.addEventListener("input", () => {
  // Get the word typed by the user
  let searchWord = word.value;

  // If the search word has a length greater than 0 (not empty)
  if (searchWord.length > 0) {
    // Escape any special characters in the search word to safely use it in a regular expression
    let escapedSearchWord = searchWord.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    
    // Create a regular expression to match the search word, case-insensitive
    let regPat = new RegExp(escapedSearchWord, "gi");

    // Replace matching text in the `text` with the same text wrapped in <span> tags for highlighting
    let finalText = text.replace(regPat, (match) => `<span class="highlight">${match}</span>`);

    // Update the realtext element with the modified text containing highlighted words
    realtext.innerHTML = finalText;
  } else {
    // If there is no search word, just display the original text
    realtext.innerHTML = text;
  }
});
