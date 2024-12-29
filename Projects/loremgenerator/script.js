// Original Lorem Ipsum text
let lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Nulla, labore reprehenderit iure nihil vitae nam! 
Numquam, explicabo totam! Quis veniam assumenda aut accusamus voluptatem sint quia doloremque sit! 
Magni aspernatur ullam veniam excepturi deleniti provident ex iusto mollitia aut, incidunt earum inventore consequatur odio obcaecati doloribus possimus corporis eum laudantium! Reiciendis omnis voluptas sit quidem
repellat voluptate, sunt vitae molestiae impedit, esse delectus asperiores dolorum beatae accusamus placeat perferendis.
Sequi ratione tempora laboriosam enim modi repellendus qui fugit eum sapiente, soluta, ipsa error eaque? Quod, sint.
Amet possimus accusamus voluptatum sunt? Eaque nemo harum illum perferendis debitis a voluptatibus soluta maiores molestiae, voluptatum nostrum reiciendis veniam ab impedit. 
Nemoblanditiis, aliquam error explicabo laborum cumque laboriosam hic, dolores excepturi eius neque repudiandae.
Consequuntur debitis esse voluptates recusandae ipsa dolores ab eius sequi, omnis ipsam provident modi earum quas repellendus adipisci quaerat fuga sed, laborum saepe commodi qui.
Optio, quasi non officia, libero vel, maxime molestiae quas neque ad corporis debitis atque molestias.
In repellat nostrum dolores reiciendis,sed consequatur tempora? Explicabo itaque vel tempora natus amet nemo quos
quisquam quo accusantium eligendi quas, laboriosam nam ut! Dolorum,numquam hic accusantium modi ut delectus explicabo nihil placeat officiis,saepe amet et?`;

// Split the original Lorem Ipsum text into an array based on line breaks
let modifiedlorem = lorem.split("\n");

// Select input and display elements
let size = document.querySelector(".sizeinp"); // The input field where users select the number of lines
let loremtext = document.querySelector(".loremtext"); // The area where the generated text will be displayed

// Event listener for input field to change the number of lines based on user input
size.addEventListener("input", () => {
  generate(size.value); // Call the generate function to update the text
});

// Function to generate the Lorem Ipsum text based on the input value
function generate(a) {
  if (a == 0) {
    // If the input value is 0, display a placeholder text
    loremtext.innerHTML = "* Click to copy";
  } else {
    // Ensure the number of lines doesn't exceed the available lines in the original text (max 11)
    a = a >= 12 ? 11 : a;
    let text = ``;
    // Create a string by concatenating the first 'a' lines of the modified lorem
    for (let i = 0; i < a; i++) {
      text += modifiedlorem[i] + "<br>"; // Add a line break after each line
    }
    loremtext.innerHTML = text; // Display the generated text in the `loremtext` element
  }
}

// Event listener to copy the generated Lorem Ipsum text to the clipboard when clicked
loremtext.addEventListener("click", () => {
  if (loremtext.innerHTML != "* Click to copy") {
    // If the text is not the placeholder, copy the text to the clipboard
    navigator.clipboard.writeText(loremtext.innerHTML);
  }
});
