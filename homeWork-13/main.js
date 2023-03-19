// Task 1 🖥
// Сделать деструктуризацию всех элементов массива users, кроме 'John' и вывести в console.log();

const users = ["Bob", "John", "Anna", "Veronika", ["Rick"]];

const [name1, , name2, name3, [name4]] = users;

console.log(name1, users[1], name2, name3, name4);

// Task 2 🖥
// Сделать деструктуризацию всех свойств объекта и вывести в console.log();
const user = {
  name: "Alex",
  lastName: "McCallister",
  birthday: "12.04.1994",
  sex: "male",
  adress: null,
  location: {
    country: "England",
    city: "London",
  },
  email: null,
};

const {
  name,
  lastName,
  birthday,
  sex,
  adress,
  location: { country, city },
  email,
} = user;

console.log(
  `name: ${name}, lastName: ${lastName}, birthday: ${birthday}, sex: ${sex}, adress: ${adress}, country: ${country}, city: ${city}, email: ${email}`
);

// Task 3 🖥
// Объедините два массива с помощью spread оператора
const players1 = ["Pozitiv4ik", "Delphinate", "MissLuck"];

const players2 = ["NaGiBatoR", "SunnyGirl", "Lion"];

const commonPlayers = [...players1, ...players2];

console.log(commonPlayers);

// Task 4 🖥
const soccerPlayer = {
  name: "Маркиньос",
  age: "28",
  team: "Пари Сен-Жермен",
  salary: "10 000 000 eur",
};

function getFootballerInfo(soccerPlayer) {
  const { name, age, team, salary } = soccerPlayer;

  return `Меня зовут ${name}, мне ${age}. Я играю за ${team}, и моя зарплата ${salary}.`;
}

console.log(getFootballerInfo(soccerPlayer));

// Task 5 🖥
// Modules

import { isNumberPerfect } from "./test-modules/module-1.js";
import { reverseNumber } from "./test-modules/module-2.js";
import { alphabetOrder } from "./test-modules/module-3.js";
import { countdown } from "./test-modules/module-4.js";
import { exponentiation } from "./test-modules/module-5.js";

isNumberPerfect(28);
console.log(reverseNumber(28));
console.log(alphabetOrder("Hello"));
console.log(countdown(-8));
console.log(exponentiation(3, 4));
