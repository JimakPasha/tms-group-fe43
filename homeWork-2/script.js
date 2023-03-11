const rightClickButton = document.getElementById("right_click_button");
rightClickButton.addEventListener("contextmenu", () => {
  alert("Это event contextmenu!!!");
});

const toggleButton = document.getElementById("toggle-button");
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
});

let count = 0;
const clickButton = document.getElementById("clickButton");
const clickCount = document.getElementById("clickCount");

clickButton.addEventListener("click", function () {
  count++;
  clickCount.textContent = count;
});

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.style.backgroundColor = getRandomColor();
  });
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
