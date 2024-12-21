let dice = document.querySelector(".rollbutton");
let dicecont = document.querySelector(".dice");
let clear = document.querySelector(".clear");
let stack = [];
let r;
dice.addEventListener("click", ready);

function ready() {
  dicecont.style.animation = "roll 1s linear";
  setTimeout(() => {
    dicecont.style.animation = "none";
    render();
  }, 1000);
}

function render() {
  let a = Math.floor(Math.random() * 5) + 1;
  // console.log(a);
  let k;
  switch (a) {
    case 1:
      k = `<div class="dot"></div>`;
      break;
    case 2:
      k = `<div class="dot"></div>
      <div class="dot"></div>`;
      break;
    case 3:
      k = `<div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>`;
      break;
    case 4:
      k = `<div class="arr"><div class="dot"></div>
            <div class="dot"></div></div>
            <div class="arr">

            <div class="dot"></div>
            <div class="dot"></div>
            </div>`;
      break;
    case 5:
      k = `<div class="arr"><div class="dot"></div>
            <div class="dot"></div></div>
            <div class="arr">
              <div class="dot"></div>
            </div>
            <div class="arr">
            <div class="dot"></div>
            <div class="dot"></div>`;
      break;
    case 6:
      k = `<div class="arr"><div class="dot"></div>
            <div class="dot"></div></div>
            <div class="arr">
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
            <div class="arr">
            <div class="dot"></div>
            <div class="dot"></div>`;
      break;
    default:
      break;
  }
  console.log(a);
  stack.push(a);
  let r = String("dice" + a);
  let w = "dicebyjs";
  document.querySelector(".dicebyjs").classList = String(r + " " + w);
  document.querySelector(".dicebyjs").innerHTML = k;
  renderhistory();
}

function renderhistory() {
  let o = true;
  let ele = ``;
  for (let i = stack.length - 1; i >= 0; i--) {
    if (i == stack.length - 1) {
      ele += `<div class="item active">${stack[i]}</div>`;
    } else {
      ele += `<div class="item">${stack[i]}</div>`;
    }
  }
  document.querySelector(".rolledarea").innerHTML = ele;
}

clear.addEventListener("click", () => {
  while (stack.length != 0) {
    stack.pop();
  }
  renderhistory();
});
