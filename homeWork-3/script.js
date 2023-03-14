const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const ageInput = document.getElementById("age");
const createBtn = document.getElementById("create-btn");
const clearBtn = document.getElementById("clear-btn");
const list = document.getElementById("list");


//функция создания листа
function createListItem(firstName, lastName, age) {
  const li = document.createElement("li");
  li.textContent = `Пользователь: ${firstName} ${lastName}, ${age} лет`;
  list.appendChild(li);
}


//функция очистки полей
function clearForm() {
  firstNameInput.value = "";
  lastNameInput.value = "";
  ageInput.value = "";
  createBtn.disabled = true;
}

//загрузка даты
function loadSavedData() {
  const savedData = JSON.parse(localStorage.getItem("savedData"));
  if (savedData) {
    savedData.forEach(({ firstName, lastName, age }) => {
      createListItem(firstName, lastName, age);
    });
  }
}

//сохранение даты
function saveData(firstName, lastName, age) {
  const savedData = JSON.parse(localStorage.getItem("savedData")) || [];
  savedData.push({ firstName, lastName, age });
  localStorage.setItem("savedData", JSON.stringify(savedData));
}

loadSavedData();


ageInput.addEventListener("input", () => {
  const age = ageInput.value;
  createBtn.disabled = age < 18;
});

//события и функции на кнопку добавить
createBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const age = ageInput.value;
  if (firstNameInput.value === "") {
    alert("Вы забыли ввести имя!");
    return;
  } else if (lastNameInput.value === "") {
    alert("Вы забыли ввести фамилию!");
    return;
  }

  createListItem(firstName, lastName, age);

  saveData(firstName, lastName, age);

  clearForm();
});


clearBtn.addEventListener("click", clearForm);
