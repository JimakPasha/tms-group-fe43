const numberTimer = document.querySelector('.timerNumber');
const startTimer = document.querySelector('.startTimer');
const stopTimer = document.querySelector('.stopTimer');


let startNum = 0;
startTimer.addEventListener('click', () =>{
    const timer = setInterval(() => {
        startNum++;
        numberTimer.innerHTML = `${startNum} sec`;
       
},1000);
  stopTimer.addEventListener('click', () => {
      clearInterval (timer);})

},1000 );
  