let timestamp = "1734408012647";
let publickey = "ec0ec8b7619f93fe5e55a3efc60c513c";
let hashval = "b80d90163f0d9ae12b79a899c01bc157";
let apiKey = publickey;
let charname = document.querySelector(".charname");
let suggestions = document.querySelector(".suggestions");
let heading = document.querySelector(".heading");
let desc = document.querySelector(".desc");
let img = document.querySelector(".imgman");

getData("Captain America");

charname.addEventListener("input", () => {
  if (charname.value.length >= 4) {
    let url = `
https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${charname.value}&ts=${timestamp}&apikey=${apiKey}&hash=${hashval}`;
    let html = ``;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        suggestions.style.display = "inline";
        data.data.results.forEach((element) => {
          html += `<div class="opt value="${element.name}" onclick="selected(event)">${element.name}</div>`;
        });
        suggestions.innerHTML = html;
      })
      .catch(() => {
        console.log("Error");
      });
  } else {
    suggestions.style.display = "none";
    suggestions.innerHTML = "";
  }
});

function selected(event) {
  charname.value = event.target.innerText;
  suggestions.style.display = "none";
  getData(charname.value);
}

function getData(Name) {
  let url = `
https://gateway.marvel.com:443/v1/public/characters?name=${Name}&ts=${timestamp}&apikey=${apiKey}&hash=${hashval}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.data.results.forEach((element) => {
        img.src = `${element.thumbnail.path}.${element.thumbnail.extension}`;
        heading.innerHTML = element.name;
        desc.innerHTML = element.description;
        charname.value = "";
      });
    })
    .catch(() => {
      console.log("Error");
    });
}
