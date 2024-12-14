let search = document.querySelector(".search");
let country = document.querySelector(".country");
let flag = document.querySelector(".flag");
let details = document.querySelector(".details");
let namer = document.querySelector(".name");
let capital = document.querySelector(".capital");
let continent = document.querySelector(".continent");
let language = document.querySelector(".language");
let population = document.querySelector(".population");
let currency = document.querySelector(".currency");
search.addEventListener("click", () => {
  if (country.value.length != 0) {
    update(country.value);
  }
  country.value = "";
});
update("India");
function update(ctry) {
  let url = `https://restcountries.com/v3.1/name/${ctry}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status == 404) {
        alert("Country Not Found");
        return true;
      } else {
        details.style.display = "flex";
        flag.src = data[0].flags.png;
        namer.innerHTML = data[0].name.common;
        capital.innerHTML = `Capital : ${data[0].capital[0]}`;
        continent.innerHTML = `Continent : ${data[0].region}`;
        population.innerHTML = `Population : ${data[0].population}`;
        currency.innerHTML = `Currency : ${
          Object.keys(data[0].currencies)[0]
        } - ${Object.values(data[0].currencies)[0].name}`;
        language.innerHTML = `Common Languages : ${Object.values(
          data[0].languages
        )
          .toString()
          .split(",")
          .join(", ")}`;
      }
    });
}
