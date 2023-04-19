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
};

//1. Создать строку из названий предметов написаных через запятую

const subjectNames = Object.keys(subjects);
console.log(subjectNames.join(','));

//2. Посчитать общее количнство студентов и учителей на всех предметах

let allStudents = 0;
let allTeachers = 0;

Object.values(subjects).forEach(peoples => {
    allStudents += peoples.students;
    allTeachers += peoples.teachers;
});

console.log(`total students: ${allStudents}`);
console.log(`total teahers: ${allTeachers}`);

//3. Получить среднее количество студентов на всех пердметах

console.log(`middle students: ${allStudents / Object.keys(subjects).length}`);

//4. Создать массив из объектов предметов

// console.log(subjectNames);
const subjectsArray = Object.entries(subjects).map(([name, { students, teachers }]) => {
    return { name, students, teachers };
});

console.log(subjectsArray);

//5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему 

const subjectsArr = Object.entries(subjects);
subjectsArr.sort((a, b) => {
    return b[1].teachers - a[1].teachers;
});
console.log(subjectsArr);