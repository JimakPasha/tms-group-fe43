const name = document.querySelector('.name');
const surname = document.querySelector('.surname');
const age = document.querySelector('.age');
const create = document.querySelector('.create');
const clearButton = document.querySelector('.clearButton');
const listName = document.querySelector('.listName');
const listSurname = document.querySelector('.listSurname');
const listAge = document.querySelector('.listAge');
// const input = document.getElementsByTagName('input');

let listArrName = [];
let listArrSurname = [];
let listArrAge = [];

if (localStorage.getItem('listName')) {
   listArrName = JSON.parse(localStorage.getItem('listName'));
   listArrName.forEach((itemName) => {
      const elName = document.createElement('li');
      elName.innerText = 'Пользователь:' + ' ' + itemName.value;
      listName.append(elName);
   });
};

if (localStorage.getItem('listSurname')) {
   listArrSurname = JSON.parse(localStorage.getItem('listSurname'));
   listArrSurname.forEach((itemSurname) => {
      const elSurname = document.createElement('li');
      elSurname.innerText = itemSurname.value + ',';
      listSurname.append(elSurname);
   });
};

if (localStorage.getItem('listAge')) {
   listArrAge = JSON.parse(localStorage.getItem('listAge'));
   listArrAge.forEach((itemAge) => {
      const elAge = document.createElement('li');
      elAge.innerText = itemAge.value + ' ' + 'лет';
      listAge.append(elAge);
   });
};

create.addEventListener('click', () => {
   if (age.value < 18) {
      create.disabled = true;
   } else {
      create.disabled = false;
   }
});
//! Не понимаю, как сделать, чтобы проверяло возраст до ввода

create.addEventListener('click', () => {
   
   const nameObj = {};
   nameObj.value = name.value;
   // nameObj.id = Math.floor(Math.random() * 100);
   listArrName.push(nameObj);
   localStorage.setItem('listName', JSON.stringify(listArrName));
   const itemName = document.createElement('li');
   itemName.innerText = 'Пользователь:' + ' ' + name.value;
   name.value = '';
   listName.append(itemName);

   const surnameObj = {};
   surnameObj.value = surname.value;
   // surnameObj.id = Math.floor(Math.random() * 100);
   listArrSurname.push(surnameObj);
   localStorage.setItem('listSurname', JSON.stringify(listArrSurname));
   const itemSurname = document.createElement('li');
   itemSurname.innerText = surname.value + ',';
   surname.value = '';
   listSurname.append(itemSurname);

   const ageObj = {};
   ageObj.value = age.value;
   // ageObj.id = Math.floor(Math.random() * 100);
   listArrAge.push(ageObj);
   localStorage.setItem('listAge', JSON.stringify(listArrAge));
   const itemAge = document.createElement('li');
   itemAge.innerText = age.value + ' ' + 'лет';
   age.value = '';
   listAge.append(itemAge);
})


clearButton.addEventListener('click', () => {
   name.value = '';
   surname.value = '';
   age.value = '';
})