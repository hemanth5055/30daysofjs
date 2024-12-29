let n1 = document.querySelector(".number1");
let n2 = document.querySelector(".number2");
let n3 = document.querySelector(".number3");
let start = document.querySelector(".btn");
let msg = document.querySelector(".msg");

let n1id;
let n2id;
let n3id;
let isrunning = false;
let validRepresent = 0;

start.addEventListener("click", game);

function game() {
  if (isrunning == false) {
    isrunning = true;
    start.style.cursor = "not-allowed";
    start.innerHTML = "Restart";
    msg.innerHTML = "Click on the number to select.";
    
    // Randomize numbers
    n1id = setInterval(() => {
      n1.innerHTML = Math.floor(Math.random() * 9);
    }, 1000);
    n2id = setInterval(() => {
      n2.innerHTML = Math.floor(Math.random() * 9);
    }, 1000);
    n3id = setInterval(() => {
      n3.innerHTML = Math.floor(Math.random() * 9);
    }, 1000);
  } else {
    // Restart game logic
    resetGame();
  }
  validRepresent = 0;
}

n1.addEventListener("click", () => {
  if (isrunning) {
    clearInterval(n1id);
    validRepresent++;
    validate();
  }
});

n2.addEventListener("click", () => {
  if (isrunning) {
    clearInterval(n2id);
    validRepresent++;
    validate();
  }
});

n3.addEventListener("click", () => {
  if (isrunning) {
    clearInterval(n3id);
    validRepresent++;
    validate();
  }
});

function validate() {
  if (validRepresent == 3) {
    // Check if all numbers are the same
    if (n1.innerHTML == n2.innerHTML && n2.innerHTML == n3.innerHTML) {
      msg.innerHTML = "You won : )";
    } else {
      msg.innerHTML = "You Lost ! Better Luck Next Time . ";
    }
    start.style.cursor = "pointer";
    isrunning = false;
  }
}

function resetGame() {
  // Reset the game state
  n1.innerHTML = n2.innerHTML = n3.innerHTML = 0; // Reset numbers
  msg.innerHTML = "Game Restarted! Click Start to play again.";
  start.innerHTML = "Start";
  start.style.cursor = "pointer";
  validRepresent = 0;
  isrunning = false;
}
