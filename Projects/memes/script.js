let meme = document.querySelector(".meme");
let heading = document.querySelector(".heading");
let generate = document.querySelector(".generate");


render();
generate.addEventListener("click", () => {
  render();
});
async function render() {
  fetch("https://meme-api.com/gimme")
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
      heading.innerHTML = data.title;
      meme.src = data.url;
    });
}
