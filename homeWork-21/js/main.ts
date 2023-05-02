// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

//     1. Создать строку из имен пользователей через запятую
//     2. Посчитать общее количнство машин у пользователей
//     3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
//     4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
//     5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

interface IUSER {
    name: string;
    phone: string;
    email: string;
    animals: string[];
    cars: string[];
    hasChildren: boolean;
    hasEducation: boolean;
}

type PartialIUser = Partial<IUSER>

const users:PartialIUser[] = [
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
    }
]

//1. Создать строку из имен пользователей через запятую
const stringNames:string= users.map((item)=>item.name).join(',');
console.log(stringNames);

//2. Посчитать общее количнство машин у пользователей
const sumCars:number = users.reduce((acc:number,item)=>{
    if(item.cars !== undefined){
        acc +=item.cars.length;
    }
    return acc
},0)
console.log(sumCars);

// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
function arrayUsersWithEducation(arrayUsers:PartialIUser[]):PartialIUser[] {
    let arrayUsersWithEducation = arrayUsers.filter((item)=>item.hasEducation === true);
    return arrayUsersWithEducation;
}
console.log(arrayUsersWithEducation(users))

// 4.Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
function arrayUsersWithAnimals(arrayUsers:PartialIUser[]):PartialIUser[] {
    let arrayUsersWithAnimals = arrayUsers.filter((item)=>item.animals);
    return arrayUsersWithAnimals;
}
console.log(arrayUsersWithAnimals(users))

//5.Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
function stringMarkAuto(arrayUsers:PartialIUser[]):string{
    let arrayMarkAuto = arrayUsers.map((item) => item.cars || []);
    let flatArrayMarkAuto = arrayMarkAuto.flat();
    let stringMarkAuto = flatArrayMarkAuto.join(',');
    return stringMarkAuto;
}
 console.log(stringMarkAuto(users))
    