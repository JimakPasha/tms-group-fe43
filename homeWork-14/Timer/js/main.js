const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const timer = document.querySelector('.timer');

let saveTime = 0
function includeTimer(){
    const showTime = Date.now();
    let realTime;
    const goSeconds = setInterval(()=>{
       let goingTime = Number(((Date.now() - showTime)/1000 + saveTime).toFixed(2));
       realTime = goingTime;
       timer.textContent = `${realTime.toString().split('').reverse().join('').indexOf('.')===2?realTime:realTime+'0'} sec`;
    },10);
    function stopSeconds(){
        saveTime = 0;
        start.addEventListener('click',includeTimer)
        clearInterval(goSeconds);
        saveTime = realTime;
    }
    stop.addEventListener('click',stopSeconds)
    start.removeEventListener('click',includeTimer)
}

start.addEventListener('click',includeTimer)








