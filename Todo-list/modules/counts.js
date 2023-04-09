export function completedCount() {
  const toDoBody = document.getElementById("todoBody");
  const count = document.getElementById("completeCount");
  
  const quantity = Array.from(
    toDoBody.querySelectorAll(".root__wrapper")
    ).filter((item) => {
      return item.className.includes("complete");
    });
    
    count.innerText = `Completed: ${quantity.length}`;
  }
  
  export function totalCount() {
  const toDoBody = document.getElementById("todoBody");
  const count = document.getElementById("countAll");
  count.innerText = `All: ${toDoBody.children.length}`;
}
