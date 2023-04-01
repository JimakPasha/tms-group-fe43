// task 1
const users = ['Bob', 'John', 'Anna', 'Veronika', ['Rick']];

const [ name1, , name3, name4,[name5]] = users;
console.log(name1, name3,name4,name5);

//task 2
const user = { 
    names: 'Alex', 
    lastName: 'McCallister', 
    birthday: '12.04.1994',
    sex: 'male', 
    adress: null, 
    location: {
            country: 'England', 
            city: 'London' }, 
    email: null, 
};


const {names, lastName, birthday, sex, adress, location : { country, city }, email} = user;
console.log(names,lastName, birthday, sex, adress, country, city, email);

//task 3
const players1 = ['Pozitiv4ik', 'Delphinate','MissLuck']; 
const players2 = ['NaGiBatoR','SunnyGirl', 'Lion', ...players1];
console.log(players2);

//task 4

function football({name, age, team, salary}) {
 console.log(`Меня зовут ${name}, мне ${age}. Я играю за ${team}, и моя зарплата ${salary}.`);

}
 const users3 = {
    name: 'Tim',
    age: 25,
    team: 'FCB',
    salary: 100000,
 }
 football(users3);

 