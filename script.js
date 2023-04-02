// 1. Сделать деструктуризацию всех элементов массива users, кроме 'John' и вывести в console.log();
const users = ['Bob', 'John', 'Anna', 'Veronika', ['Rick']];
const [user1, , user3, user4, [user5]] = users;
console.log(user1, user3, user4, user5);

// 2. Сделать деструктуризацию всех свойств объекта и вывести в console.log();

const user = {
   name: 'Alex',
   lastName: 'McCallister',
   birthday: '12.04.1994',
   sex: 'male',
   adress: null,
   location: {
      country: 'England',
      city: 'London',
   },
   email: null,
};

const { name, lastName, birthday, sex, adress, location: { country, city }, email } = user;
console.log(name, lastName, birthday, sex, adress, country, city, email);


// 3. Объедините два массива с помощью spread оператора

const players1 = ['Pozitiv4ik', 'Delphinate', 'MissLuck'];
const players2 = ['NaGiBatoR', 'SunnyGirl', 'Lion'];
const commonPlayers = [...players1, ...players2];
console.log(commonPlayers);

// 4. Напишите функцию которая

// - на вход принимает объект футболиста в котором содержатся поля: name, age, team, salary
// - и возвращает строку 'Меня зовут [подставить имя], мне [подставить возраст]. Я играю за [подставить клуб], и моя зарплата [подставить зарплату].'
//   ! обязательно используйте деструктуризацию

const player = {
   name1: 'Alex',
   age: 25,
   team: 'Gomel-United',
   salary: 100500,
};

// const { name1, age, team, salary } = player;

function getData(obj) {
   const {name1, age, team, salary} = obj;
   console.log(`Меня зовут ${name1} , мне  ${age} . Я играю за  ${team} , и моя зарплата  ${salary} .`);
}

getData(player);

const player1 = {
   name1: 'Petr',
   age: 23,
   team: 'Gomel',
   salary: 500,
};

getData(player1);