const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

studentReport.forEach(function (score) {
    if (score < LIMIT) {
        console.log(score);
    }
});

for (student in studentReport)
    if (score < LIMIT) {
        console.log(score);
    }