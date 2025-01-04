let items = document.querySelector(".items");
let mode = document.querySelector(".mode");
let jsh1 = document.querySelector(".js h1");
let root = document.querySelector(":root");

let html = ``;
let isDark = false;
mode.addEventListener("click", () => {
  if (isDark) {
    //turn to light mode
    root.style.setProperty("--text-color", "black");
    root.style.setProperty("--card-background", "#eeeeee");
    root.style.setProperty("--body-background", "white");
    root.style.setProperty("--button-background", "#fbfbfb");
    root.style.setProperty("--button-background-main", "#e3e3e3bc");
    isDark = false;
    mode.innerHTML = `<i class="fa-solid fa-moon" style="color: #ffffff;"></i>`;
  } else {
    //turn to dark mode
    root.style.setProperty("--text-color", "#dddddd");
    root.style.setProperty("--card-background", "#2a2a2a");
    root.style.setProperty("--body-background", "black");
    root.style.setProperty("--button-background", "#545454");
    root.style.setProperty("--button-background-main", "#545454");
    isDark = true;
    mode.innerHTML = `<i class="fa-solid fa-lightbulb" style="color: #ffffff;">`;
  }
});
data.forEach((element) => {
  html += `<div class="item">
          <div class="itemimg">
          <img src="Assets/${element.proxyname}.png" alt="">
          </div>
          <div class="itemdetails">
            <h3 class="headingitem">${element.name}</h3>
            <p class="decription">
             ${element.description}
            </p>
            <div class="btns1">
              <a href="Projects/${element.proxyname}/index.html" target="_blank"><button class="livec bt1">Live</button></a>
              <a href="https://github.com/hemanth5055/30daysofjs/tree/main/Projects/${element.proxyname}" target="_blank"><button class="githubc bt1">Github</button></a>
            </div>
          </div>
        </div>`;
});
items.innerHTML = html;
