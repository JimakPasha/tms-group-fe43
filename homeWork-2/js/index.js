const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', () => {
    alert('Hello, I am button!');
});
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
    alert('Hello, I am button!');
});
const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => {
    alert('Hello, I am button!');
});
const btn4 = document.getElementById('btn4');
btn4.addEventListener('contextmenu', () => {
    alert('Это event contextmenu!!!');
});
const btn5 = document.getElementById('btn5');
btn5.addEventListener('click', () => {
    if (btn5.style.backgroundColor === 'red') {
        btn5.style.backgroundColor = 'white';
    } else {
        btn5.style.backgroundColor = 'red';
    }
});
// const box = document.querySelectorAll('.box');
// for (let i = 0; i < box.length; i++) {
//     box[i].addEventListener('click', () => {
//         box[i].classList.toggle('black');
//     });
// };

const boxes = document.querySelector('.boxes');
boxes.addEventListener('click', (e) => {
    if (e.target.classList.contains('box')) {
        e.target.classList.toggle('black');
    };
});

const counter = document.getElementById('counter');
const increment = document.getElementById('increment');
increment.addEventListener('click', () => {
    let value = parseInt(counter.innerHTML);
    value += 1;
    counter.innerHTML = value;
});