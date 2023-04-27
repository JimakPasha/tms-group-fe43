interface IUser {
    name: string,
    phone: string,
    email: string,
    animals?: string[],
    cars?: string[],
    hasChildren: boolean,
    hasEducation: boolean
};


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
];

// 1 - Создать строку из имен пользователей через запятую
function getStringName(users: IUser[]): string {
    return users.map((user) => user.name).join(', ');
};

//2 - Посчитать общее количнство машин у пользователей
function getCars(users: IUser[]): number {
    return users.reduce((acc, user) => acc + ((user.cars && user.cars.length) || 0), 0);
};

//3 - Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
function hasUserEducation(users: IUser[]): IUser[] {
    return users.filter((user) => user.hasEducation);
};

//4 - Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
function hasUserAnimal(users: IUser[]): IUser[] {
    return users.filter((user) => user.animals);
};

//5 - Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
function getCarsName(users: IUser[]): string {
    const carBrands = users.reduce<string[]>((acc, user) => {
        if (user.cars) {
            acc.push(...user.cars);
        }
        return acc;
    }, []);

    return carBrands.join(", ");
};

console.log(getCarsName(users));
