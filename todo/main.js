const root = document.getElementById('root')
root.style.margin = '0 auto'
root.style.marginTop = '10%'
root.style.borderRadius = '20px'
root.style.border = '3px solid black'

// btn
const deliteAll = document.createElement('button') // создаем новый элемент <button>
const textButton = document.createTextNode('Delete All') // создаем текстовое содержимое
deliteAll.appendChild(textButton) // добавляем текстовое содержимое элементу <button>  
root.appendChild(deliteAll)
deliteAll.classList.add('deliteAll-button')
// input
const enterToDo = document.createElement('input')
enterToDo.classList.add('input-to-do')
root.appendChild(enterToDo)
enterToDo.placeholder = 'Enter todo ...'
// btn two
const deliteAllTwo = document.createElement('button') // создаем новый элемент <button>
const textButtonTwo = document.createTextNode('Add') // создаем текстовое содержимое
deliteAllTwo.appendChild(textButtonTwo) // добавляем текстовое содержимое элементу <button>  
root.appendChild(deliteAllTwo)
deliteAllTwo.classList.add('deliteAll-button')
// wrap (div)
const divWrap = document.createElement('div');
root.appendChild(divWrap);
divWrap.appendChild(deliteAll)
divWrap.appendChild(enterToDo)
divWrap.appendChild(deliteAllTwo)
divWrap.classList.add('wrap')

// div innerBig
const divInnerBig = document.createElement('div');
root.appendChild(divInnerBig);
// divInnerBig.innerHTML = ''
divInnerBig.classList.add('innerBig')

// btnEnter
const enter = document.createElement(`button`)
divInnerBig.appendChild(enter)
const textButtonEnter = document.createTextNode('v')
enter.appendChild(textButtonEnter)
enter.classList.add('enterBnt')

// input
const todoText = document.createElement('input')
divInnerBig.appendChild(todoText)
todoText.setAttribute(`type`, `text`);
todoText.classList.add('todoText')
todoText.placeholder = 'Todo text'

// btnClose inner 
const closeBtn = document.createElement('button')
divInnerBig.appendChild(closeBtn)
const textCloseBtn = document.createTextNode('X')
closeBtn.appendChild(textCloseBtn)
closeBtn.classList.add('closeBtn')

// date
const dateInput = document.createElement('input');
divInnerBig.appendChild(dateInput);
dateInput.classList.add('date-input');
dateInput.setAttribute(`type`, `text`);
dateInput.placeholder = 'Date';




// div innerBig
const divInnerBig2 = document.createElement('div');
root.appendChild(divInnerBig2);
// divInnerBig.innerHTML = ''
divInnerBig2.classList.add('innerBig2')

// btnEnter
const enter2 = document.createElement(`button`)
divInnerBig2.appendChild(enter2)
const textButtonEnter2 = document.createTextNode('v')
enter2.appendChild(textButtonEnter2)
enter2.classList.add('enterBnt')

// input
const todoText2 = document.createElement('input')
divInnerBig2.appendChild(todoText2)
todoText2.setAttribute(`type`, `text`);
todoText2.classList.add('todoText')
todoText2.placeholder = 'Todo text'

// btnClose inner 
const closeBtn2 = document.createElement('button')
divInnerBig2.appendChild(closeBtn2)
const textCloseBtn2 = document.createTextNode('X')
closeBtn2.appendChild(textCloseBtn2)
closeBtn2.classList.add('closeBtn')

// date
const dateInput2 = document.createElement('input');
divInnerBig2.appendChild(dateInput2);
dateInput2.classList.add('date-input');
dateInput2.setAttribute(`type`, `text`);
dateInput2.placeholder = 'Date';









