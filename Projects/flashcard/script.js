let addfcbg = document.querySelector(".addfcbg");
let addfcbtn = document.querySelector(".addfcbtn");
let close = document.querySelector(".close");
let submit = document.querySelector(".submit");
let que = document.querySelector("#Question");
let ans = document.querySelector("#Answer");
let fcdisplayarea = document.querySelector(".fcdisplayarea");
let isOpen = false;
let edit = null;
let data = [];
addfcbtn.addEventListener("click", () => {
  if (isOpen) {
    isOpen = false;
  } else {
    addfcbg.style.display = "flex";
    isOpen = true;
  }
});
close.addEventListener("click", () => {
  if (isOpen) {
    addfcbg.style.display = "none";
    isOpen = false;
  } else {
    isOpen = true;
  }
});
let items = 0;
submit.addEventListener("click", () => {
  let q = que.value;
  let a = ans.value;
  if (q.length != 0 && a.length != 0) {
    if (edit != null) {
      edit.q = q;
      edit.a = a;
      edit = null;
      addfcbg.style.display = "none";
      isOpen = false;
    } else {
      let it = { id: items++, q: q, a: a, open: 0 };
      data.push(it);
      console.log(data);
    }
    que.value = "";
    ans.value = "";
    renderdata();
  } else {
    console.log("Invalid input");
  }
});

function renderdata() {
  let html = ``;
  data.forEach((ele) => {
    html += `<div class="fc fc${ele.id}">
                <div class="fcq">${ele.q}</div>
                <div class="showhide" onclick="showorhide(${ele.id})">Show/Hide</div>
                <div class="fca" data-disp=${ele.open}>${ele.a}</div>
                <div class="fcoptions">
                    <div class="edit" onclick="editfc(${ele.id})"><i class="fa-solid fa-pen-to-square" style="color: #5895fd;"></i></div>
                    <div class="del" onclick="deletefc(${ele.id})"><i class="fa-solid fa-trash" style="color: #fd4e4e;"></i></div>
                </div>
            </div>`;
  });
  fcdisplayarea.innerHTML = html;
}

function showorhide(id) {
  let item = document.querySelector(`.fc${id} .fca`);
  console.log(item.dataset.disp);
  if (item.dataset.disp == "0") {
    //open it
    item.style.display = "flex";
    item.dataset.disp = "1";
  } else {
    item.style.display = "none";
    item.dataset.disp = "0";
  }
}

function deletefc(did) {
  console.log(did);
  data = data.filter((it) => {
    return it.id != did;
  });
  renderdata();
}

function editfc(eid) {
  isOpen = true;
  data.forEach((ele) => {
    if (ele.id == eid) {
      que.value = ele.q;
      ans.value = ele.a;
      edit = ele;
    }
  });
  addfcbg.style.display = "flex";
}
