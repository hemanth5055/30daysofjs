let meme = document.querySelector(".meme");
let heading = document.querySelector(".heading");
let generate = document.querySelector(".generate");

// Initialize render on page load
render();

// Event listener for the generate button
generate.addEventListener("click", () => {
  render();
});

// Function to fetch and render meme
async function render() {
  try {
    // Show a loading indicator while the meme is being fetched
    heading.innerHTML = "Loading...";
    meme.src = "";  // Clear the current image

    // Fetch meme data from the API
    const response = await fetch("https://meme-api.com/gimme");
    const data = await response.json();
    
    // Update heading and meme with the fetched data
    heading.innerHTML = data.title;
    meme.src = data.url;
  } catch (error) {
    // Error handling if the API request fails
    heading.innerHTML = "Error loading meme.";
    meme.src = "";  // Clear the image
    console.error("Error fetching meme:", error);
  }
}
