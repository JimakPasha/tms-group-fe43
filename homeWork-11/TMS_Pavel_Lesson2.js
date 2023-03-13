// NODELIST - статическая коллекция. Статичен
// HTMLCOLLECTION - живая коллекция, динамическая. Динамически изменяется
// Способы, чтобы получить статическую коллекцию
// querySelector
// querySelectorAll
// getElementById
// Способы добавить живую коллекцию
// getElementsByTagName
// getElementsByClassName
// getElementsByName
// const static = document.querySelectorAll('.list__item');
// const live = document.getElementsByClassName('list__item');
// console.log(static); // NODELIST
// console.log(live); // HTMLCOLLECTION
// Создаём новый html-объект
// const list = document.querySelector('.list');
// const newItem = document.createElement('li');
// newItem.classList.add('list__item');
// newItem.innerHTML = 'new item';
// list.append(newItem);
// console.log(static); // NODELIST
// console.log(live); // HTMLCOLLECTION
// if (static.length === 6) {
//   alert('Игра закончена');
// }
// ОТЛИЧИЯ В ПЕРЕБОРАХ NODELIST VS HTMLCOLLECTION
// NODELIST
// 1) обычный цикл
// for (let i = 0; i < static.length; i++) {
//     console.log(static[i]);
// }
// // 2) цикл for of
// for (let item of static) {
//     console.log(item);
// }
// // 3) forEach
// static.forEach(item => console.log(item));
// // 4) map :(
// static.map(item => console.log(item)); // fail
// Array.from(static).map(item => console.log(item));
// HTMLCOLLECTION
// 1) обычный цикл
// for (let i = 0; i < live.length; i++) {
//     console.log(static[i]);
// }
// // 2) цикл for of
// for (let item of live) {
//     console.log(item);
// }
// // 3) forEach :(
// live.forEach(item => console.log(item)); // fail
// Array.from(live).forEach(item => console.log(item));
// // 4) map :(
// live.map(item => console.log(item)); // fail
// Array.from(live).map(item => console.log(item));
