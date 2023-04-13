import { createElement } from "./createElement.js";

export const correctTodo = (element) => {
  const target = element.target;
  if (target.className !== "root__text") return;

  const input = createElement("input", {
    className: "root__input",
    type: "text",
    placeholder: "Enter todo text ...",
    value: target.textContent,
  });

  target.insertAdjacentElement("afterend", input);
  target.remove();
  input.focus();

  const backToSpan = () => {
    if (input.value === "") {
      input.value = "Emty todo";
    }
    target.textContent = input.value;
    input.insertAdjacentElement("afterend", target);
    input.remove();

    const date = new Date();
    target.parentElement.lastChild.lastChild.textContent =
      date.toLocaleString();

    let todosArray = [];
    if (localStorage.getItem("todoItems")) {
      todosArray = JSON.parse(localStorage.getItem("todoItems"));
    }
    const item = todosArray.filter((item) => {
      return item.todoId === target.parentElement.id;
    })[0];

    Object.assign(item, {
      todoValue: target.textContent,
      todoDate: date.toLocaleString(),
    });

    localStorage.setItem("todoItems", JSON.stringify(todosArray));
  };

  const backToSpanAtKey = (e) => {
    if (e.keyCode !== 13) return;
    backToSpan();
  };

  input.addEventListener("blur", backToSpan);
  input.addEventListener("keydown", backToSpanAtKey);
};
