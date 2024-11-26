let hhand = document.querySelector(".hourhand");
let mhand = document.querySelector(".minutehand");
let shand = document.querySelector(".secondhand");

setInterval(() => {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let millisec = time.getMilliseconds();

  let hourRotation = (hour % 12) * 30 + (minute / 60) * 30; 
  let minuteRotation = minute * 6 + (second / 60) * 6; 
  let secondRotation = second * 6 + millisec * 0.006;

  hhand.style.transform = `rotate(${hourRotation - 180}deg)`;
  mhand.style.transform = `rotate(${minuteRotation - 180}deg)`;
  shand.style.transform = `rotate(${secondRotation - 180}deg)`;

  console.log(`Hour: ${hour}, Minute: ${minute}, Second: ${second}`);
}, 100);
