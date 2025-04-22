'use strict';

// JS filter() exercise

const studentList = require('./mockData.js').data;


// French students
const frenchStudents = studentList.filter(({language}) =>
    language == 'French');
console.log("French students:");
console.log(frenchStudents);

// Spanish Students
const spanishStudents = studentList.filter(({language}) =>
    language == 'Spanish');
console.log("Spanish students:");
console.log(spanishStudents);

// German Students
const germanStudents = studentList.filter(({language}) =>
    language == 'German');
console.log("German students:");
console.log(germanStudents);