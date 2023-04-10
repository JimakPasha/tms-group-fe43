// Task 1 💻
// Напишите маленькое приложение Timer:

// Создайте папку Timer
// Создайте базовую структуру проекта из трех файлов html, css, js
// Функциональность приложения:
// Клавиша start - для запуска таймера
// Клавиша stop - для остановки таймера
// Циферблат с текущим временем в формате XX sec
// Примечания:

// Таймер измеряет время только в секундах
// После остановки таймера, если снова нажать клавишу start таймер запуститься с текущего результата, 
//а не с начала.

const counter = document.querySelector('.counter');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

let counterState = 0;
start.addEventListener('click', () => {
   const timer = setInterval(() => {
      counterState++;
      counter.innerHTML = counterState;
      stop.addEventListener('click', () => {
         clearInterval(timer);
      }, 1000);
   }, 1000);
});

