// Let statements to select DOM elements
let quotearea = document.querySelector(".quotearea");  // Selects element with class "quotearea"
let authorarea = document.querySelector(".authorarea");  // Selects element with class "authorarea"
let next = document.querySelector(".next");            // Selects element with class "next" (presumably a button)

// Global variable to store the fetched quotes
let totalQuotes;

// Async function to fetch quotes from a JSON file
async function gen() {
  var url = "https://raw.githubusercontent.com/msramalho/json-tv-quotes/master/quotes.json";  // URL of the JSON file containing quotes
  const response = await fetch(url);                                                          // Fetches the JSON data
  totalQuotes = await response.json();                                                        // Parses the JSON response and stores it in totalQuotes
}

// Call the gen function to fetch quotes on page load
gen();

// Add event listener for the "next" button click
next.addEventListener("click", () => {
  // Generate a random index within the range of total quotes
  const index = Math.floor(Math.random() * totalQuotes.length);

  // Update the quote and author areas in the DOM
  quotearea.innerHTML = totalQuotes[index].quote;
  authorarea.innerHTML = `${totalQuotes[index].author} (${totalQuotes[index].source})`;  // Fixed template literal to display author and source correctly
});