const userList = document.getElementById("userList");
const createButton = document.getElementById("createButton");
const clearButton = document.getElementById("clearButton");

const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
savedUsers.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = user;
    userList.appendChild(li);
});

const ageInput = document.getElementById('age');

ageInput.addEventListener('input', () => {
    if (ageInput.checkValidity() && ageInput.value >= 18) {
        createButton.removeAttribute('disabled');
    } else {
        createButton.setAttribute('disabled', '');
    }
});

createButton.addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const age = document.getElementById("age").value.trim();

    const user = `Пользователь: ${name} ${surname}, ${age} лет`;
    const li = document.createElement("li");
    li.textContent = user;
    userList.appendChild(li);

    const users = [...savedUsers, user];
    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("age").value = "";
    createButton.setAttribute('disabled', '');
});

clearButton.addEventListener("click", () => {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("age").value = "";
    createButton.setAttribute('disabled', '');
});
