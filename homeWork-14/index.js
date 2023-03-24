const timer = document.querySelector('.timer');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');

let seconds = 0;
let time;
let isStarted = false;

startBtn.addEventListener('click', () => {
    startTimer();
    isStarted = true;
});

stopBtn.addEventListener('click', () => {
    clearInterval(time);
    isStarted = false;
})

function startTimer (){
    if(!isStarted){
        time = setInterval(() => {
            seconds++;
            timer.innerHTML = showTime(); 
        },1000)
    }
}

const showZero = (number) => number < 10 ? `0${number}` : number;


function showTime(){
    return `${showZero(seconds)}sec`
}

