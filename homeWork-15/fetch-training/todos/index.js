const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
const todoBoddy = document.getElementsByClassName("todo__boddy")[0];
const todosArray = [];

function getTodos(url) {
  return new Promise((resolve, reject) => {
    fetch(url).then((response) => {
      response.ok ? resolve(response.json()) : reject(new Error("Error"));
    });
  });
}

function printTodos(callback, target) {
  callback.then((todos) => {
    todos.forEach(({ id, title }) => {
      const listItem = document.createElement("li");
      listItem.className = "todo__item";
      listItem.textContent = `${id}. ${title}`;
      target.insertAdjacentElement("beforeend", listItem);
    });
  });
}

printTodos(getTodos(TODOS_URL), todoBoddy);
