const timer = document.querySelector('.timer');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');

let startTime = Date.now();
let pastTime = 0;
let timerId;

function updateTime() {
  const currentTime = Date.now();
  const sec = Math.floor((currentTime - startTime + pastTime) / 1000);
  timer.textContent = `${sec} sec`;
}

startBtn.addEventListener('click', () => {
  if (!timerId) {
    startTime = Date.now();
    timerId = setInterval(updateTime, 100);
  }
});

stopBtn.addEventListener('click', () => {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    pastTime += Date.now() - startTime;
  }
});

updateTime();
