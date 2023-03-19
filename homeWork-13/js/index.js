import{createElement} from './modules-test/createElement.js'
import{getDateNow} from './modules-test/getDateNow.js'
import{addElement} from './modules-test/addElement.js'
import{removeElement} from './modules-test/removeElement.js'
import{removeAllElements} from './modules-test/removeAllElements.js'

//Проверка модуля createElement
export const root = document.getElementById('root');
const time = createElement('div',{classList:'time'});
root.insertAdjacentElement('beforeend',time);

//Проверка модуля по добавлению времени
setInterval(()=>{time.innerHTML = `${getDateNow()}`},1000);

//Проверка модуля по добавлению элемента
const button = createElement('button',{innerText:'добавить элемент'});
root.insertAdjacentElement('beforeend',button);
button.addEventListener('click',addElement);

//Проверка модуля по удалению элемента
const removeButton = createElement('button',{innerText:'удалить элемент'});
root.insertAdjacentElement('beforeend',removeButton);
removeButton.addEventListener('click',removeElement);

//Проверка модуля по удалению всех элементов
const deleteAll = createElement('button',{innerText:'удалить все элементы'});
root.insertAdjacentElement('beforeend',deleteAll);
deleteAll.addEventListener('click',removeAllElements);