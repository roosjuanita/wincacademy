'use strict';

const list = require('./mockData.js').data;

const birthyear = new Date().getFullYear() - 18;

const everyoneIsAbove18 = list.every(person => person.birth_year <= birthyear)
console.log(everyoneIsAbove18)