'use strict';

//you code here

const util = require('node:util');

const attendanceList = require("./mockData.js")['attendanceList'];
const studentList = require("./mockData.js")['studentList'];

console.log(util.isDeepStrictEqual(attendanceList, studentList));


// ANSWER:
// 'use strict';

// const util = require('node:util');
// const studentList = require('./mockData.js').studentList;
// const attendanceList = require('./mockData.js').attendanceList;

// console.log(util.isDeepStrictEqual(studentList, attendanceList)); // true


// Use Case	                        Dot Notation	Bracket Notation
// Known property name	                ✅	            ✅
// Property name with spaces	        ❌	            ✅
// Dynamic property (via variable)	    ❌	            ✅