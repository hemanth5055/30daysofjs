// Select the input field for the number
let number = document.querySelector("#number");

// Select the submit button
let submit = document.querySelector(".submit");

// Select the area where the fact will be displayed
let factarea = document.querySelector(".factarea");

// Add an event listener to the submit button for click events
submit.addEventListener("click", () => {
  // Get the value entered in the number input field
  let value = number.value;

  // Display a temporary message indicating that the fact is being fetched
  factarea.innerHTML = `<h4>Wait a Bit ⏳</h4>`;

  // Check if the input value is not empty
  if (value.length >= 1) {
    // Call the function to fetch and display the fact
    getFact(value);
  }
});

// Asynchronous function to fetch a number fact from the API
async function getFact(value) {
  try {
    // Fetch the fact from the Numbers API
    let resp = await fetch(`http://numbersapi.com/${value}`);
    // Convert the response to text
    let fact = await resp.text();
    // Display the fetched fact in the fact area
    factarea.innerHTML = `<p>${fact}</p>`;
  } catch (error) {
    // Handle errors during the fetch process
    console.error("Error fetching fact:", error);
    factarea.innerHTML = `<p>Something went wrong. Please try again later.</p>`;
  }
}
