## Complete exercise

#### Task 🖥

1. Сделать деструктуризацию всех элементов массива users, кроме 'John' и вывести в console.log();

- const users = ['Bob', 'John', 'Anna', 'Veronika', ['Rick']];

2. Сделать деструктуризацию всех свойств объекта и вывести в console.log();

- const user = {
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

3. Объедините два массива с помощью spread оператора

const players1 = ['Pozitiv4ik', 'Delphinate', 'MissLuck'];
const players2 = ['NaGiBatoR', 'SunnyGirl', 'Lion'];

const commonPlayers =

4. Напишите функцию которая

- на вход принимает объект футболиста в котором содержатся поля: name, age, team, salary
- и возвращает строку 'Меня зовут [подставить имя], мне [подставить возраст]. Я играю за [подставить клуб], и моя зарплата [подставить зарплату].'
  ! обязательно используйте деструктуризацию

5. Практика модулей

- Создайте папку modules-test
- Создайте index.html
- Напишите любые 5-7 модулей
- Напишите любые функции (на ваше усмотрение) в каждом из модулей
- Каждый модуль по итогу, должен быть импортирован в один главный модуль index.js и там заиспользован
