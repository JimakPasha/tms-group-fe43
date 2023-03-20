const listButton = createElement("button", {
  className: "root__button",
  textContent: "X",
  type: "submit",
});
const toDoBody = createElement("section", {
  className: "root__body",
  id: "todoBody",
});
const listText = createElement("span", {
  className: "root__text",
  textContent: "Todo Text",
});
const topInput = createElement("input", {
  className: "root__input",
  placeholder: "Enter todo ...",
});
const listCB = createElement("input", {
  className: "root__check-box",
  type: "checkbox",
});
const headerRowTop = createElement("section", {
  className: "root__header-row",
});
const listWrapper = createElement("article", { className: "root__wrapper" });
const listBox = createElement("div", { className: "root__item-right-bar" });
const toDoHeader = createElement("header", { className: "root__header" });
const listDate = createElement("span", { className: "root__date" });
const root = document.getElementById("root");
const listCount = createElement("span");

let completeCount = 0;
let allCount = 2;
const date = new Date();
let todosArray = [];

const listCountCompleted = listCount.cloneNode(true);
const listCountAll = listCount.cloneNode(true);
const bottomInput = topInput.cloneNode(true);

listCountCompleted.classList = "root__count-completed";
listCountAll.classList = "root__count-all";

const bottomButtonShowCompleted = listButton.cloneNode(true);
const bottomButtonShowAll = listButton.cloneNode(true);
const topButtonDeleteLast = listButton.cloneNode(true);
const topButtonDeleteAll = listButton.cloneNode(true);
const headerRowBottom = headerRowTop.cloneNode(true);
const topButtonAdd = listButton.cloneNode(true);

bottomInput.setAttribute("placeholder", "Search ...");
bottomInput.setAttribute("class", "root__search-input");
listCountCompleted.setAttribute("id", "completeCount");
listButton.setAttribute("id", "showAllButton");
listCountAll.setAttribute("id", "countAll");

listCountCompleted.innerText = `Completed: ${completeCount}`;
bottomButtonShowCompleted.innerText = "Show Comleted";
topButtonDeleteLast.innerText = "Delete Last";
topButtonDeleteAll.innerText = "Delete All";
listCountAll.innerText = `All: ${toDoBody.childElementCount}`;
listDate.innerText = date.toLocaleString();
bottomButtonShowAll.innerText = "Show All";
topButtonAdd.innerText = "Add";

function createElement(tagName, options) {
  const element = Object.assign(document.createElement(tagName), options);
  return element;
}

const pushInStorage = (item, keyName, keyValue) => {
  todosArray.unshift(item);
  localStorage.setItem(keyName, JSON.stringify(keyValue));
};

const removeItemFromStorage = (keyName, id) => {
  const items = JSON.parse(localStorage.getItem(keyName));
  const removebleItem = items.find((item) => {
    return item.todoId === id;
  });
  items.splice(items.indexOf(removebleItem), 1);
  todosArray.splice(items.indexOf(removebleItem), 1);
  localStorage.setItem("todoItems", JSON.stringify(items));
};

const completeTodoForLS = (keyName, id) => {
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
};

const todoDeleteAll = () => {
  for (let i = toDoBody.childElementCount; i > 0; i--) {
    toDoBody.children[0].remove();
  }
  localStorage.removeItem("todoItems");
  todosArray = [];

  totalCount();
  completedCount();
};

const todoDeleteLast = () => {
  toDoBody.children[toDoBody.childElementCount - 1].remove();
  todosArray.pop();
  localStorage.setItem("todoItems", JSON.stringify(todosArray));
  totalCount();
  completedCount();
};

const todoAdd = () => {
  if (topInput.value === "") {
    topInput.focus();
  } else {
    topInput.value === ""
      ? (listText.innerText = "ToDo Text")
      : (listText.innerText = `${topInput.value}`);
    const date = new Date().toLocaleString();
    const newId =
      Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2);
    const todoItemForStorage = Object.assign(
      {},
      {
        todoValue: topInput.value,
        todoComplete: false,
        todoDate: date,
        todoId: newId,
      }
    );
    pushInStorage(todoItemForStorage, "todoItems", todosArray);
    listDate.innerText = date;
    const listWrapperClone = listWrapper.cloneNode(true);
    listWrapperClone.id = newId;
    toDoBody.insertAdjacentElement("afterbegin", listWrapperClone);
    topInput.value = "";
    totalCount();
  }
};

const todoAddAtKey = (e) => {
  if (e.keyCode !== 13) return;
  todoAdd();
};

const totalCount = () => {
  const count = document.getElementById("countAll");
  count.innerText = `All: ${toDoBody.children.length}`;
};

const completedCount = () => {
  const count = document.getElementById("completeCount");

  const quantity = Array.from(
    toDoBody.querySelectorAll(".root__wrapper")
  ).filter((item) => {
    return item.className.includes("complete");
  });

  count.innerText = `Completed: ${quantity.length}`;
};

const showCompleted = () => {
  const allElement = toDoBody.querySelectorAll(".root__wrapper");

  allElement.forEach((item) => {
    if (item.className.includes("complete")) {
      item.classList.toggle("show");
    } else {
      item.classList.toggle("hide-others");
    }
  });
};

const showAllBtn = () => {
  const allElement = toDoBody.querySelectorAll(".root__wrapper");

  allElement.forEach((item) => {
    if (item.className.includes("hide-others")) {
      item.classList.remove("hide-others");
      item.classList.add("show");
    }
    item.classList.toggle("show");
  });

  completedCount();
  totalCount();
};

const todoFilter = () => {
  const bodyItems = Array.from(toDoBody.childNodes);
  const inputFindValue = bottomInput.value;
  bodyItems.forEach((item) => {
    item.childNodes.forEach((item) => {
      if (!item.className.includes("root__text")) return;
      if (inputFindValue === "") {
        item.parentElement.classList.remove("find");
        item.parentElement.classList.remove("hide-others");
      } else if (
        inputFindValue.toLowerCase() === item.textContent.toLowerCase()
      ) {
        item.parentElement.classList.add("find");
      } else {
        item.parentElement.classList.remove("find");
        item.parentElement.classList.add("hide-others");
      }
    });
  });
};

const todoFiltered = (element) => {
  if (element.target.className !== "root__search-input") return;

  element.target.addEventListener("input", todoFilter);
};

const completeTodo = (element) => {
  const target = element.target;
  if (!target.className.includes("root__wrapper")) return;
  const todoChecked = target.querySelector(".root__check-box");
  target.classList.toggle("complete");
  if (target.className.includes("complete")) {
    todoChecked.checked = true;
  } else {
    todoChecked.checked = false;
  }
  completeTodoForLS("todoItems", target.id);
  completedCount();
};

const correctTodo = (element) => {
  const target = element.target;
  if (target.className !== "root__text") return;

  const input = createElement("input", {
    className: "root__input",
    type: "text",
    placeholder: "Enter todo text ...",
    value: target.textContent,
  });

  target.insertAdjacentElement("afterend", input);
  target.remove();
  input.focus();

  const backToSpan = () => {
    if (input.value === "") {
      input.value = "Emty todo";
    }
    target.textContent = input.value;
    input.insertAdjacentElement("afterend", target);
    input.remove();
    const date = new Date();
    target.parentElement.lastChild.lastChild.textContent =
      date.toLocaleString();
    const item = todosArray.filter((item) => {
      return item.todoId === target.parentElement.id;
    })[0];
    Object.assign(item, {
      todoValue: target.textContent,
      todoDate: date.toLocaleString(),
    });
    localStorage.setItem("todoItems", JSON.stringify(todosArray));
    console.log(todosArray, item);
  };

  const backToSpanAtKey = (e) => {
    if (e.keyCode !== 13) return;
    backToSpan();
  };

  input.addEventListener("blur", backToSpan);
  input.addEventListener("keydown", backToSpanAtKey);
};

const closeTodo = (elem) => {
  if (elem.target.className !== "root__button") return;
  const elemId = elem.target.parentElement.parentElement.id;
  removeItemFromStorage("todoItems", elemId);
  elem.target.parentElement.parentElement.remove();
  completedCount();
  totalCount();
};

headerRowBottom.append(
  listCountAll,
  listCountCompleted,
  bottomButtonShowCompleted,
  bottomButtonShowAll,
  bottomInput
);
headerRowTop.append(
  topButtonDeleteAll,
  topButtonDeleteLast,
  topInput,
  topButtonAdd
);

toDoHeader.append(headerRowTop, headerRowBottom);
listWrapper.append(listCB, listText, listBox);
listBox.append(listButton, listDate);

root.append(toDoHeader, toDoBody);

if (localStorage.getItem("todoItems")) {
  todosArray = JSON.parse(localStorage.getItem("todoItems"));
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

const todoHead = document.getElementById("rootHeader");

bottomButtonShowCompleted.addEventListener("click", showCompleted);
topButtonDeleteLast.addEventListener("click", todoDeleteLast);
topButtonDeleteAll.addEventListener("click", todoDeleteAll);
bottomButtonShowAll.addEventListener("click", showAllBtn);
toDoHeader.addEventListener("keydown", todoFiltered);
topInput.addEventListener("keydown", todoAddAtKey);
toDoBody.addEventListener("click", completeTodo);
toDoBody.addEventListener("click", correctTodo);
topButtonAdd.addEventListener("click", todoAdd);
toDoBody.addEventListener("click", closeTodo);
