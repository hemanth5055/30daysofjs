// Initialize constants and select DOM elements
let timestamp = "1734408012647";  // Marvel API timestamp
let publickey = "ec0ec8b7619f93fe5e55a3efc60c513c";  // Marvel API public key
let hashval = "b80d90163f0d9ae12b79a899c01bc157";  // Marvel API hash value (md5 of timestamp + private key + public key)
let apiKey = publickey;  // Public API key for Marvel API
let charname = document.querySelector(".charname");  // Input field for character search
let suggestions = document.querySelector(".suggestions");  // Suggestions dropdown to show character names
let heading = document.querySelector(".heading");  // Heading to display the character name
let desc = document.querySelector(".desc");  // Paragraph to display the character's description
let img = document.querySelector(".imgman");  // Image element to display the character's image

// Initial call to get data for 'Captain America'
getData("Captain America");

// Event listener to detect user input in the character name field
charname.addEventListener("input", () => {
  // Trigger the API call only if the input length is greater than or equal to 4 characters
  if (charname.value.length >= 4) {
    // Construct URL for Marvel API search based on user input
    let url = `
    https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${charname.value}&ts=${timestamp}&apikey=${apiKey}&hash=${hashval}`;
    
    // Initialize an empty string to store the HTML for suggestions
    let html = ``;

    // Fetch data from Marvel API based on the character name starting with the input value
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Display the suggestions dropdown
        suggestions.style.display = "inline";

        // Loop through the API response to generate suggestions
        data.data.results.forEach((element) => {
          html += `<div class="opt value="${element.name}" onclick="selected(event)">${element.name}</div>`;
        });

        // Insert the generated HTML into the suggestions container
        suggestions.innerHTML = html;
      })
      .catch(() => {
        console.log("Error");  // Error handling in case of API failure
      });
  } else {
    // Hide suggestions if the input length is less than 4 characters
    suggestions.style.display = "none";
    suggestions.innerHTML = "";  // Clear the suggestions list
  }
});

// Function to handle selection of a suggestion
function selected(event) {
  // Set the input field's value to the selected character's name
  charname.value = event.target.innerText;
  
  // Hide the suggestions dropdown
  suggestions.style.display = "none";
  
  // Fetch data for the selected character
  getData(charname.value);
}

// Function to fetch and display character data based on the name
function getData(Name) {
  // Construct URL for Marvel API with the given character name
  let url = `
  https://gateway.marvel.com:443/v1/public/characters?name=${Name}&ts=${timestamp}&apikey=${apiKey}&hash=${hashval}`;

  // Fetch data from Marvel API for the given character name
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Loop through the API response to extract relevant data for the character
      data.data.results.forEach((element) => {
        // Set the image source for the character's thumbnail
        img.src = `${element.thumbnail.path}.${element.thumbnail.extension}`;
        
        // Set the heading (character's name)
        heading.innerHTML = element.name;
        
        // Set the description of the character
        desc.innerHTML = element.description;

        // Clear the character name input after fetching data
        charname.value = "";
      });
    })
    .catch(() => {
      console.log("Error");  // Error handling in case of API failure
    });
}
