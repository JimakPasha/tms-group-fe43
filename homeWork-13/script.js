// #### Task 🖥
// 1. Сделать деструктуризацию всех
//  элементов массива users, кроме 'John' и
//   вывести в console.log();
{
const users = ['Bob', 'John', 'Anna', 'Veronika', ['Rick']];
const [name1, , name3, name4, [name5]] = users;
console.log(name1, users[1], name3, name4, [name5]);
console.log(users);
}


// 2. Сделать деструктуризацию всех свойств объекта 
//    и вывести в console.log();

{
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

      const {name, 
        lastName, 
        birthday, 
        sex, 
        adress, 
        location: {country, city}
    } = user;

    console.log(name, lastName, birthday, sex, adress, country, city);
}

// 3. Объедините два массива с помощью spread оператора

const players1 = ['Pozitiv4ik', 'Delphinate', 'MissLuck'];
const players2 = ['NaGiBatoR', 'SunnyGirl', 'Lion'];

const commonPlayers = [...players1, ...players2]; // объединяем массив
console.log(commonPlayers); 


// 4. Напишите функцию которая

// - на вход принимает объект футболиста в котором содержатся поля: name, age, team, salary
// - и возвращает строку 'Меня зовут [подставить имя], мне [подставить возраст]. Я играю за [подставить клуб], и моя зарплата [подставить зарплату].'
//   ! обязательно используйте деструктуризацию

{
    const soccerPlayer = {
        name: 'Месси',
        age: '35',
        team: 'Аргентину',
        salary: '1 000 000 000',
    }
    
    const {name, age, team, salary} = soccerPlayer
    console.log(`Меня зовут ${name}, мне ${age}. Я играю за ${team}, моя зарплата ${salary}`);
}

/* 5. Практика модулей

- Создайте папку modules-test
- Создайте index.html
- Напишите любые 5-7 модулей
- Напишите любые функции (на ваше усмотрение) в каждом из модулей
- Каждый модуль по итогу, должен быть импортирован в один главный модуль index.js и там заиспользован */

import { modules1 } from "./modules-test/module-1.js";
import modules2 from "./modules-test/module-2.js";
import { getTime } from "./modules-test/module-3.js";
import { addNumbers } from "./modules-test/module-4.js";
import { getRandomNumber } from "./modules-test/module-5.js";
let randomNum = getRandomNumber();  // Вызов функции и сохранение результата в переменную
console.log(`Результат: ${modules1()}`);
console.log(`Результат: ${modules2()}`);
console.log(`${getTime()}`);
console.log(addNumbers(2, 3));
console.log( randomNum + getRandomNumber());

     