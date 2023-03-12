const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addTask);

function addTask(event) {
  event.preventDefault();
  const newTask = document.createElement("li");
  const taskText = document.createTextNode(todoInput.value);
  const taskDate = document.createTextNode(new Date().toLocaleDateString());
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add("delete-button");
  if (todoInput.value <= 0 || todoInput.value.length >= 20) {
    alert("empty string");
    return;
  }
  
  deleteButton.addEventListener("click", deleteTask);
  newTask.appendChild(taskText);
  newTask.appendChild(document.createElement("br"));
  newTask.appendChild(taskDate);
  newTask.appendChild(deleteButton);
  todoList.appendChild(newTask);
  todoInput.value = "";
}

// Delete
function deleteTask(event) {
  event.target.parentNode.remove();
}
