// #### Task 1
const button = document.querySelectorAll(".btn");
for (let i = 0; i < button.length; i++) {
  button[i].onclick = function () {
    alert("Hello, i am button!");
  };
}

//#### Task 2 💻
const button1 = document.querySelector(".btn-1");
button1.oncontextmenu = function () {
  alert("Это event contextmenu!!!");
};

//#### Task 3 💻
const button2 = document.querySelector(".btn-2");
button2.addEventListener("click", (event) => {
  event.target.classList.toggle("change-color");
});

//#### Task 4 💻
const wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("click", (event) => {
  if (event.target.classList.contains("item")) {
    event.target.classList.toggle("change-color");
  }
});

//#### Task 5 💻

const count = document.querySelector(".count");
const plus = document.querySelector(".btn-3");

plus.addEventListener("click", function () {
  count.innerHTML++;
});
