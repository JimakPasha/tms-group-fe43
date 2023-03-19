//task01
const users = ['Bob', 'John', 'Anna', 'Veronika', ['Rick']];

const[name1,,name3,name4,[name5]]=users;

console.log(name1,name3,name4,name5);

//task02
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

const {name,lastName,birthday,sex,adress,location:{country,city},email} = user
console.log(name,lastName,birthday,sex,adress,country,city,email);

//task03

const players1 = ['Pozitiv4ik', 'Delphinate', 'MissLuck'];
const players2 = ['NaGiBatoR', 'SunnyGirl', 'Lion'];

const commonPlayers = [...players1,...players2]
console.log(commonPlayers);

//tasko4
function infoAboutFootballer({name, age, team, salary}){
    let person = `Меня зовут ${name}, мне ${age}. Я играю за ${team}, и моя зарплата ${salary}$`
    return person 
}
const footballer01 = {
    name:'Максим',
    age:35,
    team:'Спартак',
    salary:500
}
const footballer02 = {
    name:'Артем',
    age:27,
    team:'Зенит',
    salary:750
}
console.log(infoAboutFootballer(footballer01));
console.log(infoAboutFootballer(footballer02));



