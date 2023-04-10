import { toDoBody } from "./elements.js";

export const showCompleted = () => {
  const allElement = toDoBody.querySelectorAll(".root__wrapper");

  allElement.forEach((item) => {
    if (item.className.includes("complete")) {
      item.classList.toggle("show");
    } else {
      item.classList.toggle("hide-others");
    }
  });
};
