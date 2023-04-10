import { listCountAll, listCountCompleted, toDoBody } from "./elements.js";

export function completedCount() {
  const quantity = Array.from(
    toDoBody.querySelectorAll(".root__wrapper")
    ).filter((item) => {
      return item.className.includes("complete");
    });
    
    listCountCompleted.innerText = `Completed: ${quantity.length}`;
  }
  
  export function totalCount() {
  listCountAll.innerText = `All: ${toDoBody.children.length}`;
}
