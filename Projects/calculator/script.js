let current = document.querySelector(".current");
let mode = document.querySelector(".mode");
let root = document.querySelector(":root");

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
  console.log(opstack);
  if (opstack.length == 0) {
    current.innerHTML = "0";
  } else {
    current.innerHTML = opstack.join("");
  }
}

function clearlast() {
  if (opstack.length == 0) {
    opstack = ["0"];
    return;
  }
  let lastItem = opstack[opstack.length - 1];
  if (!isNaN(lastItem)) {
    lastItem = lastItem.toString();
    if (lastItem.length > 1) {
      lastItem = lastItem.slice(0, -1);
      opstack.pop();
      opstack.push(lastItem); 
    } else {
      opstack.pop(); 
      opstack.push("0");
    }
  } else {
    // If the last item is an operator, just pop it from the stack
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
let isLight = false;
mode.addEventListener("click", () => {
  if (isLight) {
    //to dark
    root.style.setProperty("--text-color", "white");
    root.style.setProperty("--body-background", "black");
    root.style.setProperty("--btn-background", "#363636");
    isLight = false;
  } else {
    //to light
    root.style.setProperty("--text-color", "black");
    root.style.setProperty("--body-background", "white");
    root.style.setProperty("--btn-background", "#f5f5f5");
    isLight = true;
  }
});
