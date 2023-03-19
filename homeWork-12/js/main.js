import {createElement} from './createElement.js';
import {clearForm} from './clearForm.js';
import { removeDisabled } from './removeDisabled.js';

let root = document.getElementById('root');

//Container
const container = createElement('div',{classList:'container'});
root.insertAdjacentElement('beforeend',container);

//Body
const body = createElement('div',{classList:'body'});
container.insertAdjacentElement('beforeend',body);

//Form
const form= createElement('div',{classList:'body__form'});

body.insertAdjacentElement('beforeend',form);

//interName------------------------------------------------------------------------------------
const interName = createElement('div',{classList:'body__interName'});
form.insertAdjacentElement('beforeend',interName);

//textName
const textName = createElement('p',{classList:'body__buttonName',innerText:'Введите имя:'});
interName.insertAdjacentElement('beforeend',textName);

//inputName
export const inputName = createElement('input',{classList:'body__inputName'});

interName.insertAdjacentElement('beforeend',inputName);

//interSurName---------------------------------------------------------------------------------
const interSurName = createElement('div',{classList:'body__interSurName'});
form.insertAdjacentElement('beforeend',interSurName);

//textSurName
const buttonSurName = createElement('p',{classList:'body__buttonSurName',innerText:'Введите фамилию:'});
interSurName.insertAdjacentElement('beforeend',buttonSurName);

//inputSurName
export const inputSurName = createElement('input',{classList:'body__inputSurName'});
interSurName.insertAdjacentElement('beforeend',inputSurName);

//interAge----------------------------------------------------------------------------------------
const interAge = createElement('div',{classList:'body__interAge'});

form.insertAdjacentElement('beforeend',interAge);

//textAge
const buttonAge = createElement('p',{classList:'body__buttonAge',innerText:'Введите свой возраст:'});
interAge.insertAdjacentElement('beforeend',buttonAge);

//inputAge
export const inputAge = createElement('input',{classList:'body__inputAge'});
inputAge.setAttribute('type','number');
inputAge.setAttribute('min','1');
inputAge.setAttribute('max','120');
interAge.insertAdjacentElement('beforeend',inputAge);

inputAge.addEventListener('click',removeDisabled)

//buttons-----------------------------------------------------------------------------------------
const buttons = createElement('div',{classList:'body__buttons'});
form.insertAdjacentElement('beforeend',buttons);

//add
export let add = createElement('button',{classList:'body__add',innerText:'Создать'});

let listPersons = []

if(localStorage.getItem('listPersons')){
    console.log(JSON.parse(localStorage.getItem('listPersons')));
    listPersons = JSON.parse(localStorage.getItem('listPersons'))
    listPersons.forEach((item)=>{
        let element = createElement('li',{classList:'body__person'})
        element.textContent = `Пользователь: ${item.name} ${item.surName}, ${item.age} лет`
        form.insertAdjacentElement('beforeend',element)
    })
}
 
function addPerson(){
    if( inputName.value.trim() === ""){
        alert('Введите имя!');
    }
    else if( inputSurName.value.trim() === ""){
        alert('Введите фамилию!');
    }
    else if(inputAge.value.trim() <1){
        alert('Введите ваш возраст!');
    }
    else if(inputAge.value<18){
        add.setAttribute('disabled','disabled');
        add.classList.add('body__add_disabled');
        add.innerText=`Заблокировано`;
    }
    else{
        const objItem = {}

        objItem.name= inputName.value;
        objItem.surName = inputSurName.value;
        objItem.age = inputAge.value;

        listPersons.push(objItem);

        localStorage.setItem('listPersons',JSON.stringify(listPersons));

        const person = createElement('li',{classList:'body__person'});
        person.innerText=`Пользователь: ${inputName.value} ${inputSurName.value}, ${inputAge.value} лет`;
        form.insertAdjacentElement('beforeend',person);
        inputName.value = '';
        inputSurName.value = '';
        inputAge.value = '';
    }
}

add.addEventListener('click',addPerson);
buttons.insertAdjacentElement('beforeend',add);

//deleteAll
const deleteAll = createElement('button',{classList:'body__deleteAll',innerText:'Очистить форму'});

deleteAll.addEventListener('click',clearForm)
buttons.insertAdjacentElement('beforeend',deleteAll);
