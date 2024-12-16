let word = document.querySelector(".word");
let realtext = document.querySelector(".realtext");
let text =
  "India is a country, a country filled with diversity and a country rich in culture. Known for its traditions, its traditions that are vibrant, and its languages and cuisines, it is home to over 1.4 billion people, 1.4 billion people who make it unique. The country has a long history, a history marked by iconic landmarks like the Taj Mahal, and a history reflected in cities like Mumbai and Delhi. Its economy is growing, growing rapidly and making it a key player on the global stage, the global stage where India stands tall.";

console.log("Hello");
word.addEventListener("input", () => {
  let searchWord = word.value;

  if (searchWord.length > 0) {
    let escapedSearchWord = searchWord.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    let regPat = new RegExp(escapedSearchWord, "gi");
    let finalText = text.replace(regPat, (match) => `<span class="highlight">${match}</span>`);
    realtext.innerHTML = finalText;
  } else {
    realtext.innerHTML = text;
  }
});
