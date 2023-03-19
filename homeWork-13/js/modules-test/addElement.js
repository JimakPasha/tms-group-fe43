import { createElement } from "./createElement.js";
import {root} from "../index.js";
//Функция для создания одного элемента
export function addElement(){
    const element = createElement('div',{classList:'element',innerText:'елемент'})
    root.insertAdjacentElement('beforeend',element)
}