// Напишите маленькое приложение Timer:

// Создайте папку Timer
// Создайте базовую структуру проекта из трех файлов html, css, js
// Функциональность приложения:
// Клавиша start - для запуска таймера
// Клавиша stop - для остановки таймера
// Циферблат с текущим временем в формате XX sec
// Примечания:
// Таймер измеряет время только в секундах
// После остановки таймера, если снова нажать клавишу start таймер запуститься с текущего результата, а не с начала.

const clockFace = document.querySelector(".clockFace");
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");

let timer;
let seconds = 0;
let isOn = false;

function timeTimer(num) {
    if (num < 10) {
      return `0${num}`;
    } else {
      return `0${num}`;
    };
};

startBtn.addEventListener("click", () => {
  startTimer();
  isOn = true;
});

function startTimer() {
    if (!isOn) {
      timer = setInterval(() => {
        seconds++;
        clockFace.innerHTML = `${timeTimer(seconds)} sec`;
      }, 1000);
    };
};

function stopTimer() {
      isOn = false;
      clearInterval(timer);
  }

stopBtn.addEventListener("click", () => {
    stopTimer();
  });
  
