//task 2

const btn2 = document.querySelector('.task2');
btn2.addEventListener('contextmenu', (e) => {
    alert( 'Это event contextmenu!!!' );
});

//task 3
const task3 = document.querySelector('.task3');
task3.addEventListener('click', (event) => {
     if(event.target.classList.contains('.task3')) {
        event.target.classList.toggle('black'); 
    };
});


//task 4

const task4 = document.querySelector('.task4');
task3.addEventListener('click', (event) =>
{ if(event.target.classList.contains('.block'))
{
    event.target.classList.toggle('black')
};

});

//task 5
const task5 = document.querySelector('.task5')
const btn5 = document.querySelector('.btn5');
 btn5.addEventListener('click', (e) =>
 { task5.innerHTML++;

 });