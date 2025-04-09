'use strict';
const prompt = require("prompt-sync")();

// Enter an ingredient in the console that the user is allergic to
// The program should check whether this ingredient is included in the list of ingredients that they use in their recipes.
// Receive output that tells them if the person is safe or not


const check = function(allergy) {
    const ingredients = ['butter', 'milk', 'flour', 'gluten', 'yeast', 'seeds', 'nuts']

    if (ingredients.includes(allergy.toLowerCase())) {
        console.log('DANGER');
    } else {
        console.log('Safe');
    }
};

let addAllergy = 'Y'

while (addAllergy === 'Y') {
    const allergy = prompt('What are you allergic to? ');
    check(allergy);
    addAllergy = prompt('Would you like to enter another ingredient? Type Y or N ')
}

