// Select the submit button element from the DOM
let submit = document.querySelector(".submit");

// Select the search input element from the DOM
let searchinp = document.querySelector("#searchinp");

// Select the movies container element from the DOM
let movies = document.querySelector(".movies");

// Select the result name display element from the DOM
let resultname = document.querySelector(".resultname");

// Add a click event listener to the submit button
submit.addEventListener("click", () => {
  // Check if the search input is not empty
  if (searchinp.value.length > 0) {
    // Call the fetchmovies function with the search input value
    fetchmovies(searchinp.value);
  }
});

// Function to fetch movies from the API
function fetchmovies(m) {
  // Construct the API URL using the search term
  const url = `https://api.themoviedb.org/3/search/movie?query=${m}&include_adult=false&language=en-US&page=1&region=India`;

  // API request options, including headers and authorization token
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmNhY2ViY2M0OWI2NzQ1NDA3YWNmMTQ5ODVmYzI4MyIsIm5iZiI6MTczNTgzMjAwNi45NzIsInN1YiI6IjY3NzZiMWM2NDExMTU5OWUzODEzMDI1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GPgsxrXYDpfpTXFtxiuZNSCmO_Dlg_r1ul9xPTMSEao",
    },
  };

  // Fetch data from the API
  fetch(url, options)
    .then((res) => res.json()) // Parse the response as JSON
    .then((json) => {
      console.log(json); // Log the API response to the console

      let no = 0; // Counter for the number of movies displayed
      let html = ``; // Variable to store the HTML content

      // Loop through the movie results and build the HTML
      json.results.forEach((movie) => {
        if (movie.poster_path != null) {
          no++; // Increment the movie counter
          html += `<div class="item" onmouseover="showdesc(${
            movie.id
          })" onmouseout="hidedesc(${movie.id})">
                <div class="imgarea">
                <img src="${`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}">
                </div>
                <div class="detailsarea">
                    <h3 class="moviename">${movie.title}</h3>
                    <div class="year">${
                      movie.release_date != "" ? movie.release_date : "--"
                    }</div>
                </div>
                <div class="desc re${movie.id}">
                  ${movie.overview}
                </div>
            </div>`;
        }
      });

      // Update the result name element with the number of results
      resultname.innerHTML = `${no} results for "${m}"`;

      // Update the movies container with the generated HTML
      movies.innerHTML = html;
    })
    .catch((err) => {
      // Display an error message if the API call fails
      resultname.innerHTML = "Please try again later!";
    });
}

// Function to show the movie description on hover
function showdesc(id) {
  document.querySelector(`.re${String(id)}`).style.display = "flex";
}

// Function to hide the movie description on hover out
function hidedesc(id) {
  document.querySelector(`.re${String(id)}`).style.display = "none";
}
