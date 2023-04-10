import { completedCount, totalCount } from "./counts.js";
import {
  listDate,
  listText,
  listWrapper,
  toDoBody,
} from "./elements.js";

export function lsCheck() {
  if (localStorage.getItem("todoItems")) {
    let todosArray = JSON.parse(localStorage.getItem("todoItems"));
    for (const todo of todosArray) {
      listText.innerText = todo.todoValue;
      listDate.innerText = todo.todoDate;
      listWrapper.id = todo.todoId;
      if (todo.todoComplete) {
        listWrapper.classList.add("complete");
        listWrapper.firstChild.checked = todo.todoComplete;
      } else {
        listWrapper.classList.remove("complete");
        listWrapper.firstChild.checked = todo.todoComplete;
      }
      const listWrapperClone = listWrapper.cloneNode(true);
      toDoBody.append(listWrapperClone);
    }
    totalCount();
    completedCount();
  }
}
