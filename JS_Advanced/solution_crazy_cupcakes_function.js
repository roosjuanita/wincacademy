'use strict';
const prompt = require("prompt-sync")();

// Crazy Cupcake Surprise generator

const getRandomFlavor = function() {
  const cupcakeFlavor = ["vanilla", "chocolate", "carrot", "lemon"];
  const randomFlavor = cupcakeFlavor[Math.floor(Math.random() * 4)];
  return randomFlavor;
};

const getRandomFrosting = function() {
  const frostings = ["cream cheese", "buttercreme", "meringue", "tiramisu"];
  const randomFrosting = frostings[Math.floor(Math.random() * 4)];
  return randomFrosting;
};

// Function 1
const generateCupcake = function(flavor = getRandomFlavor(), frosting = getRandomFrosting()) {
  console.log(flavor)
  console.log(`Your Crazy Cupcake surprise is a ${flavor} cupcake with ${frosting} frosting. \n`);
};

let flavor = prompt("What flavor?");
let frosting = prompt("What frosting?");
if (!flavor) flavor = getRandomFlavor();
if (!frosting) frosting = getRandomFrosting();
generateCupcake(flavor, frosting);

// Function 2, hazelnuts, rainbow sprinkles, chocolate drops
const generateToppings = function(...toppings) {
  console.log(`The topping(s) are:`);
  for (const topping of toppings) {
    console.log(`* ${topping}`);
  }
};

const toppingsInput = prompt("Enter the toppings, separated by commas:");
const toppings = toppingsInput.split(",").map(topping => topping.trim());
generateToppings(...toppings);

// Function 3, lemon, white chocolate, peanuts, pecan, M&Ms
const generateCrazyCupcake = function(flavor = getRandomFlavor(), frosting = getRandomFrosting(), ...toppings) {  
  console.log(`Your Crazy Cupcake surprise is a ${flavor} cupcake with ${frosting} frosting. \n`);
  
  if (toppings.length >= 1) {
    console.log(`The topping(s) are:`);
    for (const topping of toppings) {
      console.log(`* ${topping}`);
    }
  }
};

if (flavor && frosting) {
  generateCrazyCupcake(flavor, frosting, ...toppings);
} else {
  generateCrazyCupcake();
}

