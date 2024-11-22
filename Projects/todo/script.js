let tasks;
let taskinp = document.querySelector(".taskinp");
let addbtn = document.querySelector(".addbtn");
let tasksdisplayarea = document.querySelector(".tasksdisplayarea");
let clear = document.querySelector(".clear");
let uid = localStorage.getItem("uid")
  ? parseInt(localStorage.getItem("uid"))
  : 0;

if (localStorage.getItem("data")) {
  tasks = JSON.parse(localStorage.getItem("data"));
} else {
  tasks = [];
  localStorage.setItem("data", JSON.stringify(tasks));
}
render();

function updatelocalstorage() {
  localStorage.setItem("data", JSON.stringify(tasks));
}

addbtn.addEventListener("click", () => {
  let temp = taskinp.value;
  taskinp.value = "";
  if (temp !== "") {
    let tempObj = { id: uid, t: temp };
    uid++;
    tasks.push(tempObj);
    render();
    updatelocalstorage();
    localStorage.setItem("uid", uid);
  } else {
    console.log("Enter the task");
  }
});

function render() {
  let html = ``;
  for (let i = tasks.length - 1; i >= 0; i--) {
    html += `<div class="task">
              <div class="taskname"><h2>${tasks[i].t}</h2></div>
              <div class="del" onclick="deleter(${tasks[i].id})">x</div>
            </div>`;
  }
  tasksdisplayarea.innerHTML = html;
}

function deleter(did) {
  tasks = tasks.filter((task) => task.id !== did);
  render();
  updatelocalstorage();
}

clear.addEventListener("click", () => {
  tasks = [];
  render();
  updatelocalstorage();
});
