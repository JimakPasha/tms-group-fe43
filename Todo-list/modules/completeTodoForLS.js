export function completeTodoForLS(keyName, id) {
  const items = JSON.parse(localStorage.getItem(keyName));
  const todoItems = document.getElementsByClassName("root__wrapper");
  const completeItem = items.filter((item) => {
    return item.todoId === id;
  })[0];
  const index = items.indexOf(completeItem);
  if (todoItems[index].className.includes("complete")) {
    items[index].todoComplete = true;
  } else {
    items[index].todoComplete = false;
  }
  localStorage.setItem("todoItems", JSON.stringify(items));
}
