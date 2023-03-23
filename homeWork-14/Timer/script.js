const box = document.querySelector(".box");
const clickStart = document.querySelector(".clickStart");
const clickStop = document.querySelector(".clickStop");

let boxState = 0;
let timer;
let isStart = false;

function xxNumber(number) {
  if (number < 10) {
    return `0${number}`;
  } else {
    return `${number}`;
  }
};

clickStart.addEventListener("click", () => {
  startTimer();
  isStart = true;
});

function startTimer() {
  if (!isStart) {
    timer = setInterval(() => {
      boxState++;
      box.innerHTML = `${xxNumber(boxState)} sec`;
    }, 1000);
  }
};

function stopTimer() {
  clearInterval(timer);
  isStart = false;
};

clickStop.addEventListener("click", () => {
  stopTimer();
});
