// Select DOM elements
const cards = document.querySelector(".cards");
const addNewButton = document.querySelector(".addnew");

// Initialize variables
let idCounter = parseInt(localStorage.getItem("startindex")) || 2;
let savedHTML = localStorage.getItem("starthtml") || `
  <div class="card" data-cid="${1}">
    <textarea name="text" id="${1}" oninput="handleInput(${1})">Empty Note</textarea>
    <div class="options">
      <div class="delete" data-cid="${1}">
        <i class="fa-solid fa-trash" style="color: red;"></i>
      </div>
    </div>
  </div>`;

// Render initial content
function initialRender() {
  if (!savedHTML) {
    // If no saved HTML, render the default card
    addNewCard();
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
        <div class="delete" data-cid="${idCounter}">
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
    // Use value instead of innerHTML for textareas
    updateStorage();
  }
}

// Update localStorage with the current state
function updateStorage() {
  localStorage.setItem("startindex", idCounter.toString());
  localStorage.setItem("starthtml", cards.innerHTML);
}

// Event delegation for delete buttons
cards.addEventListener("click", (e) => {
  if (e.target.closest(".delete")) {
    const cardId = e.target.closest(".delete").getAttribute("data-cid");
    deleteCard(cardId);
  }
});

// Initialize the page
initialRender();

// Event listener for adding a new card
addNewButton.addEventListener("click", addNewCard);
