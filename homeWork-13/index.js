// Task 1

const users = ['Bob', 'John', 'Anna', 'Veronika', ['Rick']];

const [name1, , name2, name3, [name4]] = users;

console.log(name1, users[1], name2, name3, name4);


// Task 2

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

const {name, lastName, birthday, sex, adress, location:{country, city}, email} = user;

console.log(name, lastName, birthday, sex, adress, country, city, email);


// Task 3

const players1 = ['Pozitiv4ik', 'Delphinate', 'MissLuck'];

const players2 = ['NaGiBatoR', 'SunnyGirl', 'Lion'];

const commonPlayers = [...players1, ...players2];

console.log(commonPlayers);


// Task 4

const footballer = {
    name: 'Nunez',
    age: '24',
    team: 'Liverpool',
    salary: '100000 GPB',
}

function createString(player){
    const {name, age, team, salary} = player;
    return console.log(`Меня зовут ${name}, мне ${age}. Я играю за ${team}, и моя зарплата ${salary}.`);
}

createString(footballer);



// Modules

import { capitalize } from "./modules-test/module-1.js";
import { summarizeNumbers } from "./modules-test/module-2.js";
import { getRandomNumber } from "./modules-test/module-3.js";
import { getTime } from "./modules-test/module-4.js";
import { sliceWord } from "./modules-test/module-5.js";

console.log(capitalize('telephone'));
console.log(summarizeNumbers());
console.log(getRandomNumber());
console.log(getTime());
console.log(sliceWord('telephone', 0, 3));
