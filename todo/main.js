let root = document.getElementById('root');
    root.classList.add('rootClass');
    root.getElementsByClassName('rootClass');

let btn3 = document.querySelector('.closeBtn3');


// btn
const deliteAll = document.createElement('button'); // создаем новый элемент <button>
const textButton = document.createTextNode('Delete All'); // создаем текстовое содержимое
deliteAll.append(textButton); // добавляем текстовое содержимое элементу <button>  
root.append(deliteAll);
deliteAll.classList.add('deliteAll-button');

// input
const enterToDo = document.createElement('input');
enterToDo.classList.add('input-to-do');
root.append(enterToDo);
enterToDo.placeholder = 'Enter todo ...';
// btn two
const addBtn = document.createElement('button'); // создаем новый элемент <button>
const textAddBtn = document.createTextNode('Add'); // создаем текстовое содержимое
addBtn.append(textAddBtn) // добавляем текстовое содержимое элементу <button>  
root.append(addBtn);
addBtn.classList.add('deliteAll-button');

// wrap (div)
const divWrap = document.createElement('div');
      divWrap.classList.add('wrap');
      root.append(divWrap);
      divWrap.append(deliteAll);
      divWrap.append(enterToDo);
      divWrap.append(addBtn);
      divWrap.getElementsByClassName('wrap');



//Событие по клику на addBtn
addBtn.addEventListener('click', function() {
  var divInnerBig3 = document.createElement('div');
  root.appendChild(divInnerBig3);
  divInnerBig3.querySelector('.innerBig3');
    divInnerBig3.classList.add('innerBig3');

    const enter = document.createElement(`button`);
    divInnerBig3.appendChild(enter);
    const textButtonEnter = document.createTextNode('v')
    enter.appendChild(textButtonEnter);
    enter.classList.add('enterBnt');
   

    // input
    const todoText2 = document.createElement('input');
    divInnerBig3.appendChild(todoText2);
    todoText2.setAttribute(`type`, `text`);
    todoText2.classList.add('todoText');
    todoText2.placeholder = 'Todo text';

    // btnClose
    const closeBtn3 = document.createElement('button');
    divInnerBig3.appendChild(closeBtn3);

    const textCloseBtn3 = document.createTextNode('X');
    closeBtn3.appendChild(textCloseBtn3);

    closeBtn3.classList.add('closeBtn3');
    closeBtn.getElementsByClassName('closeBtn3');

    // date
    const dateInput3 = document.createElement('input');
    divInnerBig3.appendChild(dateInput3);
    dateInput3.classList.add('date-input');
    dateInput3.setAttribute(`type`, `text`);
    // dateInput3.placeholder = 'Date';
    dateInput3.querySelector('.date-input');
    const currentDate0 = new Date().toLocaleDateString();
    dateInput3.value = currentDate0;

});

// div innerBig
let divInnerBig = document.createElement('div');
root.appendChild(divInnerBig);
// divInnerBig.innerHTML = ''
divInnerBig.classList.add('innerBig');

// btnEnter
const enter = document.createElement(`button`);
divInnerBig.appendChild(enter);
const textButtonEnter = document.createTextNode('v')
enter.appendChild(textButtonEnter);
enter.classList.add('enterBnt');

// input
const todoText = document.createElement('input');
divInnerBig.appendChild(todoText);
todoText.setAttribute(`type`, `text`);
todoText.classList.add('todoText');
todoText.placeholder = 'Todo text';

// btnClose inner 
const closeBtn = document.createElement('button');
divInnerBig.appendChild(closeBtn);
const textCloseBtn = document.createTextNode('X');
closeBtn.appendChild(textCloseBtn);
closeBtn.classList.add('closeBtn');

// date
const dateInput = document.createElement('input');
divInnerBig.appendChild(dateInput);
dateInput.classList.add('date-input');
dateInput.setAttribute(`type`, `text`);
dateInput.placeholder = 'Date';
dateInput.querySelector('.date-input');
const currentDate1 = new Date().toLocaleDateString();
dateInput.value = currentDate1;





// div innerBig2
const divInnerBig2 = document.createElement('div');
root.appendChild(divInnerBig2);
// divInnerBig.innerHTML = ''
divInnerBig2.classList.add('innerBig2');

// btnEnter
const enter2 = document.createElement(`button`);
divInnerBig2.appendChild(enter2);
const textButtonEnter2 = document.createTextNode('v')
enter2.appendChild(textButtonEnter2);
enter2.classList.add('enterBnt');

// input
const todoText2 = document.createElement('input');
divInnerBig2.appendChild(todoText2);
todoText2.setAttribute(`type`, `text`);
todoText2.classList.add('todoText');
todoText2.placeholder = 'Todo text';

// btnClose inner 
const closeBtn2 = document.createElement('button');
divInnerBig2.append(closeBtn2);

const textCloseBtn2 = document.createTextNode('X');
closeBtn2.appendChild(textCloseBtn2);
closeBtn2.classList.add('closeBtn');

// date
const dateInput2 = document.createElement('input');
divInnerBig2.appendChild(dateInput2);
dateInput2.classList.add('date-input');
dateInput2.setAttribute(`type`, `text`);
// dateInput2.placeholder = `Date`;
dateInput2.querySelector('.date-input');
const currentDate2 = new Date().toLocaleDateString();
dateInput2.value = currentDate2;

// // Закрытие innerBig2 по нажатию на closeBtn2
closeBtn2.addEventListener('click', () => {
  const innerBig2 = document.getElementsByClassName('innerBig2');
    // Преобразуем HTML коллекцию в массив
    innerBigArray = Array.from(innerBig2);
    // Удаляем каждый элемент коллекции
    innerBigArray.forEach(function(element) {
      element.remove();
    });
});

// Закрытие innerBig по нажатию на closeBtn
closeBtn.addEventListener('click', () =>{
  const innerBig = document.getElementsByClassName('innerBig');
  // Преобразуем HTML коллекцию в массив
  innerBigArray = Array.from(innerBig);
  // Удаляем каждый элемент коллекции
  innerBigArray.forEach(function(element) {
    element.remove();
  });
});


// Назначаем обработчик события "click" на кнопку
deliteAll.addEventListener('click', function() {
  // Находим все элементы с классом "innerBig" на странице
  const innerBig = document.getElementsByClassName('innerBig');
  // Преобразуем HTML коллекцию в массив
  const innerBigArray = Array.from(innerBig);
  // Удаляем каждый элемент коллекции
  innerBigArray.forEach(function(element) {
    element.remove();
  });
});

deliteAll.addEventListener('click', function() {
// Находим все элементы с классом "innerBig2" на странице
const innerBig2 = document.getElementsByClassName('innerBig2');
// Преобразуем HTML коллекцию в массив
const innerBigArray = Array.from(innerBig2);
// Удаляем каждый элемент коллекции
innerBigArray.forEach(function(element) {
element.remove();
});
});

deliteAll.addEventListener('click', function() {
// Находим все элементы с классом "innerBig2" на странице
const innerBig3 = document.getElementsByClassName('innerBig3');
// Преобразуем HTML коллекцию в массив
const innerBigArray = Array.from(innerBig3);
// Удаляем каждый элемент коллекции
innerBigArray.forEach(function(element) {
element.remove();
});
});

const closeBtn3 = document.createElement('button');

let divInnerBig3 = document.createElement('div');
root.appendChild(divInnerBig3);

const textCloseBtn3 = document.createTextNode('X');
closeBtn3.appendChild(textCloseBtn3);
closeBtn3.classList.add('closeBtn3');














