let TODO_DATA = [
    {
      title: "Todo #1",
      id: 1,
      date: new Date().toDateString(),
      completed: false,
    },
    {
      title: "Todo #2",
      id: 2,
      date: new Date().toDateString(),
      completed: false,
    },
    {
      title: "Todo #3",
      id: 3,
      date: new Date().toDateString(),
      completed: false,
    },
  ];
  
  function createElement(tagName, options) {
    const element = Object.assign(document.createElement(tagName), options);
    return element;
  }
  
  function createIcon(className) {
    const element = createElement("i", { className: "fa-solid" });
    element.classList.add(className);
  
    return element;
  }
  
  const root = document.getElementById('root');

  const article = createElement("article", {className: "todo-list"});
  root.insertAdjacentElement("beforeend", article);

  const header = createElement("header", {className: "todo-list-header"});
  article.insertAdjacentElement("beforeend", header);

  const button = createElement("button", {className: "delete-button",  id: "reset-list", textContent: "Delete All" });
  header.insertAdjacentElement("beforeend", button);

  const form = createElement("form", {className: "todo-list-form"});
  header.insertAdjacentElement("beforeend", form);

  const label = createElement("label", {for: "todo-name"});
  form.insertAdjacentElement("beforeend", label);

  const input = createElement("input", {type: "text", id: "todo-name", className: "todo-list-control", placeholder: "Enter todo ..." });
  label.insertAdjacentElement("beforeend", input);

  const toDoButton = createElement("button", {className: "todo-list-button", id: "add-todo", textContent: "Add"});
  header.insertAdjacentElement("beforeend", toDoButton);

  form.insertAdjacentElement("beforeend", toDoButton);

  const section = createElement("section", {className: "todo-list-content"});
  article.insertAdjacentElement("beforeend", section);




  function createToDoItems(todo){
    const toDoArticle = createElement("article", {className: "todo", id: "item-" + todo.id,});
  section.insertAdjacentElement("beforeend", toDoArticle);

  const toDoDiv = createElement("div", {className: "todo-part"});
  toDoArticle.insertAdjacentElement("beforeend", toDoDiv);

  const toDoDiv1 = createElement("div", {className: "todo-part"});
  toDoArticle.insertAdjacentElement("beforeend", toDoDiv1);

  const toCompleteButton = createElement("button", {className: "todo-button"});
  toCompleteButton.setAttribute("data-action", "complete");
  toDoDiv.insertAdjacentElement("beforeend", toCompleteButton);

  const toCompleteButtonIcon = createIcon("fa-check");
  toCompleteButton.insertAdjacentElement("beforeend", toCompleteButtonIcon);

  const toCompleteText = createElement("h2", {className: "todo-title", textContent: todo.title + " " + todo.completed});
  toDoDiv.insertAdjacentElement("beforeend", toCompleteText);

  const toDeleteButton = createElement("button", {className: "todo-button"});
  toDeleteButton.setAttribute("data-action", "delete");
  toDoDiv1.insertAdjacentElement("beforeend", toDeleteButton);

  const toDeleteButtonIcon = createIcon("fa-xmark");
  toDeleteButton.insertAdjacentElement("beforeend", toDeleteButtonIcon);

  const date = createElement("span", {className: "todo-date", textContent: todo.date});
  toDoDiv1.insertAdjacentElement("beforeend", date);

  return toDoArticle;
  };

 
 
  function renderToDos(){
    section.innerHTML = '';

    TODO_DATA.forEach((toDoItem) => {
      const todoItemElement = createToDoItems(toDoItem);
      todoItemElement.addEventListener("click", onItemClick);
      section.insertAdjacentElement("beforeend", todoItemElement);
    }) 
  }

  renderToDos();

 
function onItemClick(event){
    const target = event.target;
    const parent = target.parentElement;

    if(parent.tagName.toLowerCase() !== "button" && parent.tagName.toLowerCase() !== "button"){
      return;
    }

    if(parent.tagName.toLowerCase() === "button" && parent.dataset.action === "delete"){
      const todoItemId = parent.parentElement.parentElement.id.split('-')[1];

      TODO_DATA = TODO_DATA.filter(item => +item.id !== +todoItemId);

      renderToDos();

      return;
    }
    if(parent.tagName.toLowerCase() === "button" && target.dataset.action === "delete"){
      const todoItemId = parent.parentElement.parentElement.id.split('-')[1];

      TODO_DATA = TODO_DATA.filter(item => +item.id !== +todoItemId);

      renderToDos();

      return;
    }

    if(parent.tagName.toLowerCase() === "button" && parent.dataset.action === "complete"){
      const todoItemId = parent.parentElement.parentElement.id.split('-')[1];

      TODO_DATA = TODO_DATA.map(item => {
        if(item.id === +todoItemId){
          return {
            ...item,
            completed: true,
          }
        }

        return {
          ...item,
          }
      });

      renderToDos();

      return;
    }

    if(parent.tagName.toLowerCase() === "button" && target.dataset.action === "complete"){
      const todoItemId = parent.parentElement.parentElement.id.split('-')[1];

      TODO_DATA = TODO_DATA.map(item => {
        if(item.id === +todoItemId){
          return {
            ...item,
            completed: true,
          }
        }

        return {
          ...item,
          }
      });
      renderToDos();

      return;
    }
  }


  form.addEventListener("submit", onSubmitButton);
  button.addEventListener("click", resetToDoList);

  function onSubmitButton(event){
    event.preventDefault();

    const form = event.target;

    const input = form[0];

    if (!input.value) {
      alert("Название todo-шки не может быть пустым");
  
      return;
    }
  
    const randomId = Math.floor(Math.random() * 1024);
    const todoItem = {
      title: input.value,
      date: new Date().toDateString(),
      id: randomId,
      completed: false,
    };
  
    TODO_DATA = [todoItem, ...TODO_DATA];
  
    renderToDos();
  
    input.value = null;
  }

  function resetToDoList(){
    TODO_DATA = [];

    renderToDos();
  }

    
    
  

  

  
  


  