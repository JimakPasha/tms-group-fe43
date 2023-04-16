const taskInput = document.querySelector("#task-input");
const addTaskBtn = document.querySelector("#add-task-btn");
const taskList = document.querySelector("#task-list");
const clearAllBtn = document.querySelector("#delete-all-btn");
addTaskBtn.addEventListener("click", function () {
    const taskValue = taskInput.value;
    if (!taskValue) return;
    const taskDate = new Date().toLocaleString();
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `<button class="complete-task-btn"><i class="fa-solid fa-check"></i></button> <input type="text" class="task-title-input" value="${taskValue}"> <span class="task-date">Добавлено: ${taskDate}</span> <div class="task-buttons"> <button class="delete-task-btn"><i class="fa-solid fa-xmark"></i></button> </div> `;
    const completeTaskBtn = taskItem.querySelector(".complete-task-btn");
    const deleteTaskBtn = taskItem.querySelector(".delete-task-btn");
    completeTaskBtn.addEventListener("click", function () {
        taskItem.classList.toggle("completed");
    });
    deleteTaskBtn.addEventListener("click", function () {
        taskList.removeChild(taskItem);
    });
    taskList.appendChild(taskItem);
    taskInput.value = "";
});
clearAllBtn.addEventListener("click", function () {
    taskList.innerHTML = "";
});