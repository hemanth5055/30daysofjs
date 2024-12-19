let n1 = document.querySelector(".number1");
let n2 = document.querySelector(".number2");
let n3 = document.querySelector(".number3");
let start = document.querySelector(".btn");
let msg = document.querySelector(".msg");

start.addEventListener("click", game);

let n1id;
let n2id;
let n3id;
let isrunning = false;
let validRepresent = 0;
function game() {
  if (isrunning == false) {
    isrunning = true;
    start.style.cursor = "not-allowed";
    msg.innerHTML = "Click on the number to select.";
    n1id = setInterval(() => {
      n1.innerHTML = Math.floor(Math.random() * 9);
    }, 1000);
    n2id = setInterval(() => {
      n2.innerHTML = Math.floor(Math.random() * 9);
    }, 1000);
    n3id = setInterval(() => {
      n3.innerHTML = Math.floor(Math.random() * 9);
    }, 1000);
  }
  validate();
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
    if (n1.innerHTML == n2.innerHTML && n2.innerHTML == n3.innerHTML) {
      msg.innerHTML = "You won : )";
    } else {
      msg.innerHTML = "You Lost ! Better Luck Next Time . ";
    }
    start.innerHTML = "Restart";
    validRepresent = 0;
    start.style.cursor = "pointer";
    isrunning = false;
  }
}
