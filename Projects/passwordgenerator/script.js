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
  // Validate the password length input
  if (length.value === "") {
    length.value = 8;
  } else if (parseInt(length.value) >= 32) {
    length.value = 32;
  } else if (parseInt(length.value) <= 8) {
    length.value = 8;
  }

  let len = parseInt(length.value);
  let password = "";
  let usableDomains = [];

  // Add domains based on selected checkboxes
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

  // If no domain is selected, show a warning
  if (usableDomains.length === 0) {
    psdarea.innerHTML = "Select at least one option!";
  } else {
    // Generate password from selected domains
    for (let i = 0; i < len; i++) {
      let domainIndex = Math.floor(Math.random() * usableDomains.length);
      let charIndex = Math.floor(Math.random() * usableDomains[domainIndex].length);
      password += usableDomains[domainIndex][charIndex];
    }

    isPasswordGenerated = true;
    psdarea.innerHTML = password;
  }
}

copy.addEventListener("click", () => {
  if (isPasswordGenerated) {
    navigator.clipboard.writeText(psdarea.innerHTML).then(() => {
      // Display notification when password is copied
      notification.style.display = "block";
      setTimeout(() => {
        notification.style.display = "none";
      }, 900);

      // Clear password after copying
      psdarea.innerHTML = "Create Password";
      isPasswordGenerated = false;
    });
  }
});
