// Select the submit button element
let submit = document.querySelector(".submit");

// Select the input field for the link
let link = document.querySelector(".link");

// Select the image element to display the favicon
let favimg = document.querySelector(".favimg");

// Add a click event listener to the submit button
submit.addEventListener("click", () => {
  // Check if the link input is not empty
  if (link.value.length != 0) {
    // Set the image source to the favicon URL based on the link input
    favimg.src = `https://icon.horse/icon/${link.value}`;
  }
});
