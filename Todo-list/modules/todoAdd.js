import {
  listDate,
  listText,
  listWrapper,
  toDoBody,
  todosArray,
  topInput,
} from "./elements.js";
import { totalCount } from "./counts.js";
import { pushInStorage } from "./pushInStorage.js";

export const todoAdd = () => {
  if (topInput.value === "") {
    topInput.focus();
  } else {
    topInput.value === ""
      ? (listText.innerText = "ToDo Text")
      : (listText.innerText = `${topInput.value}`);
    const date = new Date().toLocaleString();
    const newId =
      Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2);
    const todoItemForStorage = {
      todoValue: topInput.value,
      todoComplete: false,
      todoDate: date,
      todoId: newId,
    };

    pushInStorage(todoItemForStorage, "todoItems", todosArray);
    listDate.innerText = date;
    const listWrapperClone = listWrapper.cloneNode(true);
    listWrapperClone.id = newId;
    toDoBody.insertAdjacentElement("afterbegin", listWrapperClone);
    topInput.value = "";
    totalCount();
  }
};

export const todoAddAtKey = (e) => {
  if (e.keyCode !== 13) return;
  todoAdd();
};
