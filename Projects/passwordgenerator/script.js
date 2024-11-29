let psdarea = document.querySelector(".passwordshowarea");
let copy = document.querySelector(".copytoclipboard");
let notification = document.querySelector(".notification");
let generate = document.querySelector(".generate");
let lowercase = document.querySelector(".lowercase");
let uppercase = document.querySelector(".uppercase");
let numbers = document.querySelector(".numbers");
let symbols = document.querySelector(".symbols");
let length = document.querySelector(".length");
psdarea.innerHTML = "Create Password";
lowercase.checked = true;
generate.addEventListener("click", () => {
  generatepassword();
});
let isPasswordGenerated = false;
let lowercaseData = "abcdefghijklmnopqrstuvwxyz";
let uppercaseData = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbersData = "0123456789";
let symbolsData = "!@#$%^&*";

function generatepassword() {
  if (length.value == "") {
    length.value = 8;
  } else if (length.value >= 32) {
    length.value = 32;
  } else if (length <= 8) {
    length.value = 8;
  }
  let len = length.value;
  let password = "";
  let usableDomains = [];

  if (lowercase.checked) {
    usableDomains.push(lowercaseData);
  }
  if (uppercase.checked) {
    usableDomains.push(uppercaseData);
  }
  if (numbers.checked) {
    usableDomains.push(numbersData);
  }
  if (symbols.checked) {
    usableDomains.push(symbolsData);
  }
  if (usableDomains.length != 0) {
    for (let i = 0; i < len; i++) {
      let domainIndex = Math.floor(Math.random() * usableDomains.length);
      let charIndex = Math.floor(
        Math.random() * usableDomains[domainIndex].length
      );
      password += usableDomains[domainIndex][charIndex];
    }
    isPasswordGenerated = true;
    psdarea.innerHTML = `${password}`;
  } else {
    psdarea.innerHTML = "Select at least one option!";
  }
}

copy.addEventListener("click", () => {
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 900);
});
