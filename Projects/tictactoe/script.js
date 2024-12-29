let start = document.querySelector(".start");
let boxes = document.querySelectorAll(".box");
let turn = document.querySelector(".turn");
let notifier = document.querySelector(".notifier");
let exit = document.querySelector(".close");
let notimessage = document.querySelector(".notimessage");

let playerOne = false;
let playerTwo = false;
let totalMoves = 9;
let currentmoves = 0;
let isRunning = false;
let boxData = [
  "null", "null", "null",
  "null", "null", "null",
  "null", "null", "null",
];

let possibleWinIndex = ["012", "345", "678", "036", "147", "258", "048", "246"];

// Close modal and reset game
exit.addEventListener("click", () => {
  notifier.style.display = "none";
  reset();
  updatehtml();
  turn.innerHTML = "Click start to Play!";
  start.style.cursor = "pointer";  // Enable start button again
});

// Start game
start.addEventListener("click", run);

function run() {
  if (!isRunning) {
    isRunning = true;
    playerOne = true;
    turn.innerHTML = "Turn: Player 1";
    start.style.cursor = "not-allowed";  // Disable the start button after starting
  }
}

// Handle box click and update box data
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (isRunning) {
      addtoArray(box);
    }
  });
});

// Add move to boxData and update UI
function addtoArray(box) {
  const boxId = Number(box.dataset.id);
  if (boxData[boxId] === "null") {
    boxData[boxId] = playerOne ? "X" : "O";
    updatehtml();
    currentmoves++;
    checkWinLose();
    updatePlayerStatus();
  }
}

// Switch player turns
function updatePlayerStatus() {
  if (playerOne) {
    playerOne = false;
    playerTwo = true;
    turn.innerHTML = "Turn: Player 2";
  } else {
    playerTwo = false;
    playerOne = true;
    turn.innerHTML = "Turn: Player 1";
  }
}

// Check for win or tie
function checkWinLose() {
  let isWin = false;
  for (let i = 0; i < possibleWinIndex.length; i++) {
    isWin = isWin || check(
      Number(possibleWinIndex[i][0]),
      Number(possibleWinIndex[i][1]),
      Number(possibleWinIndex[i][2])
    );
  }

  if (!isWin && currentmoves === totalMoves) {
    notimessage.innerHTML = "Match Tie";
    notifier.style.display = "flex";
  }
}

// Check if there's a winner
function check(a, b, c) {
  if (boxData[a] === boxData[b] && boxData[b] === boxData[c] && boxData[a] !== "null") {
    let winner = boxData[a] === "X" ? "Player 1" : "Player 2";
    notimessage.innerHTML = `${winner} Won!`;
    notifier.style.display = "flex";
    return true;
  }
  return false;
}

// Update the HTML to reflect the current board state
function updatehtml() {
  boxes.forEach((box, index) => {
    box.innerHTML = boxData[index] === "null" ? "" : boxData[index];
  });
}

// Reset the game state
function reset() {
  playerOne = false;
  playerTwo = false;
  totalMoves = 9;
  currentmoves = 0;
  isRunning = false;
  boxData.fill("null");
  updatehtml();
  start.innerHTML = "Start";
  start.style.cursor = "pointer"; // Enable the start button
}
