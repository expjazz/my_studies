let secondHand = document.querySelector(".second-hand");
let minHand = document.querySelector(".min-hand");
let hourHand = document.querySelector(".hour-hand");
function setDate() {
  let now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours();
  let minDeg = (minutes / 60) * 360 + 90;
  let hourDeg = (hours / 24) * 360 + 90;
  let secondsDeg = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  console.log(seconds);
}
setInterval(setDate, 1000);
