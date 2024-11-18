let hour = document.querySelector(".hrs");
let minutes = document.querySelector(".min");
let seconds = document.querySelector(".sec");
let ampm = document.querySelector(".ampm");
setInterval(() => {
    render();
  }, 1000);
function render() {
  let date = new Date();
  hour.innerHTML = addzeroes(changetime(date.getHours()));
  minutes.innerHTML = addzeroes(date.getMinutes());
  seconds.innerHTML = addzeroes(date.getSeconds());
  ampm.innerHTML = decideampm(date.getHours());
  console.log("hello")
}
function addzeroes(value) {
  return value > 9 ? value : "0" + value;
}
function decideampm(hour) {
  return hour > 12 ? "PM" : "AM";
}
function changetime(hour) {
  return hour > 12 ? hour - 12 : hour;
}

