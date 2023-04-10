import { completedCount, totalCount } from "./counts.js";
import { toDoBody, todosArray } from "./elements.js";

export const todoDeleteLast = () => {
    toDoBody.children[toDoBody.childElementCount - 1].remove();
    todosArray.pop();
    localStorage.setItem("todoItems", JSON.stringify(todosArray));
    totalCount();
    completedCount();
  };