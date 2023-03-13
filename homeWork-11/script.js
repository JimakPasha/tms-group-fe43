"use strict"

// task 1
const task1 = document.querySelector('.task1'); // находим элемент

task1.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn1')){  // если элмент, на который мы кликаем, содержит бтн, то
        alert ('Hello, i am button!');
    }
});

// task 2
const btn2 = document.querySelector('.btn2');

btn2.addEventListener('contextmenu', () => { 
    alert ('Это event contextmenu!!!'); 
});

// task 3
const btn3 = document.getElementById('btn3');

btn3.addEventListener('click', () => { 
    btn3.classList.toggle('red'); 
});

// task 4
const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('item')){  
        event.target.classList.toggle('blue'); 
    }
});

// task 5
const clicks = document.querySelector('.clicks');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');

btn4.addEventListener('click', () =>{
    clicks.innerHTML++;
});
//самодеятельность
btn5.addEventListener('click', () =>{
    clicks.innerHTML--;
});

