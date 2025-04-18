'use strict';

// JS findIndex() example

const guestList = require('./mockData.js').data;

const findIndexByFirstName = (searchItem) => guestList.findIndex(person => person.first_name.toLowerCase() === searchItem.toLowerCase());

console.log(findIndexByFirstName("Gabby")); // 2

console.log(findIndexByFirstName("Bob")); // -1 --> is not in the list