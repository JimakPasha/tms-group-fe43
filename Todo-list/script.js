import { lsCheck } from "./modules/isCheck.js";
import {
  bottomButtonShowAll,
  bottomButtonShowCompleted,
  bottomInput,
  headerRowBottom,
  headerRowTop,
  listBox,
  listButton,
  listCB,
  listCountAll,
  listCountCompleted,
  listDate,
  listText,
  listWrapper,
  root,
  toDoBody,
  toDoHeader,
  topButtonAdd,
  topButtonDeleteAll,
  topButtonDeleteLast,
  topInput,
} from "./modules/elements.js";
import { showCompleted } from "./modules/showCompleted.js";
import { todoDeleteLast } from "./modules/todoDeleteLast.js";
import { closeTodo } from "./modules/closeTodo.js";
import { todoAdd, todoAddAtKey } from "./modules/todoAdd.js";
import { correctTodo } from "./modules/correctTodo.js";
import { completeTodo } from "./modules/completeTodo.js";
import { todoFiltered } from "./modules/todoFilter.js";
import { showAllBtn } from "./modules/showAllBtn.js";
import { todoDeleteAll } from "./modules/todoDeleteAll.js";

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

lsCheck();

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
