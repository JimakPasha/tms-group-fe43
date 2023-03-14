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
  margin: "auto",
  width: "max-content",
};
Object.assign(root.style, center, {
  "flex-direction": "column",
  display: "flex",
  gap: "5px",
});

const list = createElement("ul", { className: "root__list" });
const inputs = ["name", "surname", "age"];
const buttons = ["submit", "reset"];
for (const inputName of inputs) {
  const input = createElement("input", {
    placeholder: `введитве ваше ${inputName}`,
    className: `form__${inputName}`,
    type: inputName === "age" ? "number" : "text",
    name: inputName,
  });
  console.log(input);
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
      const listItem = createElement("li", { className: "list-item" });
      const inputValues = inputs.map((item) => {
        item.value !== "" || item.value >= 18;
        return item.value;
      });
      listItem.innerText = `Пользователь: ${inputValues[0]} ${inputValues[1]}, ${inputValues[2]} лет`;
      for (const inp of inputs) {
        if (inp.value === "" || inp.value < 18) return;
        list.insertAdjacentElement("beforeend", listItem);
        inp.value = "";
      }
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
      console.log(list);
      for (let i = list.childElementCount; i > 0; i--) {
        list.children[0].remove();
      }
    });
  }
  root.insertAdjacentElement("beforeend", button);
}
root.insertAdjacentElement("beforeend", list);
