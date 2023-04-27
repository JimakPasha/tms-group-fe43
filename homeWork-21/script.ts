interface User {
    name: string;
    phone: string;
    email: string;
    animals?: string[];
    cars?: string[];
    hasChildren: boolean;
    hasEducation: boolean;
}

const users: User[] = [
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
    {
        name: "Nico Bellic",
        phone: "(09) 909 83 13",
        email: "nico@gmail.com",
        animals: ["snake"],
        cars: ["porsche"],
        hasChildren: true,
        hasEducation: false,
      },
      {
        name: "Travis Pastrana",
        phone: "(09) 709 13 93",
        email: "travis@gmail.com",
        animals: ["dog"],
        cars: ["bentley", "dodge"],
        hasChildren: false,
        hasEducation: true,
      },

  ];

function getUsersName(users: User[]): string {
    return users.map((user) => user.name).join(", ")
}

function getUsersCarsCount(users: User[]): number {
    return users.reduce((acc,user) => acc + (user.cars?.length || 0), 0)
}

function filterUsersWithEducation(users: User[]): User[] {
    return users.filter((user) => user.hasEducation);
}

function filterUsersByAnimals(users: User[]): User[] {
    return users.filter((user) => user.animals);
}

function getCarsBrands (users: User[]): string {
    const brands = new Set<string>();
    users.forEach((user) => {
        user.cars?.forEach((brand) => brands.add(brand.charAt(0).toUpperCase() + brand.slice(1)));
    });
    return Array.from(brands).join(", ");
}

const textForConsole = `Hi! Make sure your TS is configured correctly and the "console.log" command will works fine!
This object array contains users with the following names: ${getUsersName(users) + '.'}
These users have cars (of course) and their total number is ${getUsersCarsCount(users) + '!'}
Users have cars of the following brands: ${getCarsBrands(users) + '.'}
Some of the users on this list have an education. Here are the users who have it - ${getUsersName(filterUsersWithEducation(users)) + '.'}
These users have animals at home: ${getUsersName(filterUsersByAnimals(users)) + '.'}`;

let i = 0;
function printText() {
  if (i < textForConsole.length) {
    process.stdout.write(textForConsole.charAt(i));
    i++;
    setTimeout(printText, 25);
  }
}

printText();