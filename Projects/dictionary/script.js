let word = document.querySelector(".word");
let submit = document.querySelector(".submit");
let wordhead = document.querySelector(".wordhead");
let wordpop = document.querySelector(".wordpop");
let meaning = document.querySelector(".meaning");
let wordpho = document.querySelector(".wordpho");
let audio = document.querySelector(".audio");
let sound = document.querySelector(".sound");

submit.addEventListener("click", update);

async function update() {
  if (word.value != "") {
    let wordname = word.value;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordname}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          wordhead.innerHTML = "Word Not Found !";
        } else {
          if (data[0].phonetics[0].audio != "") {
            audio.src = data[0].phonetics[0].audio;
          }
          wordpho.innerHTML = data[0].phonetic;
          wordpop.innerHTML = data[0].meanings[0].partOfSpeech;
          meaning.innerHTML = `${data[0].meanings[0].definitions[0].definition}`;
          wordhead.innerHTML = data[0].word;
          word.value = "";
        }
      });
  }
}

sound.addEventListener("click", () => {
  audio.play();
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    update();
  }
});
