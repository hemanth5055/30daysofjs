let computerOptions = ["rock", "paper", "scissor"];
let humanOptions = document.querySelectorAll(".opt");
let ann = document.querySelector(".result");

humanOptions.forEach((option) => {
  option.addEventListener("click", () => {
    play(option.dataset.id);
  });
});

function play(humanChoice) {
  let compChoice = Math.floor(Math.random() * 3);
  validater(humanChoice, compChoice);
}

function validater(human, comp) {
  if (human == comp) {
    ann.innerHTML = `It's a tie! Both choose ${computerOptions[human]}.`;
  } else if (
    (human == 0 && comp == 2) ||
    (human == 1 && comp == 0) ||
    (human == 2 && comp == 1)
  ) {
    ann.innerHTML = `Human won! ${computerOptions[human]} beats ${computerOptions[comp]}.`;
  } else {
    ann.innerHTML = `Computer won! ${computerOptions[comp]} beats ${computerOptions[human]}.`;
  }
}
