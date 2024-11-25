let audio = document.querySelector(".audio");
let playpause = document.querySelector(".playpause");
let back = document.querySelector(".back");
let next = document.querySelector(".next");
let songname = document.querySelector(".songname");
let singername = document.querySelector(".singername");
let img = document.querySelector(".img");
let progress = document.querySelector(".progress");
let soundprogress = document.querySelector(".soundprogress");
let isPlaying = false;
audio.volume = soundprogress.value / 100;
soundprogress.addEventListener("change", () => {
  audio.volume = soundprogress.value / 100;
});
let songindex = 0;
let songslist = [
  {
    id: 1,
    name: "Radioactive",
    src: "music/radioactive.mp3",
    img: "images/imaginedragons.png",
    singer: "Imagine Dragons",
    color: "red",
  },
  {
    id: 2,
    name: "Darkside",
    src: "music/darkside.mp3",
    img: "images/alanwalker.png",
    singer: "Alan Walker",
    color: "blue",
  },
  {
    id: 3,
    name: "Say It Right",
    src: "music/sayitright.mp3",
    img: "images/nellyfurtado.png",
    singer: "Nelly Furtado",
    color: "lavendar",
  },
];
update(0);
playpause.addEventListener("click", () => {
  if (isPlaying) {
    pause();
  } else {
    play();
  }
});
function play() {
  playpause.innerHTML = `<i class="fa-solid fa-pause" style="color: #ffffff;"></i>`;
  audio.play();
  isPlaying = true;
}
function pause() {
  playpause.innerHTML = `<i class="fa-solid fa-play" style="color: #ffffff;"></i>`;
  audio.pause();
  isPlaying = false;
}
next.addEventListener("click", () => {
  songindex = (songindex + 1) % 3;
  update();
});
back.addEventListener("click", () => {
  songindex = (songindex - 1) % 3;
  update();
});

function update(a) {
  songname.innerHTML = songslist[songindex].name;
  singername.innerHTML = songslist[songindex].singer;
  img.src = songslist[songindex].img;
  audio.src = songslist[songindex].src;
  if (a != 0) {
    play();
  }
}
progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

setInterval(() => {
  progress.value = (audio.currentTime / audio.duration) * 100;
}, 100);
