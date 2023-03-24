export function count({
  startCountButton: start,
  stopCountButton: stop,
  countTarget: target,
  seconds,
  isStart,
}) {
  let timer;
  let counter = 1;
  start.addEventListener("click", () => {
    if (isStart) return;
    timer = setInterval(() => {
      target.textContent = `${addSecconds(counter++)} sec`;
    }, seconds * 1000);
    isStart = true;
  });
  stop.addEventListener("click", () => {
    clearInterval(timer);
    isStart = false;
  });
}
function addSecconds(num) {
  return num < 10 ? `0${num}` : num;
}
