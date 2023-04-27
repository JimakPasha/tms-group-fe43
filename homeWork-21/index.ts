
// 1. Создать строку из имен пользователей через запятую
// 2. Посчитать общее количнство машин у пользователей
// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую



const users: IUser[] = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]

// 1. Создать строку из имен пользователей через запятую


interface IUser {
    name: string;
    phone: string;
    email: string;
    animals?: string[];
    cars?: string[];
    hasChildren: boolean;
    hasEducation: boolean;
}


function makeString(users: IUser[]): string{
    const arrNames: string[] = [];

    users.forEach(({name}) => {
        arrNames.push(name);
    })

    return arrNames.join(', ');
}

console.log(makeString(users));


// 2. Посчитать общее количнство машин у пользователей


function countCars(users: IUser[]) :number {
    
    return users.reduce((acc, user) => acc + (user.cars?.length || 0), 0)

}

console.log(countCars(users));


// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования

function findEducation(users: IUser[]) : IUser[]{
    return users.filter((user) => user.hasEducation)
}

console.log(findEducation(users));




// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных


function filterUsersWithAnimals(users: IUser[]): IUser[]{
    return users.filter((user) => user.animals)
}

console.log(filterUsersWithAnimals(users));


// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую


function makeStringWithCars(users: IUser[]): string{
let carsList: string[] = [];

    users.forEach((user) => {
        user.cars?.forEach((car) => carsList.push(car));
    })

    return carsList.join(', ');
}

console.log(makeStringWithCars(users));