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
const listDate = createElement("span", {
  className: "root__date",
  innerText: `${new Date().toLocaleString()}`,
});
const root = document.getElementById("root");
const listCount = createElement("span");

let completeCount = 0,
  allCount = 2;

const listCountCompleted = cloneNode(listCount, {
  className: "root__count-completed",
  id: "completeCount",
  innerText: `Completed: ${completeCount}`,
});
const listCountAll = cloneNode(listCount, {
  className: "root__count-all",
  id: "countAll",
  innerText: `All: ${allCount}`,
});
const bottomInput = cloneNode(topInput, {
  placeholder: "Search ...",
  className: "root__input-search",
});
const bottomButtonShowCompleted = cloneNode(listButton, {
  innerText: "Show Comleted",
});
const bottomButtonShowAll = cloneNode(listButton, { innerText: "Show All" });
const topButtonDeleteLast = cloneNode(listButton, { innerText: "Delete Last" });
const topButtonDeleteAll = cloneNode(listButton, { innerText: "Delete All" });
const headerRowBottom = cloneNode(headerRowTop);
const topButtonAdd = cloneNode(listButton, { innerText: "Add" });

function createElement(tagName, options) {
  return Object.assign(document.createElement(tagName), options);
}

function cloneNode(nodeName, options) {
  return Object.assign(nodeName.cloneNode(true), options);
}

const todoDeleteAll = () => {
  for (let i = toDoBody.childElementCount; i > 0; i--) {
    toDoBody.children[0].remove();
  }
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
    const date = new Date();
    listDate.innerText = date.toLocaleString();
    const listWrapperClone = listWrapper.cloneNode(true);
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
    } else {
      item.style.display = "none";
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
  if (e.keyCode !== 13) return;
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
    bottomInput.value = "";
    bottomInput.blur();
    return filteredItems;
  };
  const findedItem = bodyItems.filter(isSearchedItem);
  bodyItems.forEach((item) => {
    // item.style.background = "none";
    let textItem = item.querySelectorAll("* > .root__text");
    textItem[0].style.textDecoration = 'none'
    item.classList.add("searched-clean");
  });
  findedItem.forEach((item) => {
    item.style.background = "pink";
    toDoBody.insertAdjacentElement("afterbegin", item);
  });
};

const todoFiltered = (element) => {
  if (element.target.className !== "root__input-search") return;
  element.target.addEventListener("keydown", todoFilter);
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
  console.log(input);
};

const closeTodo = (elem) => {
  const target = elem.target;
  if (target.className !== "root__button") return;
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

for (let i = 0; i < allCount; ++i) {
  const listWrapperClone = listWrapper.cloneNode(true);
  toDoBody.append(listWrapperClone);
  listText.innerText = listText.innerText;
}

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
