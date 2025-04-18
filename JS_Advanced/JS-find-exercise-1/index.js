// JS find() exercise 

'use strict';
const prompt = require('prompt-sync')();

const guestList = require('./mockData.js').data;

const firstName = prompt('What is your first name? ').toLowerCase();;

const isFound = (element) => {
    return firstName === element.first_name.toLowerCase()
};

const personExists = guestList.find(isFound); 

if (personExists) {
    console.log(personExists.first_name, personExists.last_name)
    console.log(personExists.birth_year)
} else {
    console.log('Person is not on the list.')
}



// OPLOSSING

// const searchItem = prompt("Please enter a name");

// const foundPerson = guestList.find(element => element.first_name.toLowerCase() === searchItem.toLowerCase());

// if (foundPerson != undefined){
//   console.log(`Found!\nName is ${foundPerson.first_name} ${foundPerson.last_name}. Born in ${foundPerson.birth_year}.`);
// } else {
//   console.log("Not found")
// };



