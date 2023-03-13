// задание 2
const btn = document.querySelector('.btn-4');

btn.addEventListener('contextmenu', () => {
    alert('Это event contextmenu!!!');
});

//задания 3

const btnPoint = document.querySelector('.btn-5');

btnPoint.addEventListener('click', (e) => {
    if (e.target.classList.contains("btn-5")) {
        e.target.classList.toggle("red")
    }
});

//задание  4
const blocks = document.querySelector('.conteyner');

blocks.addEventListener('click', (event) => {
  if (event.target.classList.contains('block')) {
      event.target.classList.toggle('black');
  }
});

//задание 5

const addpluss = document.querySelector('.addplus');
const btnPush = document.querySelector('.btn-6');

btnPush.addEventListener('click', () => {
    addpluss.innerHTML++;
}); 
