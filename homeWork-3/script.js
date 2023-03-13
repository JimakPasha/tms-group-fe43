const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const ageInput = document.getElementById("age");
const createBtn = document.getElementById("create-btn");
const clearBtn = document.getElementById("clear-btn");
const list = document.getElementById("list");

function createListItem(firstName, lastName, age) {
  const li = document.createElement("li");
  li.textContent = `${firstName} ${lastName}, ${age} лет`;
  list.appendChild(li);
}

function clearForm() {
  firstNameInput.value = "";
  lastNameInput.value = "";
  ageInput.value = "";
  createBtn.disabled = true;
}

// firstNameInput.addEventListener('input', () => {
//   createBtn.disabled = ageInput.value < 18;
// });

// lastNameInput.addEventListener('input', () => {
//   createBtn.disabled = ageInput.value < 18;
// });

ageInput.addEventListener("input", () => {
  const age = ageInput.value;
  createBtn.disabled = age < 18;
});

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

  clearForm();
});

clearBtn.addEventListener("click", clearForm);
