interface IUsers {
  name: string;
  phone: string;
  email: string;
  animals?: string[];
  cars?: string[];
  hasChildren: boolean;
  hasEducation: boolean;
}
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

// 1. Создать строку из имен пользователей через запятую
const strNameUsers: string = users.map(({ name }) => name).join(", ");
console.log(strNameUsers);

// 2. Посчитать общее количнство машин у пользователей
const numOfCar: number = users.reduce((accum: number, user) => {
  if (user.cars !== undefined) {
    accum += user.cars.length;
  }
  return accum;
}, 0);
console.log(numOfCar);

// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
let usersWithEduc: IUsers[];
function isHasEducation(users: IUsers[]): IUsers[] {
  usersWithEduc = users.filter(({ hasEducation }) => {
    if (hasEducation) {
      return users;
    }
  });
  return usersWithEduc;
}
console.log(isHasEducation(users));

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
let usersWithAnimal: IUsers[];
function isHasAnimal(users: IUsers[]): IUsers[] {
  usersWithAnimal = users.filter(({ animals }) => {
    if (animals) {
      return users;
    }
  });
  return usersWithAnimal;
}
console.log(isHasAnimal(users));

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
function getCarBrands(users: IUsers[]): string {
  const carBrands = users
    .map((user) => user.cars || [])
    .flatMap((cars) => cars)
    .join(", ");
  return carBrands;
}
console.log(getCarBrands(users));
