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


// 1
const subjectNames = Object.keys(subjects).join(",");
console.log(subjectNames);

// 2
let totalStudents = 0;
let totalTeachers = 0;
for (let subject in subjects) {
    totalStudents += subjects[subject].students;
    totalTeachers += subjects[subject].teachers;
}
console.log(`Total students: ${totalStudents}`); 
console.log(`Total teachers: ${totalTeachers}`);

// 3
const subjectCount = Object.keys(subjects).length;
const averageStudents = totalStudents / subjectCount;
console.log(`Average students per subject: ${averageStudents}`);

//4
const subjectArray = [];
for (let subject in subjects) {
    subjectArray.push({
        name: subject,
        students: subjects[subject].students,
        teachers: subjects[subject].teachers
    });
}
console.log(subjectArray);

//5
const sortedSubjects = Object.entries(subjects)
    .map(([name, { students, teachers }]) => ({ name, students, teachers }))
    .sort((a, b) => b.teachers - a.teachers);
console.log(sortedSubjects);