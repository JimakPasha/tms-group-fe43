const buttons = document.querySelectorAll('.btn-1');

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        alert('Hello, i am button!');
    })
}

const rightButton = document.querySelector('.btn-2');

rightButton.addEventListener('contextmenu', function(){
    alert('Это event contextmenu!!!');
})

const toggleButton = document.querySelector('.btn-3');

toggleButton.addEventListener('click', function(event){
    event.target.classList.toggle('active');
})

const squareField = document.querySelector('.task-4');

squareField.addEventListener('click', (event) => {
    if(event.target.classList.contains('item'))
{
    event.target.classList.toggle('active');
}
});


const number = document.querySelector('.task-5');
const increaseButton = document.querySelector('.btn-5');


increaseButton.addEventListener('click', function(){
    number.innerHTML++;
})