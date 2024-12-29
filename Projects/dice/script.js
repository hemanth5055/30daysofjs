// Select DOM elements
let dice = document.querySelector(".rollbutton"); // Roll button
let dicecont = document.querySelector(".dice"); // Dice container
let clear = document.querySelector(".clear"); // Clear button
let stack = []; // Stack to store dice roll results
let r;

// Event listener for rolling the dice
dice.addEventListener("click", ready);

function ready() {
  dicecont.style.animation = "roll 1s linear"; // Start the dice roll animation
  setTimeout(() => {
    dicecont.style.animation = "none"; // Remove the animation after it ends
    render(); // Call render to display the rolled dice
  }, 1000);
}

// Function to render the dice face
function render() {
  let a = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
  let k;

  // Switch case to define the dots based on the rolled number
  switch (a) {
    case 1:
      k = `<div class="dot"></div>`;
      break;
    case 2:
      k = `<div class="dot"></div><div class="dot"></div>`;
      break;
    case 3:
      k = `<div class="dot"></div><div class="dot"></div><div class="dot"></div>`;
      break;
    case 4:
      k = `<div class="arr"><div class="dot"></div><div class="dot"></div></div><div class="arr"><div class="dot"></div><div class="dot"></div></div>`;
      break;
    case 5:
      k = `<div class="arr"><div class="dot"></div><div class="dot"></div></div><div class="arr"><div class="dot"></div></div><div class="arr"><div class="dot"></div><div class="dot"></div></div>`;
      break;
    case 6:
      k = `<div class="arr"><div class="dot"></div><div class="dot"></div></div><div class="arr"><div class="dot"></div><div class="dot"></div></div><div class="arr"><div class="dot"></div><div class="dot"></div></div>`;
      break;
    default:
      break;
  }

  stack.push(a); // Add the rolled number to the stack
  let r = String("dice" + a); // Set the dice face class
  let w = "dicebyjs"; // Additional class for styling
  document.querySelector(".dicebyjs").classList = String(r + " " + w); // Apply the class to the dice container
  document.querySelector(".dicebyjs").innerHTML = k; // Insert the HTML for the dots (dice face)
  renderhistory(); // Call renderhistory to display the roll history
}

// Function to render the history of rolled numbers
function renderhistory() {
  let o = true;
  let ele = ``;
  for (let i = stack.length - 1; i >= 0; i--) {
    if (i == stack.length - 1) {
      // Highlight the latest roll
      ele += `<div class="item active">${stack[i]}</div>`;
    } else {
      ele += `<div class="item">${stack[i]}</div>`;
    }
  }
  document.querySelector(".rolledarea").innerHTML = ele; // Display the roll history
}

// Event listener for the clear button to reset the history
clear.addEventListener("click", () => {
  stack = []; // Clear the stack
  renderhistory(); // Update the history display
});
