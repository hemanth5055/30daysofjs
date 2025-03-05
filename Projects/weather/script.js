// Mode toggle element
let mode = document.querySelector(".mode");

// Weather information display areas
let temparea = document.querySelector(".temparea");
let humidarea = document.querySelector(".humidarea");
let pressurearea = document.querySelector(".pressurearea");

// UI elements for the heading and footer
let heading = document.querySelector(".heading");
let footheading = document.querySelector(".footheading");

// Search input and submit button
let input = document.querySelector(".search");
let submit = document.querySelector(".submit");

// Array of weather display cards for dark mode handling
let Dcards = [humidarea, pressurearea, temparea];

// Flag to track dark mode state
let isdarkMode = false;

// Event listener to toggle light/dark mode
mode.addEventListener("click", () => {
  toggleMode();
});

// Function to toggle between light and dark mode
function toggleMode() {
  isdarkMode = !isdarkMode;
  
  // Toggling dark mode classes for the footer
  footheading.classList.toggle("darkfoot", isdarkMode);
  footheading.classList.toggle("lightfoot", !isdarkMode);
  
  // Change the icon in the mode toggle button
  mode.innerHTML = isdarkMode
    ? `<i class="fa-regular fa-lightbulb" style="color: #ffffff;"></i>`
    : `<i class="fa-solid fa-moon" style="color: #ffffff;"></i>`;

  // Toggle dark mode classes for other UI elements
  heading.classList.toggle("darkmodeheading", isdarkMode);
  Dcards.forEach((card) => card.classList.toggle("darkmodecard", isdarkMode));
  document.body.classList.toggle("darkbody", isdarkMode);
  input.classList.toggle("darkinput", isdarkMode);
}

// Event listener for the submit button to fetch weather data
submit.addEventListener("click", () => {
  let city = input.value.trim();  // Trim whitespace from the input
  if (city) {
    update(city);  // Fetch and display weather data
    input.value = "";  // Clear the input after submitting
  } else {
    alert("Please enter a city name");  // Alert user if input is empty
  }
});

// Function to fetch and display weather data for the given city
function update(city) {
  // Show loading message before fetching the weather data
  temparea.innerHTML = `<h4 class="tempdata">Loading...</h4>`;
  humidarea.innerHTML = `<h4 class="humiddata">Loading...</h4>`;
  pressurearea.innerHTML = `<h4 class="pressuredata">Loading...</h4>`;

  // Fetch data from OpenWeatherMap API
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=40a492d531002279f04d2ed95c492306`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {  // If the API response is valid
        let country = data.sys.country;
        let name = data.name;
        let isIndia = country === "IN";  // Flag for checking if the city is in India

        // Update the UI with the weather data
        temparea.innerHTML = `<h4 class="tempdata">${kelvintocelc(
          data.main.temp
        )}</h4><h4 class="cityname">${name} ${isIndia ? "🇮🇳" : `, ${country}`}</h4>`;
        humidarea.innerHTML = `<h4 class="humiddata">${data.main.humidity}</h4><h4 class="smallhead">Humidity</h4>`;
        pressurearea.innerHTML = `<h4 class="pressuredata">${data.main.pressure} </h4><h4 class="smallhead">Pressure</h4>`;
      } else {
        displayError();  // If the API response indicates an error, show an error message
      }
    })
    .catch(() => displayError());  // Handle network or other errors
}

// Function to display an error message when city is not found or there is an API error
function displayError() {
  temparea.innerHTML = `<h4 class="tempdata">00</h4><h4 class="cityname">City Not Found</h4>`;
  humidarea.innerHTML = `<h4 class="humiddata">00</h4><h4 class="smallhead">Humidity</h4>`;
  pressurearea.innerHTML = `<h4 class="pressuredata">00</h4><h4 class="smallhead">Pressure</h4>`;
  alert("City not found or API error.");
}

// Function to convert temperature from Kelvin to Celsius
function kelvintocelc(kelvin) {
  return (kelvin - 273.15).toFixed(2);  // Return the temperature rounded to 2 decimal places
}
