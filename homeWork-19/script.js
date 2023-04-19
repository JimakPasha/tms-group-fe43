// Дан объект:
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
const subjectNames = Object.keys(subjects).map(subject => subject);
const subjectsString = subjectNames.join(", ");

console.log(subjectsString);


// 2. Посчитать общее количнство студентов и учителей на всех предметах
const students = Object.values(subjects).reduce((acc, cur) => acc + cur.students, 0);
const teachers = Object.values(subjects).reduce((acc, cur) => acc + cur.teachers, 0);

console.log(`Total number of students: ${students}`);
console.log(`Total number of teachers: ${teachers}`);


// 3. Получить среднее количество студентов на всех пердметах
const subjectNames1 = Object.values(subjects).reduce((acc, cur) => acc + cur.students, 0);
const averageStudents = subjectNames1 / Object.keys(subjects).length;

console.log(`Average students: ${averageStudents}`);


// 4. Создать массив из объектов предметов
const subjectArray = [];
for (let subject in subjects) {
    subjectArray.push({
        students: subjects[subject].students,
        teachers: subjects[subject].teachers,
    });
}
console.log(subjectArray);


// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
const sortedSubjects = Object.values(subjects)
  .sort((a, b) => b.teachers - a.teachers)
  .map(({ students, teachers }) => ({ students, teachers }));

console.log(sortedSubjects);