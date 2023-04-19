const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}


// 1. Создать строку из названий предметов написаных через запятую

const subjectNames = Object.keys(subjects).join(', ');

console.log(subjectNames);

// 2. Посчитать общее количнство студентов и учителей на всех предметах

let totalStudents = 0;
let totalTeachers = 0;

for (let subject in subjects){
    totalStudents += subjects[subject].students;
    totalTeachers += subjects[subject].teachers;
}
console.log(`Total students: ${totalStudents}, Total teachers: ${totalTeachers}`);


// 3. Получить среднее количество студентов на всех пердметах

const subjectNumber = Object.keys(subjects).length;
const medianStudents = totalStudents / subjectNumber;

console.log(`Average students number is: ${medianStudents}`);


// 4. Создать массив из объектов предметов

const subjectArr = [];

for (let subject in subjects){
    subjectArr.push({
        subjectName: subject,
        studentsCount: subjects[subject].students,
        teachersCount: subjects[subject].teachers,
    })
}

console.log(subjectArr);


// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему


const sortedArray = Object.entries(subjects)
.map(([subject, {students, teachers}]) => ({subject, students, teachers}))
.sort((a, b) => b.teachers- a.teachers);

console.log(sortedArray);


// С ниже приведенным массивом пользователей решить следующие задачи:

//     1. Получить средний возраст пользователей.
//     2. Отсортировать массив по возрасту от большего к меньшему.
//     3. Написать функцию, которая бы отвечала булевым значением на вопрос: есть ли пользователь соответствующего возраста. 
//     Например, есть ли пользователь, которому 22 года? Ответ должен быть: true

const users = [
    {
        id: 1,
        username: 'Michael Lawson',
        age: 22,
    },
    {
        id: 2,
        username: 'Tom Spot',
        age: 32,
    },
    {
        id: 3,
        username: 'Kate Ford',
        age: 18,
    }
];


//     1. Получить средний возраст пользователей.

let averageAge = 0;

users.forEach((user) => {
    averageAge += user.age / users.length;
})

console.log(averageAge);


// 2. Отсортировать массив по возрасту от большего к меньшему.


const sortedUsers = users.sort((a, b) => b.age - a.age);

console.log(sortedUsers);

// 3. Написать функцию, которая бы отвечала булевым значением на вопрос: есть ли пользователь соответствующего возраста. 
// //     Например, есть ли пользователь, которому 22 года? Ответ должен быть: true


const isUserWithAge = (age) => {
    return users.some((user) => user.age === age);
  };
  console.log(isUserWithAge(30));