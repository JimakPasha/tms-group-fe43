const firstNameForm = document.getElementById("first-name");
const surnameForm = document.getElementById("surname");
const ageForm = document.getElementById("age");
const createBtn = document.getElementById("create-btn");
const clearBtn = document.getElementById("clear-btn");
const list = document.getElementById("list");

// функция создания списка пользователя
function createListPerson(firstName, surname, age) {
  const li = document.createElement("li");
  li.textContent = `Пользователь: ${firstName} ${surname}, ${age} лет`;
  list.appendChild(li);
}

// проверка на возраст
ageForm.addEventListener("input", () => {
  const ageUser = ageForm.value;
  createBtn.disabled = ageUser < 18;
});

// достаем данные при перезагрузке
let listArr = [];
if (localStorage.getItem("listArr")) {
  listArr = JSON.parse(localStorage.getItem("listArr"));
  listArr.forEach(({ firstName, surname, age }) => {
    createListPerson(firstName, surname, age);
  });
}

// функция очищения формы
function clearForm() {
  firstNameForm.value = "";
  surnameForm.value = "";
  ageForm.value = "";
  createBtn.disabled = true;
  changeBackground();
}

// навешивание событий/функций/сетаем в localStorage

createBtn.addEventListener("click", () => {
  const firstName = firstNameForm.value;
  const surname = surnameForm.value;
  const age = ageForm.value;
  listArr.push({ firstName, surname, age });
  localStorage.setItem("listArr", JSON.stringify(listArr));

  createListPerson(firstName, surname, age);

  changeBackground();

  clearForm();
});

// навешивание событий на кнопку очистить форму
clearBtn.addEventListener("click", clearForm);

// функция изменения цвета кнопки при заполнении полей
firstNameForm.addEventListener("input", changeBackground);
surnameForm.addEventListener("input", changeBackground);
ageForm.addEventListener("input", changeBackground);

function changeBackground() {
  if (
    firstNameForm.value !== "" &&
    surnameForm.value !== "" &&
    ageForm.value >= 18
  ) {
    document.querySelector(".create-btn").style.background = "green";
  } else {
    document.querySelector(".create-btn").style.background = "gray";
  }
}
