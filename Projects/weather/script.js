let mode = document.querySelector(".mode");

let temparea = document.querySelector(".temparea");
let humidarea = document.querySelector(".humidarea");
let pressurearea = document.querySelector(".pressurearea");

let heading = document.querySelector(".heading");
let footheading = document.querySelector(".footheading");

let input = document.querySelector(".search");
let submit = document.querySelector(".submit");
let Dcards = [humidarea, pressurearea, temparea];
let isdarkMode = false;
mode.addEventListener("click", () => {
  moder();
});
function moder() {
  if (isdarkMode) {
    footheading.classList.remove("darkfoot");
    footheading.classList.add("lightfoot");
    mode.innerHTML = `<i class="fa-solid fa-moon" style="color: #ffffff;"></i>`;
    isdarkMode = false;
  } else {
    footheading.classList.remove("lightfoot");
    footheading.classList.add("darkfoot");
    isdarkMode = true;
    mode.innerHTML = `<i class="fa-regular fa-lightbulb" style="color: #ffffff;"></i>`;
  }
  heading.classList.toggle("darkmodeheading");
  Dcards.forEach((head) => {
    head.classList.toggle("darkmodecard");
  });
  document.body.classList.toggle("darkbody");
  input.classList.toggle("darkinput");
}

submit.addEventListener("click", () => {
  if (input.value == "") {
    console.log("Enter city Name");
  } else {
    update(input.value);
    input.value = "";
  }
});

function update(city) {
  console.log(city);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=40a492d531002279f04d2ed95c492306`
  )
    .then((response) => response.json())
    .then((data) => {
      let India = false;
      console.log(data);
      if (data.cod == 200) {
        let country = data.sys.country;
        let name = data.name;
        if (country == "IN") {
          India = true;
        }
        temparea.innerHTML = `<h4 class="tempdata">${kelvintocelc(
          data.main.temp
        )}</h4><h4 class="cityname">${name}${
          India ? " 🇮🇳" : "," + country
        }</h4>`;
        humidarea.innerHTML = `<h4 class="humiddata">${data.main.humidity}</h4><h4 class="smallhead">Humidity</h4>`;
        pressurearea.innerHTML = `<h4 class="pressuredata">${data.main.pressure}</h4><h4 class="smallhead">Pressure</h4>`;
      } else {
        temparea.innerHTML = `<h4 class="tempdata">00</h4><h4 class="cityname">City Not Found</h4>`;
        humidarea.innerHTML = `<h4 class="humiddata">00</h4><h4 class="smallhead">Humidity</h4>`;
        pressurearea.innerHTML = `<h4 class="pressuredata">00</h4><h4 class="smallhead">Pressure</h4>`;
      }
    });
}

function kelvintocelc(kelvin) {
  return (kelvin - 273.15).toFixed(2);
}
