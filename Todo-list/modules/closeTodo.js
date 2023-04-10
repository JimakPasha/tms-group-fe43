import { completedCount, totalCount } from "./counts.js";
import { removeItemFromStorage } from "./removeItemFromStorage.js";

export const closeTodo = (elem) => {
  if (elem.target.className !== "root__button") return;
  const elemId = elem.target.parentElement.parentElement.id;
  removeItemFromStorage("todoItems", elemId);
  elem.target.parentElement.parentElement.remove();
  completedCount();
  totalCount();
};
