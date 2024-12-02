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
    {
      id:7,
      name: "Music Player",
      description:
        "A simple music player built using HTML, CSS, and JavaScript.",
      proxyname: "musicplayer",
    },
    {
      id:8,
      name: "Analog Clock",
      description:
        "Displays the current time with a simple clock interface.",
      proxyname: "analogclock",
    },
    {
      id:9,
      name: "Timer",
      description:
        "Set a countdown in minutes for any task or event",
      proxyname: "timer",
    },
    {
      id:10,
      name: "Stopwatch",
      description:
        "A simple stopwatch with start, stop, and reset functionality.",
      proxyname: "stopwatch",
    },
    {
      id:10,
      name: "Password Generator",
      description:
        "Generate strong random passwords for secure use.",
      proxyname: "passwordgenerator",
    },
    {
      id:11,
      name: "Tic Tac Toe",
      description:
        "Play the classic Tic Tac Toe game against the computer.",
      proxyname: "tictactoe",
    },
    {
      id:12,
      name: "Weather App",
      description:
        "Get the weather details of any city using the OpenWeatherMap API.",
      proxyname: "weather",
    },
    {
      id:13,
      name: "Gradient Generator",
      description:
        "Create beautiful CSS gradients easily with this gradient generator.",
      proxyname: "gradientgenerator",
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
                        <a class="live" href="Projects/${element.proxyname}/index.html">Live</a>
                        <a class="githubc" href="https://github.com/hemanth5055/30daysofjs/tree/main/Projects/${element.proxyname}">Github</a>
                    </div>
                </div>`;
});
cards.innerHTML = html;
