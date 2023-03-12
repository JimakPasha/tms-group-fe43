const root = document.getElementById('root')
//Создаем фун-ция которая создает элементы и присваивает классы
function createElement(tagName,options){
     const element = Object.assign(document.createElement(tagName),options) 
     return element
}
//Создаем контейнер
const container = createElement('div',{classList:'container'})

//wrapper============================================================
const wrapper = createElement('div',{classList:'wrapper'})
root.insertAdjacentElement('afterbegin',wrapper)
wrapper.insertAdjacentElement('afterbegin',container)

//task01===================================================================================
const task01 = createElement('div',{classList:'task01'})
container.insertAdjacentElement('beforeend',task01)
for(let i = 1;i<=3;i++){
    let button01 = createElement('div',{classList:'task01__button01',textContent:`button0${i}`})
    task01.insertAdjacentElement('beforeend',button01)
    function showConsole(){
        alert('Hello, i am button!')
    }
    button01.addEventListener('click',showConsole)
}
    

//task02=================================================================================
const task02 = createElement('div',{classList:'task02'})
container.insertAdjacentElement('beforeend',task02)

    let button02 = createElement('div',{classList:'task02__button02',textContent:`Нажми правой клавиши!`})
    task02.insertAdjacentElement('beforeend',button02)
    function showConsole2(event){
        alert('Это event contextmenu!!!')
        event.preventDefault()
    }
    button02.addEventListener('contextmenu',showConsole2)
//task03============================================================
const task03 = createElement('div',{classList:'task03'})
container.insertAdjacentElement('beforeend',task03)

let button03 = createElement('div',{classList:'task03__button03',textContent:`Меняем цвет`})
    task03.insertAdjacentElement('beforeend',button03)
    function toggleClass(){
        button03.classList.toggle('task03__button03__white')
    }
    button03.addEventListener('click',toggleClass)


//task04============================================================
const task04 = createElement('div',{classList:'task04'})
container.insertAdjacentElement('beforeend',task04)
for(let i=1;i<=16;i++){
    const item = createElement('div',{classList:'task04__item'})
    task04.insertAdjacentElement('beforeend',item)
}
function showBlack (event){
    event.target.closest('.task04__item').classList.toggle('task04__item_black')
}
task04.addEventListener('click',showBlack)
//task05============================================================
const task05 = createElement('div',{classList:'task05'})
container.insertAdjacentElement('beforeend',task05)
let count=0
const counter = createElement('div',{classList:'task05__counter',textContent:`${count}`})
task05.insertAdjacentElement('afterbegin',counter)

const button05 = createElement('div',{classList:'task05__button05',textContent:'Добавить число'})
task05.insertAdjacentElement('afterbegin',button05)
function addCount(){
    count++
    counter.textContent = count
}
button05.addEventListener('click',addCount)