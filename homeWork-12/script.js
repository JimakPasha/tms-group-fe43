function createElement(tagName, options) {
  return Object.assign(document.createElement(tagName), options);
}
function stopLetterInput(element, type, event) {
  if (type === "number") {
    if (
      (event.keyCode >= 59 && event.keyCode <= 61) ||
      (event.keyCode >= 65 && event.keyCode <= 90) ||
      (event.keyCode >= 106 && event.keyCode <= 111) ||
      (event.keyCode >= 186 && event.keyCode <= 222) ||
      event.keyCode === 173
    ) {
      Object.assign(element, { readOnly: true });
    } else {
      Object.assign(element, { readOnly: false });
    }
  } else if (type === "text") {
    if (
      (event.keyCode >= 48 && event.keyCode <= 57) ||
      (event.keyCode >= 59 && event.keyCode <= 61) ||
      (event.keyCode >= 106 && event.keyCode <= 111) ||
      (event.keyCode >= 186 && event.keyCode <= 222) ||
      event.keyCode === 173 
    ) {
      Object.assign(element, { readOnly: true });
    } else {
      Object.assign(element, { readOnly: false });
    }
  }
}

const root = document.getElementById("root");
const center = {
  margin: " auto",
  width: "max-content",
};
Object.assign(root.style, center, {
  "flex-direction": "column",
  display: "flex",
  gap: "5px",
});

const list = createElement("ul", { className: "root__list" });

let usersArray = [];
if (localStorage.getItem("users")) {
  usersArray = JSON.parse(localStorage.getItem("users"));
  usersArray.forEach((item) => {
    const elem = createElement("li", { className: "list-item" });
    elem.innerText = `Пользователь ${item.name} ${item.surname}, ${item.age} лет`;
    list.insertAdjacentElement("beforeend", elem);
  });
}

const inputs = ["name", "surname", "age"];
const buttons = ["submit", "reset"];

for (const inputName of inputs) {
  const input = createElement("input", {
    placeholder: `введитве ваше ${inputName}`,
    className: `form__${inputName}`,
    type: inputName === "age" ? "number" : "text",
    name: inputName,
    max: inputName === "age" ? "2" : "",
  });
  input.addEventListener("keydown", (e) => {
    stopLetterInput(input, input.type, e);
  });
  root.insertAdjacentElement("beforeend", input);
}

for (const btn of buttons) {
  const button = createElement("button", {
    className: `form__${btn}`,
    type: btn,
    innerText:
      (btn === "submit" ? "Создать" : "") ||
      (btn === "reset" ? "Очистить форму" : ""),
  });

  if (button.type === "submit") {
    function addItem() {
      const inputs = Array.from(root.getElementsByTagName("input"));
      if (
        inputs.some((item) => {
          return item.value === "";
        }) ||
        inputs[2].value < 18
      )
        return;
      const user = {};
      for (const inp of inputs) {
        Object.assign(user, {
          [inp.name]: inp.value,
        });
      }

      usersArray.push(user);
      const listItem = createElement("li", { className: "list-item" });
      listItem.innerText = `Пользователь: ${user.name} ${user.surname}, ${user.age} лет`;

      for (const inp of inputs) {
        list.insertAdjacentElement("beforeend", listItem);
        inp.value = "";
      }

      localStorage.setItem("users", JSON.stringify(usersArray));
    }

    function addItemAtKey(e) {
      if (e.keyCode !== 13) return;
      addItem();
    }

    button.addEventListener("click", addItem);
    root.addEventListener("keydown", addItemAtKey);
  }
  
  if (button.type === "reset") {
    button.addEventListener("click", () => {
      const list = root.getElementsByClassName("root__list")[0];
      for (let i = list.childElementCount; i > 0; i--) {
        list.children[0].remove();
        localStorage.removeItem('users')
      }
    });
  }
  root.insertAdjacentElement("beforeend", button);
}
root.insertAdjacentElement("beforeend", list);
