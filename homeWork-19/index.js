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