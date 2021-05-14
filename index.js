const colors = ["#FFFFFF", "#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const refs = {
  start: document.querySelector("[data-action=start]"),
  stop: document.querySelector("[data-action=stop]"),
};

function colorChange() {
  document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
}

let isActive = false;
let intervalId = null;
const NOTIFICATION_DELAY = 1000;

refs.start.addEventListener("click", onStart);
function onStart() {
  if (isActive) {
    refs.start.removeAttribute("data-action", "button:disabled");
    return;
  }
  isActive = true;
  intervalId = setInterval(colorChange, NOTIFICATION_DELAY);
}
refs.stop.addEventListener("click", onStop);
function onStop() {
  isActive = false;
  clearInterval(intervalId);
}
