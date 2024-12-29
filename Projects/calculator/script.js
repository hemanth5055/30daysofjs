// Select elements from the DOM
let current = document.querySelector(".current"); // Display area for the current expression
let mode = document.querySelector(".mode"); // Button to toggle light/dark mode
let root = document.querySelector(":root"); // Access the root element for styling

let btn = document.querySelectorAll(".btn"); // Get all calculator buttons
btn.forEach((button) => {
  // Add event listeners to each button
  button.addEventListener("click", () => {
    updatecurrent(button.innerHTML, button.dataset.type); // Call updatecurrent when a button is clicked
  });
});

let opstack = []; // Stack to hold the current expression
let result = 0; // Variable to store the result (not used directly in this code)
let flag = false; // Flag to track if the current input is part of an ongoing number

rendercurrent(); // Initialize the current display

// Function to update the current expression based on button type
function updatecurrent(val, type) {
  if (type == "operator") {
    operatorRender(val); // Handle operator input
  } else if (type == "number") {
    numberRender(val); // Handle number input
  } else if (type == "decimal") {
    decimalRender(); // Handle decimal input
  } else if (type == "DEL") {
    clearlast(); // Handle delete input
  } else if (type == "AC") {
    clearall(); // Handle all-clear input
  } else {
    equalRender(); // Handle equal input
  }
}

// Function to handle operator input
function operatorRender(operator) {
  let lastItem = opstack[opstack.length - 1]; // Get the last item in the stack
  if (lastItem && !isNaN(lastItem)) {
    opstack.push(operator); // If the last item is a number, push the operator
    flag = false;
  } else if (lastItem && isNaN(lastItem)) {
    opstack.pop(); // If the last item is an operator, replace it
    opstack.push(operator);
  }
  rendercurrent(); // Update the current display
}

// Function to handle number input
function numberRender(number) {
  if (flag) {
    let currentNum = opstack.pop(); // Pop the last number
    currentNum += number; // Append the new digit to the current number
    opstack.push(currentNum); // Push the updated number back to the stack
  } else {
    opstack.push(number); // If no ongoing number, start a new one
    flag = true; // Set flag to true to indicate an ongoing number input
  }
  rendercurrent(); // Update the current display
}

// Function to handle decimal point input
function decimalRender() {
  let currentNum = opstack[opstack.length - 1]; // Get the last number
  if (!isNaN(currentNum)) {
    if (!currentNum.includes(".")) {
      let k = opstack[opstack.length - 1] + "."; // Add decimal point if not present
      opstack.pop();
      opstack.push(k);
    }
  }
  rendercurrent(); // Update the current display
}

// Function to handle equal (=) input
function equalRender() {
  evaluate(); // Call evaluate function to calculate the result
}

// Function to render the current expression on the screen
function rendercurrent() {
  console.log(opstack); // For debugging, print the stack
  if (opstack.length == 0) {
    current.innerHTML = "0"; // Display 0 if stack is empty
  } else {
    current.innerHTML = opstack.join(""); // Join stack items and display as string
  }
}

// Function to delete the last character or number in the expression
function clearlast() {
  if (opstack.length == 0) {
    opstack = ["0"]; // If the stack is empty, set to "0"
    return;
  }
  let lastItem = opstack[opstack.length - 1]; // Get the last item
  if (!isNaN(lastItem)) {
    lastItem = lastItem.toString();
    if (lastItem.length > 1) {
      lastItem = lastItem.slice(0, -1); // Remove the last character
      opstack.pop();
      opstack.push(lastItem);
    } else {
      opstack.pop(); // If only one character, set it to "0"
      opstack.push("0");
    }
  } else {
    opstack.pop(); // If the last item is an operator, remove it
  }
  rendercurrent(); // Update the current display
}

// Function to clear the entire expression
function clearall() {
  opstack = []; // Clear the stack
  flag = false; // Reset the flag
  rendercurrent(); // Update the current display
}

// Function to evaluate the expression in the stack
function evaluate() {
  let tempRes = 0; // Initialize result
  let tempNum = 0; // Temporary variable for numbers
  let operator = null; // Variable to store the operator

  opstack.forEach((p) => {
    if (!isNaN(p)) {
      tempNum = Number(p); // Convert string to number
      if (operator) {
        switch (operator) {
          case "+":
            tempRes += tempNum; // Add numbers
            break;
          case "-":
            tempRes -= tempNum; // Subtract numbers
            break;
          case "*":
            tempRes *= tempNum; // Multiply numbers
            break;
          case "/":
            if (tempNum !== 0) {
              tempRes /= tempNum; // Divide numbers, check for zero division
            } else {
              alert("Error: Division by 0"); // Alert if dividing by zero
              tempRes = 0;
            }
            break;
          case "%":
            tempRes = tempRes % tempNum; // Modulo operation
            break;
          default:
            break;
        }
      } else {
        tempRes = Number(tempNum); // Set initial result if no operator
      }
      operator = null; // Reset operator
    } else {
      operator = p; // Set the current operator
    }
  });

  opstack = [String(tempRes)]; // Store result in the stack
  rendercurrent(); // Update the current display
}

// Light/Dark mode toggle functionality
let isLight = false; // Flag to track mode
mode.addEventListener("click", () => {
  if (isLight) {
    // Switch to dark mode
    root.style.setProperty("--text-color", "white");
    root.style.setProperty("--body-background", "black");
    root.style.setProperty("--btn-background", "#363636");
    isLight = false;
  } else {
    // Switch to light mode
    root.style.setProperty("--text-color", "black");
    root.style.setProperty("--body-background", "white");
    root.style.setProperty("--btn-background", "#f5f5f5");
    isLight = true;
  }
});
