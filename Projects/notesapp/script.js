// Select DOM elements
const cards = document.querySelector(".cards");
const addNewButton = document.querySelector(".addnew");

// Initialize variables
let idCounter = parseInt(localStorage.getItem("startindex")) || 2;
let savedHTML = localStorage.getItem("starthtml") || `<div class="card" data-cid="${1}">
      <textarea name="text" id="${1}" oninput="handleInput(${1})">Empty Note</textarea>
      <div class="options">
        <div class="delete" onclick="deleteCard(${1})">
          <i class="fa-solid fa-trash" style="color: red;"></i>
        </div>
      </div>
    </div>`;

// Render initial content
function initialRender() {
  if (savedHTML == "") {
    console.log("hello");
  } else {
    cards.innerHTML = savedHTML;
  }
}

// Add a new card
function addNewCard() {
  const newCardHTML = `
    <div class="card" data-cid="${idCounter}">
      <textarea name="text" id="${idCounter}" oninput="handleInput(${idCounter})">Empty Note</textarea>
      <div class="options">
        <div class="delete" onclick="deleteCard(${idCounter})">
          <i class="fa-solid fa-trash" style="color: red;"></i>
        </div>
      </div>
    </div>`;

  cards.innerHTML += newCardHTML;
  idCounter++;
  updateStorage();
}

// Delete a specific card
function deleteCard(cardId) {
  const cardToDelete = document.querySelector(`.card[data-cid="${cardId}"]`);
  if (cardToDelete) {
    cardToDelete.remove();
    updateStorage();
  }
}

// Handle text input changes
function handleInput(cardId) {
  const textArea = document.getElementById(cardId);
  if (textArea) {
    textArea.innerHTML = textArea.value;
    updateStorage();
  }
}

// Update localStorage with the current state
function updateStorage() {
  localStorage.setItem("startindex", idCounter.toString());
  localStorage.setItem("starthtml", cards.innerHTML);
}

// Initialize the page
initialRender();
