// Select the elements representing the clock hands
let hhand = document.querySelector(".hourhand"); // Hour hand of the clock
let mhand = document.querySelector(".minutehand"); // Minute hand of the clock
let shand = document.querySelector(".secondhand"); // Second hand of the clock

// Update the clock every 100 milliseconds
setInterval(() => {
  // Get the current time
  let time = new Date(); 
  let hour = time.getHours(); // Current hour
  let minute = time.getMinutes(); // Current minute
  let second = time.getSeconds(); // Current second
  let millisec = time.getMilliseconds(); // Current milliseconds

  // Calculate the rotation angle for the hour hand
  // Each hour (12-hour clock) corresponds to 30 degrees, with minute adjustments
  let hourRotation = (hour % 12) * 30 + (minute / 60) * 30; 

  // Calculate the rotation angle for the minute hand
  // Each minute corresponds to 6 degrees, with second adjustments
  let minuteRotation = minute * 6 + (second / 60) * 6; 

  // Calculate the rotation angle for the second hand
  // Each second corresponds to 6 degrees, with millisecond adjustments
  let secondRotation = second * 6 + millisec * 0.006;

  // Apply the calculated rotation to each clock hand, adjusting by 180 degrees to align
  hhand.style.transform = `rotate(${hourRotation - 180}deg)`; 
  mhand.style.transform = `rotate(${minuteRotation - 180}deg)`;
  shand.style.transform = `rotate(${secondRotation - 180}deg)`;

  // Log the current time for debugging purposes
  console.log(`Hour: ${hour}, Minute: ${minute}, Second: ${second}`);
}, 100);
