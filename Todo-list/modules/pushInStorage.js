export const pushInStorage = (item, keyName) => {
  let todosArray = [];
  if (localStorage.getItem("todoItems")) {
    todosArray = JSON.parse(localStorage.getItem("todoItems"));
  }
  todosArray.unshift(item);
  localStorage.setItem(keyName, JSON.stringify(todosArray));
};
