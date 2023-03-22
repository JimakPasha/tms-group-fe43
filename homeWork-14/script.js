
const display = document.querySelector('.display');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');

let startTime, elapsedTime = 0;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    display.innerHTML = (elapsedTime / 1000).toFixed(2) + ' sec';
  }, 10);
}

function stopTimer() {
  clearInterval(timerInterval);
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);