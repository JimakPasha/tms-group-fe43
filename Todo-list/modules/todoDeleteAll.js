import { completedCount, totalCount } from "./counts.js";
import { toDoBody } from "./elements.js";

export const todoDeleteAll = () => {
  for (let i = toDoBody.childElementCount; i > 0; i--) {
    toDoBody.children[0].remove();
  }
  localStorage.removeItem("todoItems");

  totalCount();
  completedCount();
};
