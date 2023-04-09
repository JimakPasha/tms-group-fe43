export function removeItemFromStorage(keyName, id) {
  const items = JSON.parse(localStorage.getItem(keyName));
  const removebleItem = items.find((item) => {
    return item.todoId === id;
  });
  items.splice(items.indexOf(removebleItem), 1);
  todosArray.splice(items.indexOf(removebleItem), 1);
  localStorage.setItem("todoItems", JSON.stringify(items));
}
