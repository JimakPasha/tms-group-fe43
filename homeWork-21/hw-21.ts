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
  return arr.reduce((acc, { name }) => {
    return (acc += name + ", ");
  }, "");
}
// console.log(getStringNames(users));

function getCarrQuantity(arr: IUser[]): number {
  let quant: number = 0;
  arr.forEach(({ cars }) => {
    if (cars) quant += cars.length;
  });
  return quant;
}
// console.log(getCarrQuantity(users));

function educationSort(arr: IUser[]): IUser[] {
  return arr.sort((a, b) => +a.hasEducation - +b.hasEducation);
}
// console.log(educationSort(users));

function getAnimalsOwner(arr: IUser[]): IUser[] {
  return arr.filter((item) => {
    if (item.animals) return item;
  });
}
// console.log(getAnimalsOwner(users));

function getStringCars(arr: IUser[]): string {
  let carsArr: string[] = [];
  arr.forEach(({ cars }) => {
    if (cars) carsArr.push(cars.join(", "));
  });
  return carsArr.join(", ");
}
// console.log(getStringCars(users));
