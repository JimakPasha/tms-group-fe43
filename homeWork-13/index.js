

// Сделать деструктуризацию всех элементов массива users, кроме 'John' и вывести в console.log();

const users = ['Bob', 'John', 'Anna', 'Veronika', ['Rick']];
const [user1, , user3, user4, [user5]] = users;
console.log(user1);
console.log(user3);
console.log(user4);
console.log(user5);



// Сделать деструктуризацию всех свойств объекта и вывести в console.log();

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
const {name, lastName, birthday,sex, adress, location : {country,city}, email} = user;
console.log(name);
console.log(lastName);
console.log(birthday);
console.log(sex);
console.log(adress);
console.log(country);
console.log(city);
console.log(email);


// Объедините два массива с помощью spread оператора
const players1 = ['Pozitiv4ik', 'Delphinate', 'MissLuck']; 
const players2 = ['NaGiBatoR', 'SunnyGirl', 'Lion'];

const commonPlayers = [...players1, ...players2];
console.log(commonPlayers);


// Напишите функцию которая
// на вход принимает объект футболиста в котором содержатся поля: name, age, team, salary
// и возвращает строку 'Меня зовут [подставить имя], мне [подставить возраст]. Я играю за [подставить клуб], и моя зарплата [подставить зарплату].' ! обязательно используйте деструктуризацию

const footballplayer = {
    name: 'John',
    age: 27,
    team: "Montenegro",
    salary: "45 000 usd",
};

function information(footballplayer) {
    const {name, age, team, salary} = footballplayer;
    console.log(`Меня зовут ${name}, мне ${age}. Я играю за ${team}, и моя зарплата ${salary}.`)
};

information(footballplayer);

