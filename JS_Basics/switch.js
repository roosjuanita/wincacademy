'use strict';
const prompt = require('prompt-sync')();

console.log("Please tell us your favourite animal:");
console.log("Choose one of: dog, cat, fish, hamster, horse or bunny");
const favouriteAnimal = prompt("");


// Write your code here

// Possible responses:
// console.log("My favourite animal has hair.");
// console.log("My favourite animal does not have hair.");
// console.log("My favourite animal fits in a car.");
// console.log("My favourite animal does not fit in a car.");
// console.log("My favourite animal likes to swim.");
// console.log("My favourite animal does not like to swim.");


// First switch: Checking for hair
switch (favouriteAnimal) {
    case "dog":
    case "cat":
    case "hamster":
    case "horse":
    case "bunny":
        console.log("My favourite animal has hair.");
        break;
    default:
        console.log("My favourite animal does not have hair.");
}

// Second switch: Checking if the animal fits in a car
switch (favouriteAnimal) {
    case "dog":
    case "cat":
    case "hamster":
    case "bunny":
        console.log("My favourite animal fits in a car.");
        break;
    default:
        console.log("My favourite animal does not fit in a car.");
}

// Third switch: Checking if the animal likes to swim
switch (favouriteAnimal) {
    case "dog":
    case "horse":
    case "fish":
        console.log("My favourite animal likes to swim.");
        break;
    default:
        console.log("My favourite animal does not like to swim.");
}