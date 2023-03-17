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
  todosArray.splice(items.indexOf(removebleItem), 1 );
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
    return item.style.background === "green";
  });

  count.innerText = `Completed: ${quantity.length}`;
};

const showCompleted = () => {
  const allElement = toDoBody.querySelectorAll(".root__wrapper");

  allElement.forEach((item) => {
    if (item.style.background === "green") {
      item.style.display = "flex";
    }
  });
};

const showAllBtn = () => {
  const allElement = toDoBody.querySelectorAll(".root__wrapper");

  allElement.forEach((item) => {
    item.style.display = "flex";
  });

  completedCount();
  totalCount();
};

const todoFilter = (e) => {
  const bodyItems = Array.from(toDoBody.childNodes);
  const inputFindValue = bottomInput.value;

  const isSame = (item) => {
    if (
      inputFindValue.toLowerCase() === "" ||
      inputFindValue.toLowerCase() === " "
    )
      return;
    return item.textContent
      .toLowerCase()
      .includes(inputFindValue.toLowerCase());
  };

  const isSearchedItem = (item) => {
    const filteredItems = Array.from(item.childNodes).filter(isSame);
    if (filteredItems.length == 0) return;
    return filteredItems;
  };

  const findedItem = bodyItems.filter(isSearchedItem);

  bodyItems.forEach((item) => {
    item.style.background = "none";
  });

  findedItem.forEach((item) => {
    item.style.background = "pink";
    toDoBody.insertAdjacentElement("afterbegin", item);
  });
};

const todoFiltered = (element) => {
  if (element.target.className !== "root__input") return;

  element.target.addEventListener("input", todoFilter);
};

const completeTodo = (element) => {
  const target = element.target;
  if (target.className !== "root__wrapper") return;
  const todoChecked = target.querySelector(".root__check-box");
  const todoCheckedText = target.querySelector(".root__text");
  if (target.className === "root__wrapper completed") {
    target.classList.remove("completed");
  }
  if (target.style.background === "green") {
    todoCheckedText.style.textDecoration = "none";
    target.style.background = "none";
    target.style.display = "flex";
    todoChecked.checked = false;
    completedCount();
    totalCount();
  } else {
    todoCheckedText.style.textDecoration = "line-through";
    target.style.background = "green";
    target.style.display = "none";
    todoChecked.checked = true;
    toDoBody.insertAdjacentElement("beforeend", target);
    completedCount();
    totalCount();
  }
};

const correctTodo = (element) => {
  const target = element.target;
  if (target.className !== "root__text") return;
  const parentElem = target.parentElement.childNodes;
  let targetContent = target.textContent;
  const targetSource = target.outerHTML;
  const inputElement = createElement("input", {
    className: "root__input",
    type: "text",
    placeholder: "Enter todo text ...",
  });
  target.outerHTML = inputElement.outerHTML;
  const inputArray = Array.from(parentElem).filter((item) => {
    return item.className === "root__input";
  });
  const input = inputArray[0];
  input.focus();
  input.value = targetContent;
  const backToSpan = () => {
    targetContent = input.value;
    input.outerHTML = targetSource;
    const textArray = Array.from(parentElem).filter((item) => {
      return item.className === "root__text";
    });
    const text = textArray[0];
    text.textContent = targetContent;
  };
  const backToSpanKey = (e) => {
    if (e.keyCode !== 13) return;
    backToSpan();
  };
  input.addEventListener("blur", backToSpan);
  input.addEventListener("keydown", backToSpanKey);
};

const closeTodo = (elem) => {
  if (elem.target.className !== "root__button") return;
  console.log(elem.target.parentElement.parentElement.id);
  removeItemFromStorage(
    "todoItems",
    elem.target.parentElement.parentElement.id
  );
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
