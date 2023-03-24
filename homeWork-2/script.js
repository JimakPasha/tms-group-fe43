'use strict';
//task 1
const btn1 = document.querySelector('.btn1');
btn1.onclick = function () {
    alert('Hello, i am button!');
}

const btn2 = document.querySelector('.btn2');
btn2.onclick = function () {
    alert('Hello, i am button!');
}

const btn3 = document.querySelector('.btn3');
btn3.onclick = function () {
    alert('Hello, i am button!');
}

//task 2
const btn4 = document.querySelector('.btn4');
btn4.addEventListener('contextmenu', (event) => {
    alert('Это event contextmenu!!!')
    console.log(event.target);
} )

//task 3
const btn5 = document.getElementById('myButton');

btn5.onclick = function() {
    if (btn5.style.backgroundColor === "red") {
        btn5.style.backgroundColor = "white";
        btn5.style.color = "black";
        console.log(btn5);
    
    } 
    else {
        btn5.style.backgroundColor = "red";
        btn5.style.color = "white";
        console.log(btn5);
    }
};

//task 4

const wrapper = document.querySelector('.wrapper');
wrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('item')) {
        event.target.classList.toggle('black');
    }
});

//task 5 
const wrap = document.querySelector('.wrap');
const btn6 = document.querySelector('.btn6');
let result = 0;
btn6.onclick = function () {
result += 1;
wrap.innerHTML = `${result}`; 
};


