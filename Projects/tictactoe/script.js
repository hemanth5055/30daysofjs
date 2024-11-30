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
  "null",
  "null",
  "null",
  "null",
  "null",
  "null",
  "null",
  "null",
  "null",
];

let possibleWinIndex = ["012", "345", "678", "036", "147", "258", "048", "246"];
exit.addEventListener("click", () => {
  notifier.style.display = "none";
  reset();
  updatehtml();
  turn.innerHTML = "Click start to Play !";
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (isRunning) {
      addtoArray(box);
    }
  });
});

start.addEventListener("click", run);
function run() {
  if (!isRunning) {
    isRunning = true;
    playerOne = true;
    turn.innerHTML = "Turn : Player 1";
  }
}

function addtoArray(box) {
  if (boxData[Number(box.dataset.id)] == "null") {
    if (playerOne) {
      boxData[Number(box.dataset.id)] = "X";
    } else {
      boxData[Number(box.dataset.id)] = "O";
    }
    updatehtml();
    currentmoves++;
    checkWinLose();
    updatePlayerStatus();
  }
}

function updatePlayerStatus() {
  if (playerOne) {
    playerOne = false;
    playerTwo = true;
    turn.innerHTML = "Turn : Player 2";
  } else {
    playerTwo = false;
    playerOne = true;
    turn.innerHTML = "Turn : Player 1";
  }
}

function checkWinLose() {
  let isWin = false;
  for (let i = 0; i < possibleWinIndex.length; i++) {
    isWin =
      isWin ||
      check(
        Number(possibleWinIndex[i][0]),
        Number(possibleWinIndex[i][1]),
        Number(possibleWinIndex[i][2])
      );
  }
  if (!isWin && currentmoves == totalMoves) {
    notimessage.innerHTML = `Match Tie`;
    notifier.style.display = "flex";
  }
}
function check(a, b, c) {
  if (
    boxData[a] == boxData[b] &&
    boxData[b] == boxData[c] &&
    boxData[a] != "null"
  ) {
    let pla = boxData[a] == "X" ? 1 : 2;
    notimessage.innerHTML = `Player-${pla} Won`;
    notifier.style.display = "flex";
    return true;
  }
  return false;
}
function updatehtml() {
  let index = 0;
  boxes.forEach((box) => {
    if (boxData[index] != "null") {
      box.innerHTML = boxData[index];
    } else {
      box.innerHTML = "";
    }
    index++;
  });
}

function reset() {
  playerOne = false;
  playerTwo = false;
  totalMoves = 9;
  currentmoves = 0;
  isRunning = false;
  boxData.fill("null");
}
