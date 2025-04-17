'use strict';

// JS mutable & immutable operations exercise solution

// Object
const car = {
    modelName: "Prius",
    brand: "Toyota",
    engineType: "Hybrid",
    wheels: 4,
    color: "red"
};

// Your code here
const newCar = {
    ...car,
    hasAirbag: true,
    color: "blue"
}
console.log(car)
console.log(newCar)


// Array
const teas = ["Rooibos tea", "Green tea", "Black tea"];

// Your code here
const newTea = [...teas, "Mint tea"];

console.log(teas);
console.log(newTea);