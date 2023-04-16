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
<<<<<<< HEAD
    }, 1000);
=======
    }, 100);
>>>>>>> b6a420c (feat: add hw-14)
    isStart = true;
  }
});

function createTime() {
<<<<<<< HEAD
  return `${addZero(secondsCount)} sec`;
=======
  const sec = Math.floor(secondsCount / 10);
  return `${addZero(sec)} sec`;
>>>>>>> b6a420c (feat: add hw-14)
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
