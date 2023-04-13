import { createElement } from "./createElement.js";

export const listButton = createElement("button", {
  className: "root__button",
  textContent: "X",
  type: "submit",
});
export const toDoBody = createElement("section", {
  className: "root__body",
  id: "todoBody",
});
export const listText = createElement("span", {
  className: "root__text",
  textContent: "Todo Text",
});
export const topInput = createElement("input", {
  className: "root__input",
  placeholder: "Enter todo ...",
});
export const listCB = createElement("input", {
  className: "root__check-box",
  type: "checkbox",
});
export const headerRowTop = createElement("section", {
  className: "root__header-row",
});
export const listWrapper = createElement("article", {
  className: "root__wrapper",
});
export const listBox = createElement("div", {
  className: "root__item-right-bar",
});
export const toDoHeader = createElement("header", {
  className: "root__header",
});
export const listDate = createElement("span", { className: "root__date" });
export const root = document.getElementById("root");
export const listCount = createElement("span");

export let completeCount = 0;
export let allCount = 2;
export const date = new Date();
export let todosArray = [];

export const listCountCompleted = listCount.cloneNode(true);
export const listCountAll = listCount.cloneNode(true);
export const bottomInput = topInput.cloneNode(true);

listCountCompleted.classList = "root__count-completed";
listCountAll.classList = "root__count-all";

export const bottomButtonShowCompleted = listButton.cloneNode(true);
export const bottomButtonShowAll = listButton.cloneNode(true);
export const topButtonDeleteLast = listButton.cloneNode(true);
export const topButtonDeleteAll = listButton.cloneNode(true);
export const headerRowBottom = headerRowTop.cloneNode(true);
export const topButtonAdd = listButton.cloneNode(true);

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
