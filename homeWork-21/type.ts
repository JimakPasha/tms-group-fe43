const users: IUsers[] = [
  {
    name: "Harry Felton",
    phone: "(09) 897 33 33",
    email: "felton@gmail.com",
    animals: ["cat"],
    cars: ["bmw"],
    hasChildren: false,
    hasEducation: true,
  },
  {
    name: "May Sender",
    phone: "(09) 117 33 33",
    email: "sender22@gmail.com",
    hasChildren: true,
    hasEducation: true,
  },
  {
    name: "Henry Ford",
    phone: "(09) 999 93 23",
    email: "ford0@gmail.com",
    cars: ["bmw", "audi"],
    hasChildren: true,
    hasEducation: false,
  },
];

interface IUsers {
  name: string;
  phone: string;
  email: string;
  animals?: string[];
  cars?: string[];
  hasChildren: boolean;
  hasEducation: boolean;
}

// 1. Создать строку из имен пользователей через запятую
const userName: string = users.map(({ name }) => name).join(", ");
console.log(userName);

// 2. Посчитать общее количнство машин у пользователей
const sumCars = users.reduce((acc, user) => {
  if (user.cars) {
    return acc + user.cars.length;
  } else {
    return acc;
  }
}, 0);

console.log(`Пользователь имеет: ${sumCars}, авто`);

// 3. Создать функцию, которая бы принимала массив пользователей
//    и отфильтровывала пользователей на наличие образования
function userFilters(users: IUsers[]): IUsers[] {
  return users.filter((user) => user.hasEducation);
}
const filteredUsers = userFilters(users);

console.log(filteredUsers);

// 4. Создать функцию, которая бы принимала массив пользователей
//    и отфильтровывала пользователей на наличие животных
function userFiltersAnimals(users: IUsers[]): IUsers[] {
  return users.filter((user) => user.animals);
}
const filteredAnimals = userFiltersAnimals(users);

console.log(filteredAnimals);

// 5. Создать функцию, которая бы принимала массив пользователей
//    и отдавала бы  строку с названиями марок автомобилей через запятую
function userStringCars(users: IUsers[]): string[] {
  return users
    .map((user) => (user.cars ? user.cars.join(", ") : ""))
    .filter((carStr) => carStr !== "");
}
console.log(userStringCars(users));
