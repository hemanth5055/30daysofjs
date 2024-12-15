let budgetinp = document.querySelector(".budgetinp");
let setbudget = document.querySelector(".setbudget");
let producttitle = document.querySelector(".producttitle");
let productcost = document.querySelector(".productcost");
let checkamount = document.querySelector(".checkamount");
let totalbudgetvalue = document.querySelector(".totalbudgetvalue");
let expensesvalue = document.querySelector(".expensesvalue");
let balancevalue = document.querySelector(".balancevalue");
let items = document.querySelector(".items");

let budgetJ = 5000;
let expenseJ = 0;
updateBoard();
let isModifyingitem = false;
let isModifyingid;
function updateBoard() {
  totalbudgetvalue.innerHTML = "₹ " + budgetJ;
  expensesvalue.innerHTML = "₹ " + expenseJ;
  balancevalue.innerHTML = "₹ " + (budgetJ - expenseJ);
}
setbudget.addEventListener("click", () => {
  if (budgetinp.value > budgetJ) {
    budgetJ = budgetinp.value;
    updateBoard();
  }
});
let idTracker = 0;
let listJ = [];
checkamount.addEventListener("click", () => {
  if (producttitle.value.length != 0 && productcost.value > 0) {
    if (isModifyingitem) {
      listJ.forEach((element) => {
        console.log(element);
        if (element.id == isModifyingid) {
          console.log(productcost.value + " " + producttitle.value);
          element.cost = Number(productcost.value);
          element.nameExp = producttitle.value;
          producttitle.value = "";
          productcost.value = "";
        }
      });
      isModifyingitem = false;
    } else {
      let itemJ = {
        id: ++idTracker,
        nameExp: producttitle.value,
        cost: Number(productcost.value),
      };
      producttitle.value = "";
      productcost.value = "";
      listJ.push(itemJ);
    }
  }
  updateexpeList();
});

function updateexpeList() {
  let html = ``;
  expenseJ = 0;
  listJ.forEach((ele) => {
    expenseJ += ele.cost;
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
  items.innerHTML = html;
  updateBoard();
}

function deleteitem(id) {
  console.log("hello");
  listJ = listJ.filter((ele) => ele.id != id);
  updateexpeList();
}

function modifyitem(id) {
  listJ.forEach((element) => {
    if (element.id == id) {
      isModifyingitem = true;
      isModifyingid = id;
      producttitle.value = element.nameExp;
      productcost.value = element.cost;
    }
  });
}
