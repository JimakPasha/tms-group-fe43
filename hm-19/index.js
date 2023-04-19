//1. Создать строку из названий предметов написаных через запятую
//2. Посчитать общее количeство студентов и учителей на всех предметах
//3. Получить среднее количество студентов на всех пердметах
//4. Создать массив из объектов предметов
//5. Получить массив из предметов и отсортировать по количеству 
//преподавателей на факультете от большего к меньшему

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

//1
 const keys = Object.keys(subjects).join(',');
 console.log(keys);

 //2
let sumPeople = Object.values(subjects)
let sum = sumPeople.reduce((acc,item) => 
(item.students) + (item.teachers) + acc,0);
console.log(sum);

 //3 
 let averageValue = (sumPeople.reduce((acc,item) => (item.students) + acc,0 )) /sumPeople.length;
 console.log(averageValue);
 
 

