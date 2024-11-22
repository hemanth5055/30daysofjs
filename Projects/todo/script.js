let tasks = [];
let taskinp = document.querySelector(".taskinp");
let addbtn = document.querySelector(".addbtn");
let tasksdisplayarea = document.querySelector(".tasksdisplayarea");
let clear = document.querySelector(".clear");
let uid = 0;
addbtn.addEventListener("click", () => {
  let temp = taskinp.value;
  if (temp != "") {
    let tempObj = { id: uid, t: temp };
    uid++;
    tasks.push(tempObj);
    render();
  } else {
    console.log("Enter the task");
  }
});
function render() {
  let html = ``;
  for (let i = tasks.length - 1; i >= 0; i--) {
    html += `<div class="task">
            <h4>${tasks[i].t}</h4>
            <div class="del" onclick="deleter(${tasks[i].id})">x</div>
          </div>`;
  }
  tasksdisplayarea.innerHTML = html;
}

function deleter(did) {
  let modifiedtasks = [];
  for (let i = 0; i < tasks.length; i++) {
    if (did != String(tasks[i].id)) {
      modifiedtasks.push(tasks[i]);
    }
  }
  tasks = modifiedtasks;
  render();
}

clear.addEventListener("click", () => {
  tasks = [];
  render();
});
