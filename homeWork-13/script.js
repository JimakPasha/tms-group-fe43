//first task

const users = ["Bob", "John", "Anna", "Veronika", ["Rick"]];
const [first, , ...rest] = users;
console.log(first);
console.log(rest);

//second task
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

//third task
const players1 = ["Pozitiv4ik", "Delphinate", "MissLuck"];
const players2 = ["NaGiBatoR", "SunnyGirl", "Lion"];

const commonPlayers = [...players1, ...players2];
console.log(commonPlayers);

//fourth task
function getFootballerInfo({ name, age, team, salary }) {
  return `Меня зовут ${name}, мне ${age}. Я играю за ${team}, и моя зарплата ${salary}.`;
}

const footballer = {
  name: "Лионель Месси",
  age: 34,
  team: "Пари Сен-Жермен",
  salary: "30 миллионов евро в год",
};

console.log(getFootballerInfo(footballer));
