export function timeAlert() {
  const timeBtn = document.getElementsByClassName("time-Alert")[0];
  timeBtn.addEventListener("click", () => {
    const date = new Date();
    alert(date.toDateString());
  });
}
