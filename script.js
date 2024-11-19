let data = [
    {
      name: "Digital Clock",
      description:
        "A digital clock that displays the current time with real-time updates.",
      proxyname: "digitalclock",
    },
    {
      name: "Modern Number Counter",
      description:
        "Increment or decrement numbers with a counter control.",
      proxyname: "moderncounter",
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
                        <div class="githubc"><a href="https://github.com/hemanthrdygit/30daysjs/tree/main/projects/${element.proxyname}">Github</a></div>
                    </div>
                </div>`;
});
cards.innerHTML = html;
