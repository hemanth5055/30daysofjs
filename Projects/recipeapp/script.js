let recipe = document.querySelector(".recipe");
let submit = document.querySelector(".submit");
let nameR = document.querySelector(".name");
let list = document.querySelector(".list");
let recipeway = document.querySelector(".recipeway");
let ingredients = document.querySelector(".ingredients");
let reimg = document.querySelector(".reimg");
let viewrecipe = document.querySelector(".viewrecipe");
submit.addEventListener("click", () => {
  if (recipe.value.length != 0) {
    update(recipe.value);
    recipe.value = "";
  }
});
let isRecipe = false;
update("Spaghetti");
function update(a) {
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${a}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.meals != null) {
        nameR.innerHTML = `${data.meals[0].strMeal} - ${data.meals[0].strArea}`;
        let html = ``;
        for (let i = 1; i < 21; i++) {
          let a = `strIngredient${i}`;
          let b = `strMeasure${i}`;
          if (data.meals[0][a] == "" || data.meals[0][b] == "") {
            break;
          }
          html += `<li>${data.meals[0][b]} - ${data.meals[0][a]}</li>`;
          list.innerHTML = html;
        }
        recipeway.innerHTML = `<p> ${data.meals[0].strInstructions}</p>`;
        reimg.src = data.meals[0].strMealThumb;
      } else {
        nameR.innerHTML = "Recipe Not Found";
      }
    });
}

viewrecipe.addEventListener("click", () => {
  if (isRecipe) {
    ingredients.style.display = "flex";
    recipeway.style.display = "none";
    isRecipe = false;
    viewrecipe.innerHTML = "View recipe";
  } else {
    ingredients.style.display = "none";
    recipeway.style.display = "flex";
    isRecipe = true;
    viewrecipe.innerHTML = "View Ingredients";
  }
});
