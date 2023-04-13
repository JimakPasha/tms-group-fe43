import { completedCount, totalCount } from "./counts.js";
import { toDoBody } from "./elements.js";

export const todoDeleteLast = () => {
  let todosArray = [];
  if (localStorage.getItem("todoItems")) {
    todosArray = JSON.parse(localStorage.getItem("todoItems"));
  }
  toDoBody.children[toDoBody.childElementCount - 1].remove();
  todosArray.pop();
  localStorage.setItem("todoItems", JSON.stringify(todosArray));
  totalCount();
  completedCount();
};
