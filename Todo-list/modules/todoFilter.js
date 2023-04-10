import { bottomInput, toDoBody } from "./elements.js";

export const todoFilter = () => {
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

export const todoFiltered = (element) => {
  if (element.target.className !== "root__search-input") return;

  element.target.addEventListener("input", todoFilter);
};
