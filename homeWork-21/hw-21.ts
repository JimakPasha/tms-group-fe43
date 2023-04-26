interface IUser {
  name: string;
  phone: string;
  email: string;
  animals?: string[];
  cars?: string[];
  hasChildren: boolean;
  hasEducation: boolean;
}

const users: IUser[] = [
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

function getStringNames(arr: IUser[]): string {
  return arr.map(({ name }) => name).join(", ");
}
// console.log(getStringNames(users));

function getCarrQuantity(arr: IUser[]): number {
  return arr.reduce((acc, { cars }) => (cars ? (acc += cars.length) : acc), 0);
}
// console.log(getCarrQuantity(users));

function userEducationFiltered(arr: IUser[]): IUser[] {
  return arr.filter(({ hasEducation }) => hasEducation);
}
// console.log(userEducationFiltered(users));

function getAnimalsOwner(arr: IUser[]): IUser[] {
  return arr.filter(({ animals }) => animals);
}
// console.log(getAnimalsOwner(users));

function getStringCars(arr: IUser[]): string {
  return arr.map(({ cars }) => (cars ? cars.join(", ") : ", ")).join("");
}
// console.log(getStringCars(users));
