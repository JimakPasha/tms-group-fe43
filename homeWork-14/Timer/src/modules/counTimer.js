export function count({
  startCountButton: start,
  stopCountButton: stop,
  countTarget: target,
  seconds,
}) {
  let timer;
  let counter = 0;
  start.addEventListener("click", () => {
    timer = setInterval(() => {
      target.textContent = counter++;
    }, seconds * 1000);
  });
  stop.addEventListener("click", () => {
    clearInterval(timer);
  });
}
