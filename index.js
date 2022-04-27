let student =  [
    { nama: "Harry Potter", nilai: 80, asrama: "Griffindor" },
    { nama: "Cho Chang", nilai: 60, asrama: "Ravenclaw" },
    { nama: "Cedrig diggory", nilai: 92, asrama: "Ravenclaw" },
    { nama: "Pansy Parkinson", nilai: 70, asrama: "Slyterin" },
    { nama: "Dean Thomas", nilai: 50, asrama: "Griffindor" },
    { nama: "Ginny Weasley", nilai: 10, asrama: "Griffindor" },
    { nama: "Gregory Goyle", nilai: 25, asrama: "Slyterin" },
    { nama: "Penelope Clearwater", nilai: 10, asrama: "Ravenclaw" },
    { nama: "Tom Marvolo Riddle", nilai: 90, asrama: "Slyterin" },
];

let studentResult = {};

for (let i = 0; i < student.length; i++) {
    if (studentResult[student[i].asrama] === undefined) {
        studentResult[student[i].asrama] = { passed: [], failed: [] };
    }
    
    if (student[i].nilai >= 70) {
        studentResult[student[i].asrama].passed.push(student[i].nama);
    } else {
        studentResult[student[i].asrama].failed.push(student[i].nama);
    }
}

console.log(studentResult);

let studentScore = {};
for (let i = 0; i < student.length; i++) {
    if (studentScore[student[i].asrama] === undefined) {
        studentScore[student[i].asrama] = { passed: [], failed: [] };
    }

    if (student[i].nilai >= 90) {
        var scores = "A";
    } else if (student[i].nilai >= 80){
        var scores = "B";
    } else if (student[i].nilai >= 70){
        var scores = "C";
    } else if (student[i].nilai >= 50){
        var scores = "D";
    } else {
        var scores = "E";
    }
    
    if (student[i].nilai >= 70) {
        studentScore[student[i].asrama].passed.push({nama:student[i].nama, score:scores});
    } else {
        studentScore[student[i].asrama].failed.push({nama:student[i].nama, score:scores});
    }
}

console.log(studentScore);