import { completedCount, totalCount } from "./counts.js";
import { toDoBody } from "./elements.js";

export const showAllBtn = () => {
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
