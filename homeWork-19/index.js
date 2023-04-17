// С ниже приведенным объектом решить следующие задачи:

//     1. Создать строку из названий предметов написаных через запятую
//     2. Посчитать общее количнство студентов и учителей на всех предметах
//     3. Получить среднее количество студентов на всех пердметах
//     4. Создать массив из объектов предметов
//     5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему


// ```javascript
//     const subjects = {
//         mathematics: {
//             students: 200,
//             teachers: 6
//         },
//         biology: {
//             students: 120,
//             teachers: 6
//         },
//         geography: {
//             students: 60,
//             teachers: 2
//         },
//         chemistry: {
//             students: 100,
//             teachers: 3
//         }
//     }
// ```

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

// 1. Создаем строку из названий предметов написаных через запятую

const subjectsStr = Object.keys(subjects).join(', ');
console.log(subjectsStr);

// 2. Посчитаем общее количнство студентов и учителей на всех предметах

let allStudents = 0;
let allTeachers = 0;

Object.values(subjects).forEach(peoples =>{
    allStudents = allStudents + peoples.students;
    allTeachers = allTeachers + peoples.students;
});

console.log(`All students: ${allStudents}; All teachers: ${allTeachers}`);

// 3. Получаем среднее количество студентов на всех пердметах

console.log(`Student's average number: ${allStudents / Object.keys(subjects).length}`);

// 4. Создаем массив из объектов предметов

const subjectsArr = [];

for (let subjectName in subjects) {
    if (subjects.hasOwnProperty(subjectName)) {
        const subjectArr = {
            name: subjectName,
            students: subjects[subjectName].students,
            teachers: subjects[subjectName].teachers
        };
    subjectsArr.push(subjectArr);
    }
}
console.log(subjectsArr);

// 5. Получаем массив из предметов и отсортировываем по количеству преподавателей на факультете от большего к меньшему

const sortedArr = Object.entries(subjects).map(([name, { students, teachers }]) => 
    ({ name, students, teachers })).sort((a, b) => 
    b.teachers - a.teachers);

console.log(sortedArr);
