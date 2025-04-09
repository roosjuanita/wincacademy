'use strict';
const prompt = require("prompt-sync")();

// Create a list with 4 different types of cupcake flavors
// Create a list with 4 different types of frosting
// Create a list with 4 different types of toppings
//  The function should log the recipe to the console in a single line.

// For example, “Chocolate cupcake with buttercream frosting and blueberries as a topping.”
// Create a list of working days. Our chefs only work from Monday to Friday. 
// For each workday, we want to log a new random recipe. Make sure to log the workday as well to display the information clearly. 


const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

const recipe = function(flavor, frosting, topping) {

    const flavors = ['Strawberry', 'Chocolate', 'Vanilla', 'Mint Chocolate Chip']
    const frostings = ['chocolate', 'vanilla', 'strawberry', 'mint']
    const toppings = ['rainbow sprinkles', 'chocolate chips', 'fresh berries', 'whipped cream']

    if (flavor === '') {
        flavor = flavors[Math.floor(Math.random() * 4)];
    }
    if (frosting === '') {
        
        frosting = frostings[Math.floor(Math.random() * 4)];
    }
    if (topping === '') {
        topping = toppings[Math.floor(Math.random() * 4)];
    }

    console.log(`${flavor} cupcake with ${frosting} frosting and ${topping} as a topping.\n`);
}

console.log("Note: just press enter if you don't have an ingredient in mind \n");

for (const day of weekDays) {
    const flavor = prompt("Which flavor do you want?");
    const frosting = prompt("Which frosting do you want?");
    const topping = prompt("Which topping do you want?");
    console.log(day);
    recipe(flavor, frosting, topping);
}

