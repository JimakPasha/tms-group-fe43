//Функция для создания времени
export function getDateNow(){
    let showTime;
    const time = new Date();
    const hours = time.getHours()
    const minuts = time.getMinutes()<10?'0'+time.getMinutes():time.getMinutes()
    const seconds = time.getSeconds()<10?'0'+time.getSeconds():time.getSeconds()
    showTime = `${hours}.${minuts}.${seconds}`
    return showTime
}