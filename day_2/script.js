const secHandUK = document.querySelector('#second-hand-uk');
const minHandUK = document.querySelector('#min-hand-uk');
const hourHandUK = document.querySelector('#hour-hand-uk');;
const secHandTW = document.querySelector('#second-hand-tw');
const minHandTW = document.querySelector('#min-hand-tw');
const hourHandTW = document.querySelector('#hour-hand-tw');

function setDate() {
  // Taiwan
  const offsetTW = 8;  // GMT Taiwan
  const now = new Date( new Date().getTime() + offsetTW * 3600 * 1000).toUTCString();  // "Wed, 12 Sep 2018 07:53:52 GMT"
  
  const seconds = Number(now.slice(23, 25));
  const secDegrees = ((seconds / 60) * 360) + 90;
  secHandTW.style.transform = `rotate(${secDegrees}deg)`;
  secHandUK.style.transform = `rotate(${secDegrees}deg)`;

  const minutes = Number(now.slice(20, 22));
  const minDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  minHandTW.style.transform = `rotate(${minDegrees}deg)`;
  minHandUK.style.transform = `rotate(${minDegrees}deg)`;

  const hours = Number(now.slice(17, 19));
  const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90; 
  hourHandTW.style.transform = `rotate(${hourDegrees}deg)`;

  // hours in United Kingdom hours
  const offsetUK = 0;  // GMT UK
  const nowUK = new Date( new Date().getTime() + offsetUK * 3600 * 1000).toUTCString();
  let hoursUK = Number(nowUK.slice(17, 19));
  const month = nowUK.slice(8, 11);
  // roughly use month to recognize summer time
  switch (month) {
    case 'Apr':
    case 'May':
    case 'Jun':
    case 'Jul':
    case 'Aug':
    case 'Sep':
    case 'Oct':
      hoursUK += 1;
    break;
  }
  const hourDegreesUK = ((hoursUK / 12) * 360) + ((minutes / 60) * 30) + 90;
  hourHandUK.style.transform = `rotate(${hourDegreesUK}deg)`;
}

setInterval(setDate, 1000);
setDate();

/*
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
*/