const root = document.getElementById("root");
Object.assign(root.style, {
  width: "300px",
  gap: "10px",
  margin: "auto",
  display: "flex",
  "flex-direction": "column",
});
const formaName = createElement("input", {
  type: "text",
  className: "root__name-input",
  placeholder: "Введите имя",
});
const formaSurname = createElement("input", {
  type: "text",
  className: "root__surname-input",
  placeholder: "Введите фамилию",
});
const formaAge = createElement("input", {
  type: "number",
  className: "root__age-input",
  placeholder: "Введите возраст",
});
const submitButton = createElement("button", {
  type: "submit",
  className: "root__create-button",
  innerText: "Создать",
});
const clearButton = createElement("button", {
  type: "reset",
  className: "root__clear-button",
  innerText: "Отчистить форму",
});
const list = createElement("ul", { className: "root__list" });

let usersArray = [];
if (localStorage.getItem("users")) {
  usersArray = JSON.parse(localStorage.getItem("users"));
  usersArray.forEach((item) => {
    const listItem = createElement("li", {
      innerText: `Пользователь: ${item.name} ${item.surname} , ${item.age} лет`,
    });
    list.insertAdjacentElement("beforeend", listItem);
  });
}

function createElement(tagName, options) {
  return Object.assign(document.createElement(tagName), options);
}

function addSameEvent(items, event, func) {
  for (const item of items) {
    item.addEventListener(event, func);
  }
}

function isEmpty() {
  if (
    formaName.value === "" ||
    formaSurname.value === "" ||
    formaAge.value === "" ||
    formaAge.value < 18
  ) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

function createUser() {
  if (
    formaName.value === "" ||
    formaSurname.value === "" ||
    formaAge.value === "" ||
    formaAge.value < 18
  ) {
    submitButton.disabled = true;
    return;
  }
  const user = {
    name: formaName.value,
    surname: formaSurname.value,
    age: formaAge.value,
  };
  usersArray.push(user);
  localStorage.setItem("users", JSON.stringify(usersArray));
  const listItem = createElement("li", {
    innerText: `Пользователь: ${formaName.value} ${formaSurname.value} , ${formaAge.value} лет`,
  });
  list.insertAdjacentElement("beforeend", listItem);
  formaName.value = "";
  formaSurname.value = "";
  formaAge.value = "";
}

function clearList() {
  console.log(list);
  for (let i = list.childElementCount; i > 0; i--) {
    list.children[0].remove();
    localStorage.removeItem("users");
  }
}

root.append(formaName, formaSurname, formaAge, submitButton, clearButton, list);

submitButton.addEventListener("click", createUser);
clearButton.addEventListener("click", clearList);
addSameEvent([formaName, formaSurname, formaAge], "input", isEmpty);
