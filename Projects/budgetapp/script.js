// Select elements for budget management and expense tracking
let budgetinp = document.querySelector(".budgetinp"); // Input field for budget value
let setbudget = document.querySelector(".setbudget"); // Button to set budget
let producttitle = document.querySelector(".producttitle"); // Input field for product title
let productcost = document.querySelector(".productcost"); // Input field for product cost
let checkamount = document.querySelector(".checkamount"); // Button to add or update an expense
let totalbudgetvalue = document.querySelector(".totalbudgetvalue"); // Display for total budget
let expensesvalue = document.querySelector(".expensesvalue"); // Display for total expenses
let balancevalue = document.querySelector(".balancevalue"); // Display for remaining balance
let items = document.querySelector(".items"); // Container for displaying expense items

// Initialize variables for budget, expenses, and list of items
let budgetJ = 5000; // Default budget value
let expenseJ = 0; // Total expenses
updateBoard(); // Update the budget board initially
let isModifyingitem = false; // Flag to check if modifying an existing item
let isModifyingid; // ID of the item being modified
let idTracker = 0; // Tracker for assigning unique IDs to items
let listJ = []; // Array to store expense items

// Function to update the budget board
function updateBoard() {
  totalbudgetvalue.innerHTML = "₹ " + budgetJ; // Update total budget display
  expensesvalue.innerHTML = "₹ " + expenseJ; // Update total expenses display
  balancevalue.innerHTML = "₹ " + (budgetJ - expenseJ); // Update remaining balance display
}

// Event listener for setting a new budget
setbudget.addEventListener("click", () => {
  if (budgetinp.value > budgetJ) {
    // Update budget only if the new value is greater
    budgetJ = budgetinp.value;
    updateBoard(); // Update the budget board
  }
});

// Event listener for adding or modifying an expense
checkamount.addEventListener("click", () => {
  if (producttitle.value.length != 0 && productcost.value > 0) {
    if (isModifyingitem) {
      // Modify an existing item
      listJ.forEach((element) => {
        if (element.id == isModifyingid) {
          element.cost = Number(productcost.value); // Update cost
          element.nameExp = producttitle.value; // Update name
          producttitle.value = ""; // Clear input fields
          productcost.value = "";
        }
      });
      isModifyingitem = false; // Reset modifying flag
    } else {
      // Add a new item
      let itemJ = {
        id: ++idTracker, // Assign unique ID
        nameExp: producttitle.value, // Set product name
        cost: Number(productcost.value), // Set product cost
      };
      producttitle.value = ""; // Clear input fields
      productcost.value = "";
      listJ.push(itemJ); // Add item to the list
    }
  }
  updateexpeList(); // Update the expense list display
});

// Function to update the expense list display
function updateexpeList() {
  let html = ``; // Initialize HTML string
  expenseJ = 0; // Reset total expenses
  listJ.forEach((ele) => {
    expenseJ += ele.cost; // Calculate total expenses
    html += `<div class="item">
          <div class="item1">
            <h2 class="itemname">${ele.nameExp}</h2>
          </div>
          <div class="item3"><h2 class="itemcost">₹ ${ele.cost}</h2></div>
          <div class="item2">
            <div class="modify" data-eid="${ele.id}" onclick="modifyitem(${ele.id})" >
              <i class="fa-solid fa-pen-to-square"></i>
            </div>
            <div class="delete" data-eid="${ele.id}" onclick="deleteitem(${ele.id})"><i class="fa-solid fa-trash"></i></div>
          </div>
        </div>`;
  });
  items.innerHTML = html; // Update the items container
  updateBoard(); // Update the budget board
}

// Function to delete an expense item
function deleteitem(id) {
  listJ = listJ.filter((ele) => ele.id != id); // Remove item with matching ID
  updateexpeList(); // Update the expense list display
}

// Function to modify an expense item
function modifyitem(id) {
  listJ.forEach((element) => {
    if (element.id == id) {
      isModifyingitem = true; // Set modifying flag
      isModifyingid = id; // Store ID of the item being modified
      producttitle.value = element.nameExp; // Populate input with item name
      productcost.value = element.cost; // Populate input with item cost
    }
  });
}
