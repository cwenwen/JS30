// get hands on HTML
const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secDegrees = ((seconds / 60) * 360) + 90;  // plus 90 because the hand starts from 90 degrees
  secHand.style.transform = `rotate(${secDegrees}deg)`;

  const minutes = now.getMinutes();
  const minDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;  // 1 min is 6 degrees
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;  // i hour is 30 degrees
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();  // execute immediately