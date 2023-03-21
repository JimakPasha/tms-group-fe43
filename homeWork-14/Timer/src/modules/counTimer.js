let counter = 0;
let timer;
export function count({
  startCountButton: start,
  stopCountButton: stop,
  countTarget: target,
  seconds,
}) {
  start.addEventListener("click", () => {
    timer = setInterval(() => {
      target.textContent = counter++;
    }, seconds * 1000);
  });
  stop.addEventListener("click", () => {
    clearInterval(timer);
  });
}
