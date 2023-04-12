// Task 1 💻
// 	• Создайте ветку на github name-fetch-training
// 	• Далее создайте папку fetch-training и добавьте файлы index.html index.js
// 	• Реализуйте приложение:
// 		○ Перейдите по ссылке https://jsonplaceholder.typicode.com/
// 		○ Во вкладке Resources лежит эндпоинт /todos - Это именно те данные которые нам нужны
// 		○ Далее напишите две функции getTodos & printTodos
// 			§ Функция getTodos делает запрос по указанному адресу и забирает данные.
// 			§ Функция printTodos создает список ul, и в каждый елемент li добавляет данные из 
//             полученного объекта с делом. Нам нужны ключи из объекта id title.
// Example:
//     1 delectus aut autem
//     2 quis ut nam facilis et officia qui
//     3 fugiat veniam minus
//     ...
//     200 ipsam aperiam voluptates qui


const requestBtn = document.querySelector('.request');
const list = document.querySelector('.list');

requestBtn.addEventListener('click', () => {
   createElementList();
});
const createElementList = () => {
   function getTodos() {
      return new Promise((resolve, reject) => {
         fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {
            if (response.ok) {
               resolve(response.json());
            } else {
               reject(new Error('Error'));
            }
         })
      })
   }
   getTodos().then((todo) => {
      todo.forEach((user) => {  
         printUser(user);
      })
   })
   function printUser({ id, title }) {
      const el = document.createElement('li');
         el.innerText = `id: ${id}, title: ${title}`;
         list.appendChild(el);
   }
}