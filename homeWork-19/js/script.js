// С ниже приведенным объектом решить следующие задачи:
//     1. Создать строку из названий предметов написаных через запятую
//     2. Посчитать общее количнство студентов и учителей на всех предметах
//     3. Получить среднее количество студентов на всех пердметах
//     4. Создать массив из объектов предметов
//     5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

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

//task-01
let strSubjects = Object.keys(subjects).join(',');
console.log(strSubjects)
//task-02
let arrayPeople = Object.values(subjects)
console.log(arrayPeople)
let sumPeople = arrayPeople.reduce((acc,item)=>(item.teachers+item.students)+ acc,0);
console.log(sumPeople);
//task-03
let averageCountStudents = (arrayPeople.reduce((acc,item)=>(item.students)+ acc,0))/arrayPeople.length;
console.log(averageCountStudents);
//task-04
let arraySubjects = []
for(item in subjects){
    arraySubjects.push({
        subject:item,
        students:subjects[item].students,
        teachers:subjects[item].teachers,
    })
}
console.log(arraySubjects);
//task-05
let getArray = Object.entries(subjects);
let newArray = getArray.map(([subject, {students, teachers}]) => ({subject, students, teachers}));
let sortArray = newArray.sort((a, b) => b.teachers- a.teachers);
console.log(sortArray);





