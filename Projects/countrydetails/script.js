// Select DOM elements
let search = document.querySelector(".search"); // Search button
let country = document.querySelector(".country"); // Input field for country name
let flag = document.querySelector(".flag"); // Image element for country flag
let details = document.querySelector(".details"); // Container to display country details
let namer = document.querySelector(".name"); // Country name display
let capital = document.querySelector(".capital"); // Capital city display
let continent = document.querySelector(".continent"); // Continent display
let language = document.querySelector(".language"); // Languages spoken in the country
let population = document.querySelector(".population"); // Population display
let currency = document.querySelector(".currency"); // Currency display

// Event listener for search button
search.addEventListener("click", () => {
  if (country.value.length != 0) {
    update(country.value); // Call update function with the input country
  }
  country.value = ""; // Clear input field
});

// Default country to display is India
update("India");

// Function to fetch and display country information
function update(ctry) {
  let url = `https://restcountries.com/v3.1/name/${ctry}`; // API URL to fetch country data
  fetch(url)
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => {
      console.log(data); // Log the fetched data for debugging
      if (data.status == 404) {
        alert("Country Not Found"); // Alert if country not found
        return true;
      } else {
        // If country data is found, display details
        details.style.display = "flex"; // Make details section visible
        flag.src = data[0].flags.png; // Set the flag image
        namer.innerHTML = data[0].name.common; // Display country name
        capital.innerHTML = `Capital : ${data[0].capital[0]}`; // Display capital city
        continent.innerHTML = `Continent : ${data[0].region}`; // Display continent
        population.innerHTML = `Population : ${data[0].population}`; // Display population
        currency.innerHTML = `Currency : ${
          Object.keys(data[0].currencies)[0]
        } - ${Object.values(data[0].currencies)[0].name}`; // Display currency name and symbol
        language.innerHTML = `Common Languages : ${Object.values(
          data[0].languages
        )
          .toString()
          .split(",")
          .join(", ")}`; // Display common languages
      }
    })
    .catch((error) => {
      console.log("Error fetching country data:", error); // Log any fetch errors
    });
}
