let data = [{ g: "grade", c: "credits" }];
let subjectTracker = data.length;
let subjectsarea = document.querySelector(".subjectsarea");
let addsubject = document.querySelector(".addsubject");
let generate = document.querySelector(".generate");
let gpa = document.querySelector(".gpa");
let tc = document.querySelector(".tc");
let tgp = document.querySelector(".tgp");
let gradePoints = [
  { grade: "S", points: 10 },
  { grade: "A", points: 9 },
  { grade: "B", points: 8 },
  { grade: "C", points: 7 },
  { grade: "D", points: 6 },
  { grade: "E", points: 5 },
  { grade: "F", points: 0 },
];
function update() {
  let html = ``;
  data.forEach((ele, index) => {
    html += `<div class="subject">
          <div class="subjectname">Subject ${index + 1}</div>
          <select class="grade" name="grade" onchange="updatevaluegrade(${index})" id="grade${index}">
            <option value="grade" ${
              ele.g === "grade" ? "selected" : ""
            }>Grade</option>
            <option value="S" ${ele.g === "S" ? "selected" : ""}>S</option>
            <option value="A" ${ele.g === "A" ? "selected" : ""}>A</option>
            <option value="B" ${ele.g === "B" ? "selected" : ""}>B</option>
            <option value="C" ${ele.g === "C" ? "selected" : ""}>C</option>
            <option value="D" ${ele.g === "D" ? "selected" : ""}>D</option>
            <option value="E" ${ele.g === "E" ? "selected" : ""}>E</option>
            <option value="F" ${ele.g === "F" ? "selected" : ""}>F</option>
          </select>
          <select class="credits" name="credits" onchange="updatevaluecredits(${index})"  id="credits${index}">
            <option value="credit" ${
              ele.c === "credit" ? "selected" : ""
            }>Credit</option>
            <option value="1" ${ele.c === "1" ? "selected" : ""}>1</option>
            <option value="2" ${ele.c === "2" ? "selected" : ""}>2</option>
            <option value="3" ${ele.c === "3" ? "selected" : ""}>3</option>
            <option value="4" ${ele.c === "4" ? "selected" : ""}>4</option>
          </select>
          <div class="close" onclick="deleteitem(${index})">x</div>
        </div>`;
  });
  subjectsarea.innerHTML = html;
}
update();

addsubject.addEventListener("click", () => {
  resetd();
  let temp = { g: "grade", c: "credits" };
  data.push(temp);
  subjectTracker++;
  update();
});

function deleteitem(did) {
  resetd();
  if (subjectTracker != 1) {
    data = data.filter((item, index) => {
      return index != did;
    });
    subjectTracker--;
    console.log(data);
    update();
  }
}
function updatevaluegrade(ind) {
  resetd();
  data[ind].g = document.querySelector(`#grade${ind}`).value;
  console.log(data);
}
function updatevaluecredits(ind) {
  resetd();
  data[ind].c = document.querySelector(`#credits${ind}`).value;
  console.log(data);
}

generate.addEventListener("click", () => {
  let Find = true;
  let totalCredits = 0;
  let totalGradepoints = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].g == "grade" || data[i].c == "credits") {
      Find = false;
      break;
    } else {
      totalCredits += Number(data[i].c);
      let tempgrade = data[i].g;
      let gradePointObject = gradePoints.find((it) => it.grade == tempgrade);
      if (gradePointObject) {
        let gp = gradePointObject.points;
        totalGradepoints += gp * Number(data[i].c);
      } else {
        console.error(`Invalid grade '${tempgrade}' found for index ${i}`);
      }
    }
  }
  if (Find) {
    console.log("Total Credits:", totalCredits);
    console.log("Total Grade Points:", totalGradepoints);
    gpa.innerHTML = (totalGradepoints / totalCredits).toFixed(2);
    tc.innerHTML = totalCredits;
    tgp.innerHTML = totalGradepoints;
  } else {
    alert(
      "Please select all options and ensure no unwanted options are deleted !"
    );
    return true;
  }
});

function resetd() {
  gpa.innerHTML = "--";
  tc.innerHTML = "--";
  tgp.innerHTML = "--";
}
