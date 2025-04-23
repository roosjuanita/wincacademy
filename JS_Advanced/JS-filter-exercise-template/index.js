'use strict';

// JS filter() exercise

const studentList = require('./mockData.js').data;
let frenchCount = 0;
let spanishCount = 0;
let germanCount = 0;

studentList.forEach((student) => {
    switch(student.language) {
        case "French":
            frenchCount++
            break;
        case "Spanish":
            spanishCount++  
            break;
        case "German":
            germanCount++  
            break;  
        }
    });

// French students
const frenchStudents = studentList.filter(({language}) =>
    language == 'French');
console.log(`French students: ${frenchCount}\n`);
console.log( frenchStudents);

// Spanish Students
const spanishStudents = studentList.filter(({language}) =>
    language == 'Spanish');
console.log(`Spanish students: ${spanishCount}\n`);
console.log(spanishStudents);

// German Students
const germanStudents = studentList.filter(({language}) =>
    language == 'German');
console.log(`German students: ${germanCount}\n`);
console.log(germanStudents);

