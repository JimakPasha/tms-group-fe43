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

// 1. Создать строку из названий предметов написаных через запятую

let subjectsNames = Object.keys(subjects).join(",");
console.log(subjectsNames);

// 2. Посчитать общее количнство студентов и учителей на всех предметах

function totalQuantity(subjects) {
  let sum = 0;
  for (let key in subjects) {
    if (typeof subjects[key] === "object") {
      sum += totalQuantity(subjects[key]);
    } else if (typeof subjects[key] === "number") {
      sum += subjects[key];
    }
  }
  return sum;
}

let total = totalQuantity(subjects);
console.log(`total quantity of students and teachers: ${total}`);

// 3. Получить среднее количество студентов на всех пердметах

const subjectCount = Object.keys(subjects).length;

let studentsCount = 0;

for (let students in subjects) {
  studentsCount += subjects[students].students;
}

const averageStudents = studentsCount / subjectCount;
console.log(`Average number of students: ${averageStudents}`);

// 4. Создать массив из объектов предметов

const arr = [];

for (let subject in subjects) {
  if (subjects.hasOwnProperty(subject)) {
    arr.push({
      name: subject,
      students: subjects[subject].students,
      teachers: subjects[subject].teachers,
    });
  }
}

console.log(arr);

// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const sortedSubjects = Object.entries(subjects)
  .map(([name, { students, teachers }]) => ({ name, students, teachers }))
  .sort((a, b) => b.teachers - a.teachers);
console.log(sortedSubjects);

// Task 2

const users = [
  {
    id: 1,
    username: "Michael Lawson",
    age: 22,
  },
  {
    id: 2,
    username: "Tom Spot",
    age: 32,
  },
  {
    id: 3,
    username: "Kate Ford",
    age: 18,
  },
];

//     1. Получить средний возраст пользователей.

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
console.log(getAverageAge(users));

//     2. Отсортировать массив по возрасту от большего к меньшему.

console.log(users.sort((a, b) => (a.age < b.age ? 1 : -1)));

//     3. Написать функцию, которая бы отвечала булевым значением на вопрос: есть ли пользователь соответствующего возраста.
//     Например, есть ли пользователь, которому 22 года? Ответ должен быть: true

const isUserWithAge = (age) => {
  return users.some((user) => user.age === age);
};
console.log(isUserWithAge(15));
