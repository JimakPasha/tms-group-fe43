import { completeTodoForLS } from "./completeTodoForLS.js";
import { completedCount } from "./counts.js";

export const completeTodo = (element) => {
  const target = element.target;
  if (!target.className.includes("root__wrapper")) return;
  const todoChecked = target.querySelector(".root__check-box");
  target.classList.toggle("complete");
  if (target.className.includes("complete")) {
    todoChecked.checked = true;
  } else {
    todoChecked.checked = false;
  }
  completeTodoForLS("todoItems", target.id);
  completedCount();
};
