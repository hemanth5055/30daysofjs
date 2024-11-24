let data = [
    {
      id:1,
      name: "Digital Clock",
      description:
        "A digital clock that displays the current time with real-time updates.",
      proxyname: "digitalclock",
    },
    {
      id:2,
      name: "Modern Number Counter",
      description:
        "Increment or decrement numbers with a counter control.",
      proxyname: "moderncounter",
    },
    {
      id:3,
      name: "Color Picker",
      description:
        "Select colors using a color picker and view the color codes.",
      proxyname: "colorpicker",
    },
    {
      id:4,
      name: "Todo App",
      description:
        "Simple todo app to track your day-to-day tasks",
      proxyname: "todo",
    },
    {
      id:5,
      name: "Random Joke ",
      description:
        "Generate random jokes using the JokeAPI.",
      proxyname: "randomjoke",
    },
    {
      id:6,
      name: "Random Color Generator",
      description:
        "Generate random colors with a single click using this tool.",
      proxyname: "randomcolorgenerator",
    },
];
let cards = document.querySelector(".cards");
let html = ``;
data.forEach((element) => {
  html += `<div class="card">
                    <div class="cardimage">
                    <img src="Assets/${element.proxyname}.png" alt="">
                    </div>
                    <div class="cardname">
                        ${element.name}
                    </div>
                    <div class="carddesc">
                    ${element.description}
                    </div>
                    <div class="cardbtn">
                        <div class="live"><a href="Projects/${element.proxyname}/index.html">Live</a></div>
                        <div class="githubc"><a href="https://github.com/hemanth5055/30daysofjs/tree/main/Projects/${element.proxyname}">Github</a></div>
                    </div>
                </div>`;
});
cards.innerHTML = html;
