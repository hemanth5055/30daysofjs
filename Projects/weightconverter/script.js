// Function to convert weight from grams to kilograms, pounds, and ounces
function convertWeight() {

    // Get the input value in grams from the HTML element
    const gramsInput = document.getElementById("grams"); 
    const grams = parseFloat(gramsInput.value); 
  
    // Validate the input: check if it's a number and not negative
    if (isNaN(grams) || grams < 0) { 
      document.getElementById("result").innerText = "Please enter a valid weight in grams."; 
      return; // Stop the function if input is invalid
    }
  
    // Perform the conversions
    const kilograms = grams / 1000; 
    const pounds = grams * 0.00220462;
    const ounces = grams * 0.035274;
  
    // Display the results in the HTML element
    document.getElementById("result").innerHTML = `
      <div>
        <div>${kilograms.toFixed(2)}</div> 
        <div>Kilograms</div>
      </div>
      <div>
        <div>${pounds.toFixed(2)}</div> 
        <div>pounds</div>
      </div>
      <div>
        <div>${ounces.toFixed(2)}</div> 
        <div>Ounces</div>
      </div>
    `;
  }