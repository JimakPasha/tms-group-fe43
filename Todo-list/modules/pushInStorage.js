import { todosArray } from "./elements.js";

export const pushInStorage = (item, keyName, keyValue) => {
  todosArray.unshift(item);
  localStorage.setItem(keyName, JSON.stringify(keyValue));
};
