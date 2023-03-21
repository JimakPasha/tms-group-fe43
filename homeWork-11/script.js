// #### Task 1 💻
// 1. Создайте на странице три кнокпи 'button 1', 'button 2', 'button 3'
// 2. Сделайте чтобы по нажатию на каждую кнопку выводился alert('Hello, i am button!')
const button_task1 = document.querySelectorAll('.button_task1');
console.log(button_task1);
for(elem of button_task1) {
   elem.addEventListener('click', function () {
            alert('Hello, I am a button!');
         });
}
// #### Task 2 💻
// 1. Создайте на странице кнопку
// 2. Сделайте чтобы по нажатию на кнопку !правой! кнопкой мыши выводился alert('Это event contextmenu!!!')
const wrapper_task2 = document.querySelector('.button4');
wrapper_task2.addEventListener('contextmenu', function () {
   alert('Это event contextmenu!!!');
});
// #### Task 3 💻
// 1. Создайте на страницу кнопку
// 2. И сделайте, чтобы по нажатию на неё фон самой кнопки ставноился то красный, то белый.
const button5 = document.querySelector('.button5');
button5.addEventListener('mouseover', function () {
   this.style.backgroundColor = '#FF2400';
});
button5.addEventListener('mouseout', function () {
   this.style.backgroundColor = '#ffffff';
});
// #### Task 4 💻
// Создать поле с 16 квадратиками, чтобы по нажатие на каждый менялся цвет 
//(я показывал вам на уроке эту задачку в разделе делегирование, если забыли как, подсмотрите)
const wrapper_task4 = document.querySelector('.wrapper_task4');
wrapper_task4.addEventListener('click', (event) => {
   if (event.target.classList.contains('item')) {
      event.target.classList.toggle('olive');
   }
});
// #### Task 5 💻
// 1. Создать на страницу тег div в котором будет число 0
// 2. Создать кнопку
// 3. Каждый раз после нажатии на кнопку число в div должно увеличиваться на 1
// const wrapper_task5 = document.querySelector('.wrapper_task5');
const number = document.querySelector('.number');
const button6 = document.querySelector('.button6');
const button7 = document.querySelector('.button7');
button6.addEventListener('click', () => {
   number.innerHTML++;
});
button7.addEventListener('click', () => {
   number.innerHTML--;
});