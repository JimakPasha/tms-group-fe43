const root = document.getElementById('root')
//Создаем элемент section
const todo = document.createElement('section') 
todo.classList.add('todo')
root.insertAdjacentElement('afterbegin',todo)
//Cоздаем элемент контейнер
const container = document.createElement('div')
container.classList.add('container')
todo.insertAdjacentElement('afterbegin',container)
//Cоздаем элемент body
const body = document.createElement('div')
body.classList.add('todo__body')
container.insertAdjacentElement('afterbegin',body)
//Cоздаем элемент todoTop
const todoTop = document.createElement('div')
todoTop.classList.add('todo__top')
body.insertAdjacentElement('afterbegin',todoTop)
//Добавляем элементы в todoTop==================================================
//Создаем элемент button - add
const add = document.createElement('button')
add.textContent = 'Add'
add.classList.add('todo__add')
todoTop.insertAdjacentElement('afterbegin',add)
add.addEventListener('click',createComponent)
//Cоздаем элемент форму
const form = document.createElement('form')
form.classList.add('todo__form')
form.setAttribute('action','#')
todoTop.insertAdjacentElement('afterbegin',form)
//Создаем элемент input
const inputEnter = document.createElement('input')
inputEnter.classList.add('todo__enter')
 inputEnter.setAttribute('placeholder','enter todo...')
form.insertAdjacentElement('afterbegin',inputEnter)
//Cоздаем элемент button - delete All
const dellAll = document.createElement('button')
dellAll.textContent = 'Delete ALL'
dellAll.classList.add('todo__del-all')
todoTop.insertAdjacentElement('afterbegin',dellAll)
//При нажатии на кнопку delete all удаляются все компоненты-------------------------
function deleteAllComponents(){
    const array = list.children
    console.log(array);
    for(let i=0;i<array.length;i){
        array[i].remove()
    }
}
dellAll.addEventListener('click',deleteAllComponents)
//Закончили добавление элементов в todoTop=======================================
//Cоздаем элемент list
const list = document.createElement('ul')
list.classList.add('list')
body.insertAdjacentElement('beforeend',list)
//Создаем элементы и его компоненты через функцию
    function createComponent(){
        inputEnter.value = ''
        const component = document.createElement('li')
        component.classList.add('component')
        list.insertAdjacentElement('afterbegin',component)
//Cоздаем элементы и будем вставлять их в компонент===============================
//Создаем элемент сheck------------------------------------------
const checkCard = document.createElement('div')
checkCard.classList.add('component__check')
component.insertAdjacentElement('beforeend',checkCard)
//Cоздаем элемент image-check
const check = document.createElement('img')
check.setAttribute('src','img/check.png')
check.classList.add('hide')
checkCard.insertAdjacentElement('beforeend',check)
checkCard.addEventListener('click',function(){
    check.classList.toggle('hide')
    component.classList.toggle('component_active')
    formComponent.classList.toggle('component__form_active')
    
})
//-----------------------------------------------------------------
//Создаем элемент form-component----------------------------------
const formComponent = document.createElement('form')
formComponent.classList.add('component__form')
formComponent.setAttribute('action','#')
component.insertAdjacentElement('beforeend',formComponent)
//Создаем элемент input
const inputText = document.createElement('input')
inputText.setAttribute('placeholder',`${inputEnter.value}`||'Todo text')
formComponent.insertAdjacentElement('afterbegin',inputText)
//---------------------------------------------------------
//Создаем элемент close-------------------------------------
const crossCard = document.createElement('div')
crossCard.classList.add('component__close')
component.insertAdjacentElement('beforeend',crossCard)
function deleteComponent(event){
    event.target.closest('.component').remove()
}
crossCard.addEventListener('click',deleteComponent)
//Cоздаем элемент image-close
const cross = document.createElement('img')
cross.setAttribute('src','img/close.png')
crossCard.insertAdjacentElement('beforeend',cross)
//----------------------------------------------------------
//Создаем элемент buttonDate
const buttonDate = document.createElement('button')
buttonDate.classList.add('component__date')

setInterval(() => {
    const time = new Date()
    const minutes = time.getMinutes()<10?'0'+time.getMinutes():time.getMinutes()
    const seconds = time.getSeconds()<10?'0'+time.getSeconds():time.getSeconds()
    const hours = time.getUTCHours()<10?'0'+time.getUTCHours():time.getUTCHours()
    buttonDate.innerHTML = `${hours}.${minutes}.${seconds} ` 
    },1000)

component.insertAdjacentElement('beforeend',buttonDate)
    
}
let countComponents = 2 //Количество компонентов
for(let i =1;i<=countComponents;i++){
    createComponent()
}
//Каркас todo======================================================================================

/* <section class="todo">
    <div class="container">
        <div class="todo__body">
            <div class="todo__top">
                <button class="todo__del-all">Delete ALL</button>
                <form action="#" class="todo__form">
                    <input type="text" class="todo__enter" placeholder="Enter todo...">
                </form>
                <button class="todo__add">Add</button>
            </div>
            <ul class="list">
                <li class="component">
                    <div class="component__check">
                        <img src="img/check.png" alt="">
                    </div>
                    <form action="#" class="component__form">
                        <input type="text" placeholder="Todo text">
                    </form>
                    <div class="component__close">
                        <img src="img/close.png" alt="close">
                    </div>
                    <button class="component__date">Date</button>
                </li>
                <li class="component">
                    <div class="component__check">
                        <img src="img/check.png" alt="">
                    </div>
                    <form action="#" class="component__form">
                        <input type="text" placeholder="Todo text">
                    </form>
                    <div class="component__close">
                        <img src="img/close.png" alt="close">
                    </div>
                    <button class="component__date">Date</button>
                </li>
            </ul>
        </div>
    </div>
</section>  */