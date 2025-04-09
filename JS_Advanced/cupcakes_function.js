'use strict';

// Create a list with 4 different types of cupcake flavors
// Create a list with 4 different types of frosting
// Create a list with 4 different types of toppings
//  The function should log the recipe to the console in a single line.

// For example, “Chocolate cupcake with buttercream frosting and blueberries as a topping.”
// Create a list of working days. Our chefs only work from Monday to Friday. 
// For each workday, we want to log a new random recipe. Make sure to log the workday as well to display the information clearly. 


const recipe = function() {
    const flavors = ['Strawberry', 'Chocolate', 'Vanilla', 'Mint Chocolate Chip']
    const frosting = ['chocolate', 'vanilla', 'strawberry', 'mint']
    const toppings = ['rainbow sprinkles', 'chocolate chips', 'fresh berries', 'whipped cream']

    const randomFlavors = flavors[Math.floor(Math.random() * 4)];
    const randomFrosting = frosting[Math.floor(Math.random() * 4)];
    const randomToppings = toppings[Math.floor(Math.random() * 4)];

    console.log(`${randomFlavors} cupcake with ${randomFrosting} frosting and ${randomToppings} as a topping.\n`);
}

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

for (const day of weekDays) {
    console.log(day);
    recipe();
}

