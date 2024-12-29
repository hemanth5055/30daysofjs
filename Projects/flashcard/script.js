// Select DOM elements
let addfcbg = document.querySelector(".addfcbg");
let addfcbtn = document.querySelector(".addfcbtn");
let close = document.querySelector(".close");
let submit = document.querySelector(".submit");
let que = document.querySelector("#Question");
let ans = document.querySelector("#Answer");
let fcdisplayarea = document.querySelector(".fcdisplayarea");

// Initialize flags and data storage
let isOpen = false;
let edit = null;
let data = [];
let items = 0;

// Toggle visibility of the "add FAQ" form when clicking the "add FAQ" button
addfcbtn.addEventListener("click", () => {
  if (isOpen) {
    isOpen = false;
  } else {
    addfcbg.style.display = "flex"; // Show the form
    isOpen = true;
  }
});

// Close the "add FAQ" form when clicking the "close" button
close.addEventListener("click", () => {
  if (isOpen) {
    addfcbg.style.display = "none"; // Hide the form
    isOpen = false;
  } else {
    isOpen = true;
  }
});

// Submit the FAQ (either add a new one or edit an existing one)
submit.addEventListener("click", () => {
  let q = que.value; // Get the question
  let a = ans.value; // Get the answer
  if (q.length != 0 && a.length != 0) { // Ensure both fields are filled
    if (edit != null) { // If editing an existing FAQ
      edit.q = q; // Update the question
      edit.a = a; // Update the answer
      edit = null; // Clear the edit state
      addfcbg.style.display = "none"; // Close the form
      isOpen = false;
    } else { // Otherwise, create a new FAQ
      let it = { id: items++, q: q, a: a, open: 0 }; // Create new FAQ object
      data.push(it); // Add it to the data array
      console.log(data); // Log the data array for debugging
    }
    que.value = ""; // Clear the question field
    ans.value = ""; // Clear the answer field
    renderdata(); // Re-render the FAQ display
  } else {
    console.log("Invalid input"); // Log if input is invalid
  }
});

// Function to render the FAQ data
function renderdata() {
  let html = ``; // Initialize an empty HTML string
  data.forEach((ele) => {
    html += `<div class="fc fc${ele.id}">
                <div class="fcq">${ele.q}</div> <!-- Display the question -->
                <div class="showhide" onclick="showorhide(${ele.id})">Show/Hide</div> <!-- Button to show/hide the answer -->
                <div class="fca" data-disp=${ele.open}>${ele.a}</div> <!-- Answer (hidden by default) -->
                <div class="fcoptions">
                    <div class="edit" onclick="editfc(${ele.id})"><i class="fa-solid fa-pen-to-square" style="color: #5895fd;"></i></div> <!-- Edit button -->
                    <div class="del" onclick="deletefc(${ele.id})"><i class="fa-solid fa-trash" style="color: #fd4e4e;"></i></div> <!-- Delete button -->
                </div>
            </div>`;
  });
  fcdisplayarea.innerHTML = html; // Set the inner HTML of the display area to render the FAQs
}

// Function to toggle visibility of the answer
function showorhide(id) {
  let item = document.querySelector(`.fc${id} .fca`); // Get the answer element by its ID
  console.log(item.dataset.disp); // Log the current state (hidden or visible)
  if (item.dataset.disp == "0") { // If the answer is hidden
    item.style.display = "flex"; // Show the answer
    item.dataset.disp = "1"; // Update the display state
  } else {
    item.style.display = "none"; // Hide the answer
    item.dataset.disp = "0"; // Update the display state
  }
}

// Function to delete an FAQ
function deletefc(did) {
  console.log(did); // Log the ID of the FAQ to be deleted
  data = data.filter((it) => {
    return it.id != did; // Remove the FAQ from the data array
  });
  renderdata(); // Re-render the FAQ display
}

// Function to edit an FAQ
function editfc(eid) {
  isOpen = true; // Set the form to open for editing
  data.forEach((ele) => {
    if (ele.id == eid) { // Find the FAQ to be edited
      que.value = ele.q; // Set the question field to the current question
      ans.value = ele.a; // Set the answer field to the current answer
      edit = ele; // Set the FAQ object to the edit state
    }
  });
  addfcbg.style.display = "flex"; // Show the form
}
