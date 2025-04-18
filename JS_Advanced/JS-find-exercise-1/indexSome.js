'use strict';

// JS find() exercise

const guestList = require('./mockData.js').data;

// Your code here

const areThereWomen = guestList.some(({ gender }) => gender === "Female");
console.log(areThereWomen)

const areTherePeopleBornIn1992 = guestList.some(( { birth_year } ) => birth_year === 1992)
console.log(areTherePeopleBornIn1992)