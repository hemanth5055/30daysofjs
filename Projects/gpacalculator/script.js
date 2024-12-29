// Initialize required variables
let data = [{ g: "grade", c: "credits" }]; // Stores subject grade and credits information
let subjectTracker = data.length; // Counter for number of subjects
let subjectsarea = document.querySelector(".subjectsarea"); // DOM element for subject area
let addsubject = document.querySelector(".addsubject"); // Button to add new subject
let generate = document.querySelector(".generate"); // Button to generate GPA
let gpa = document.querySelector(".gpa"); // Display for GPA
let tc = document.querySelector(".tc"); // Display for total credits
let tgp = document.querySelector(".tgp"); // Display for total grade points

// Grade points mapping for each grade
let gradePoints = [
  { grade: "S", points: 10 },
  { grade: "A", points: 9 },
  { grade: "B", points: 8 },
  { grade: "C", points: 7 },
  { grade: "D", points: 6 },
  { grade: "E", points: 5 },
  { grade: "F", points: 0 },
];

// Function to update the subject list (display subjects with grade and credits options)
function update() {
  let html = ``; // Initialize HTML string for subjects
  data.forEach((ele, index) => {
    // Loop through each subject and generate the respective HTML
    html += `<div class="subject">
          <div class="subjectname">Subject ${index + 1}</div>
          <select class="grade" name="grade" onchange="updatevaluegrade(${index})" id="grade${index}">
            <option value="grade" ${ele.g === "grade" ? "selected" : ""}>Grade</option>
            <option value="S" ${ele.g === "S" ? "selected" : ""}>S</option>
            <option value="A" ${ele.g === "A" ? "selected" : ""}>A</option>
            <option value="B" ${ele.g === "B" ? "selected" : ""}>B</option>
            <option value="C" ${ele.g === "C" ? "selected" : ""}>C</option>
            <option value="D" ${ele.g === "D" ? "selected" : ""}>D</option>
            <option value="E" ${ele.g === "E" ? "selected" : ""}>E</option>
            <option value="F" ${ele.g === "F" ? "selected" : ""}>F</option>
          </select>
          <select class="credits" name="credits" onchange="updatevaluecredits(${index})"  id="credits${index}">
            <option value="credit" ${ele.c === "credit" ? "selected" : ""}>Credit</option>
            <option value="1" ${ele.c === "1" ? "selected" : ""}>1</option>
            <option value="2" ${ele.c === "2" ? "selected" : ""}>2</option>
            <option value="3" ${ele.c === "3" ? "selected" : ""}>3</option>
            <option value="4" ${ele.c === "4" ? "selected" : ""}>4</option>
          </select>
          <div class="close" onclick="deleteitem(${index})">x</div>
        </div>`;
  });
  subjectsarea.innerHTML = html; // Update the subjects area with the new HTML
}
update(); // Initial call to display subjects

// Event listener to add a new subject when the "Add Subject" button is clicked
addsubject.addEventListener("click", () => {
  resetd(); // Reset GPA, total credits, and total grade points
  let temp = { g: "grade", c: "credits" }; // Initialize new subject with placeholder values
  data.push(temp); // Add new subject to data
  subjectTracker++; // Increment subject count
  update(); // Re-render the subjects
});

// Function to delete a subject based on the index
function deleteitem(did) {
  resetd(); // Reset GPA, total credits, and total grade points
  if (subjectTracker != 1) { // Prevent deletion of the last subject
    data = data.filter((item, index) => {
      return index != did; // Filter out the subject to be deleted
    });
    subjectTracker--; // Decrement subject count
    console.log(data); // Log the updated data for debugging
    update(); // Re-render the subjects
  }
}

// Function to update the grade of a subject when the grade is changed
function updatevaluegrade(ind) {
  resetd(); // Reset GPA, total credits, and total grade points
  data[ind].g = document.querySelector(`#grade${ind}`).value; // Update the grade for the subject
  console.log(data); // Log the updated data for debugging
}

// Function to update the credits of a subject when the credits are changed
function updatevaluecredits(ind) {
  resetd(); // Reset GPA, total credits, and total grade points
  data[ind].c = document.querySelector(`#credits${ind}`).value; // Update the credits for the subject
  console.log(data); // Log the updated data for debugging
}

// Event listener to generate GPA when the "Generate GPA" button is clicked
generate.addEventListener("click", () => {
  let Find = true;
  let totalCredits = 0;
  let totalGradepoints = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].g == "grade" || data[i].c == "credits") { // Check for incomplete subjects
      Find = false;
      break; // Stop the loop if any subject has missing grade or credits
    } else {
      totalCredits += Number(data[i].c); // Add credits for the subject
      let tempgrade = data[i].g; // Get the grade
      let gradePointObject = gradePoints.find((it) => it.grade == tempgrade); // Find grade points based on the grade
      if (gradePointObject) {
        let gp = gradePointObject.points;
        totalGradepoints += gp * Number(data[i].c); // Add grade points for the subject
      } else {
        console.error(`Invalid grade '${tempgrade}' found for index ${i}`); // Log error if invalid grade is found
      }
    }
  }
  if (Find) { // If all subjects have valid grades and credits
    console.log("Total Credits:", totalCredits);
    console.log("Total Grade Points:", totalGradepoints);
    gpa.innerHTML = (totalGradepoints / totalCredits).toFixed(2); // Calculate and display GPA
    tc.innerHTML = totalCredits; // Display total credits
    tgp.innerHTML = totalGradepoints; // Display total grade points
  } else {
    alert("Please select all options and ensure no unwanted options are deleted!"); // Alert if there's an incomplete subject
    return true;
  }
});

// Function to reset GPA, total credits, and total grade points to default values
function resetd() {
  gpa.innerHTML = "--";
  tc.innerHTML = "--";
  tgp.innerHTML = "--";
}
