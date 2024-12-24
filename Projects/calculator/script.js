let current = document.querySelector(".current");

let btn = document.querySelectorAll(".btn");
btn.forEach((button) => {
  button.addEventListener("click", () => {
    updatecurrent(button.innerHTML, button.dataset.type);
  });
});

let opstack = [];
let result = 0;
let flag = false;

rendercurrent();

function updatecurrent(val, type) {
  if (type == "operator") {
    operatorRender(val);
  } else if (type == "number") {
    numberRender(val);
  } else if (type == "decimal") {
    decimalRender();
  } else if (type == "DEL") {
    clearlast();
  } else if (type == "AC") {
    clearall();
  } else {
    equalRender();
  }
}

function operatorRender(operator) {
  let lastItem = opstack[opstack.length - 1];
  if (lastItem && !isNaN(lastItem)) {
    opstack.push(operator);
    flag = false;
  } else if (lastItem && isNaN(lastItem)) {
    opstack.pop();
    opstack.push(operator);
  }
  rendercurrent();
}

function numberRender(number) {
  if (flag) {
    let currentNum = opstack.pop();
    currentNum += number;
    opstack.push(currentNum);
  } else {
    opstack.push(number);
    flag = true;
  }
  rendercurrent();
}

function decimalRender() {
  let currentNum = opstack[opstack.length - 1];
  if (!isNaN(currentNum)) {
    if (!currentNum.includes(".")) {
      let k = opstack[opstack.length - 1] + ".";
      opstack.pop();
      opstack.push(k);
    }
  }
  rendercurrent();
}

function equalRender() {
  evaluate();
}

function rendercurrent() {
  if (opstack.length == 0) {
    current.innerHTML = "0";
  } else {
    current.innerHTML = opstack.join("");
  }
}

function clearlast() {
  if (opstack.length === 0) return;
  let lastItem = opstack[opstack.length - 1];
  if (!isNaN(lastItem)) {
    lastItem = lastItem.toString();
    lastItem = lastItem.slice(0, -1);
    opstack.pop();
    if (lastItem.length > 0) {
      opstack.push(lastItem);
    }
  } else {
    opstack.pop();
  }
  rendercurrent();
}

function clearall() {
  opstack = [];
  flag = false;
  rendercurrent();
}

function evaluate() {
  let tempRes = 0;
  let tempNum = 0;
  let operator = null;

  opstack.forEach((p) => {
    if (!isNaN(p)) {
      tempNum = Number(p);
      if (operator) {
        switch (operator) {
          case "+":
            tempRes += tempNum;
            break;
          case "-":
            tempRes -= tempNum;
            break;
          case "*":
            tempRes *= tempNum;
            break;
          case "/":
            if (tempNum !== 0) {
              tempRes /= tempNum;
            } else {
              alert("Error: Division by 0");
              tempRes = 0;
            }
            break;
          case "%":
            tempRes = tempRes % tempNum;
            break;
          default:
            break;
        }
      } else {
        tempRes = Number(tempNum);
      }
      operator = null;
    } else {
      operator = p;
    }
  });

  opstack = [String(tempRes)];
  rendercurrent();
}
