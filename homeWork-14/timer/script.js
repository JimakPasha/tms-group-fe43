"use strict";

const seconds = document.querySelector(".timer-second"),
  start = document.querySelector(".timer-start"),
  pause = document.querySelector(".timer-stop");

let secondsCount = 0;
let time;
let isStart = false;

start.addEventListener("click", () => {
  if (!isStart) {
    time = setInterval(() => {
      secondsCount++;
      seconds.innerHTML = createTime();
    }, 100);
    isStart = true;
  }
});

function createTime() {
  const sec = Math.floor(secondsCount / 10);
  return `${addZero(sec)} sec`;
}

function addZero(number) {
  if (number < 10) {
    return `0${number}`;
  } else {
    return number;
  }
}

pause.addEventListener("click", () => {
  clearInterval(time);
  isStart = false;
});
