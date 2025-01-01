// Select the submit button from the DOM
let submit = document.querySelector(".submit");

// Select the input field where users will type their search query
let namea = document.querySelector(".name");

// Select the area where fetched images will be displayed
let imagesarea = document.querySelector(".imagesarea");

// Add a click event listener to the submit button
submit.addEventListener("click", () => {
  // Get the value entered by the user in the input field
  let value = namea.value;

  // Check if the input value is not empty
  if (value.length >= 0) {
    // Clear the input field after the search query is processed
    namea.value = "";

    // Generate a random page number (1 to 10) for the API request
    let page = Math.floor(Math.random() * 10) + 1;

    // Fetch images from the Unsplash API based on the user query
    fetch(
      `https://api.unsplash.com/search/photos/?client_id=L9bWmX927WkYoG4hvMtI69u8b3MlYy154ak0aM9QbB0&query=${value}&page=${page}&per_page=12`
    )
      // Parse the API response to JSON
      .then((resp) => resp.json())
      .then((data) => {
        let html = ""; // Initialize an empty string to build the HTML for images
        console.log(data);
        if (data.results.length >= 1) {
          // Loop through the array of image results
          data.results.forEach((element) => {
            // Append an <img> tag with the image URL and alt text to the HTML string
            html += `<img src="${element.urls.small}" alt="${element.slug}">`;
          });

          // Update the images area with the generated HTML
          imagesarea.innerHTML = html;
        } else {
          imagesarea.innerHTML = `
          <h3>No images found.</h3>`;
        }
      });
  }
});
