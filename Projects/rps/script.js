let computerOptions = ["rock", "paper", "scissors"];
let humanOptions = document.querySelectorAll(".opt");
let ann = document.querySelector(".result");

humanOptions.forEach((option) => {
  option.addEventListener("click", () => {
    let humanChoice = option.dataset.id;  // Get the index of the human's choice
    play(humanChoice);
  });
});

function play(humanChoice) {
  let compChoice = Math.floor(Math.random() * 3);  // Random choice for the computer
  validater(humanChoice, compChoice);
}

function validater(human, comp) {
  if (human == comp) {
    ann.innerHTML = `It's a tie! Both choose ${computerOptions[human]}.`;
  } else if (
    (human == 0 && comp == 2) ||  // Rock beats Scissors
    (human == 1 && comp == 0) ||  // Paper beats Rock
    (human == 2 && comp == 1)     // Scissors beats Paper
  ) {
    ann.innerHTML = `Human won! ${computerOptions[human]} beats ${computerOptions[comp]}.`;
  } else {
    ann.innerHTML = `Computer won! ${computerOptions[comp]} beats ${computerOptions[human]}.`;
  }
}
