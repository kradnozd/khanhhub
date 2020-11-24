import "./styles.css";

document.getElementById("app").innerHTML = `
<div class="wrapper">
  <h1 class="logo">Khanh<span>hub</span></h1>
  <h2 class="announcement">COMING SOON! <img src="https://cdn.betterttv.net/emote/5c548025009a2e73916b3a37/3x" alt="pepe" /></h2>
  <div id="countdown">
    <div id='tiles'></div>
    <div class="labels">
      <li>Days</li>
      <li>Hours</li>
      <li>Mins</li>
      <li>Secs</li>
    </div>
  </div>
</div>
`;

var target_date = new Date("Dec 1, 2020"); // set the countdown date
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () {
  getCountdown();
}, 1000);

function getCountdown() {
  // find the amount of "seconds" between now and target
  var current_date = new Date().getTime();
  var seconds_left = (target_date - current_date) / 1000;

  days = pad(parseInt(seconds_left / 86400));
  seconds_left = seconds_left % 86400;

  hours = pad(parseInt(seconds_left / 3600));
  seconds_left = seconds_left % 3600;

  minutes = pad(parseInt(seconds_left / 60));
  seconds = pad(parseInt(seconds_left % 60));

  // format countdown string + set tag value
  countdown.innerHTML =
    "<span>" +
    days +
    "</span><span>" +
    hours +
    "</span><span>" +
    minutes +
    "</span><span>" +
    seconds +
    "</span>";
}

function pad(n) {
  return (n < 10 ? "0" : "") + n;
}
