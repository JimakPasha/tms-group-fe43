const subjects = {
  mathematics: {
    students: 200,
    teachers: 6,
  },
  biology: {
    students: 120,
    teachers: 6,
  },
  geography: {
    students: 60,
    teachers: 2,
  },
  chemistry: {
    students: 100,
    teachers: 3,
  },
};

let academicSubject = "";
let peopleSum = 0;
let averageStudents = 0;
let count = 0;
let itemsArray = [];
let sortedArray = [];

for (const subject in subjects) {
  academicSubject += subject + ", ";
  //
  peopleSum += subjects[subject].students;
  peopleSum += subjects[subject].teachers;
  //
  averageStudents += subjects[subject].students;
  count++;
  //
  itemsArray.push(subjects[subject]);
  //
  sortedArray.push(subjects[subject]);
  sortedArray.sort((a, b) => b.teachers - a.teachers);
}

console.log("Способ циклом");

console.log("1. Названия предметов:", academicSubject);
console.log("2. Сумма людей:", peopleSum);
console.log("3. Среднее количество людей:", averageStudents / count);
console.log("4. Массив из объектов предметов:", itemsArray);
console.log("5. Отсортированный массив:", sortedArray);

console.log("Способ методами");

let peoples = 0;
let quantity = Object.keys(subjects).length;
let studs = 0;
let arrItms = [];
let arrSort = [];

Object.values(subjects).forEach((item) => {
  peoples += Object.values(item).reduce((a, b) => a + b);
  //
//   quantity++;
  studs += item.students;
  //
  arrItms.push(item);
  //
  arrSort = [...arrItms];
  arrSort.sort((a, b) => a.teachers - b.teachers);
});

console.log("1. Названия предметов:", Object.keys(subjects).join(", "));
console.log("2. Сумма людей:", peoples);
console.log("3. Среднее количество людей:", studs / quantity);
console.log("4. Массив из объектов предметов:", arrItms);
console.log("5. Отсортированный массив:", arrSort);
