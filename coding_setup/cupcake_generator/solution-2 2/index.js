"use strict";

const readlineSync = require("readline-sync");

/////////////////////////////////////////////////////////////////
// Cupcake generator v2

const generateRecipe = function(flavor, frosting, topping) {
    const cupcakeFlavor = ["Vanilla", "Chocolate", "Strawberry", "Lemon"];
    const frostings = ["cream cheese", "buttercreme", "meringue", "tiramisu"];
    const toppings = ["chocolate sauce", "blueberries", "strawberries", "nuts"];

    if (flavor === "") {
        flavor = cupcakeFlavor[Math.floor(Math.random() * 4)];
    }
    if (frosting === "") {
        frosting = frostings[Math.floor(Math.random() * 4)];
    }
    if (topping === "") {
        topping = toppings[Math.floor(Math.random() * 4)];
    }

    console.log(
        `${flavor} cupcake with ${frosting} frosting and ${topping} as topping. \n`
    );
};

console.log(
    "Note: just press enter if you don't have an ingredient in mind \n"
);

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
for (const day of weekDays) {
    console.log(day);
    const flavor = readlineSync.question("What flavor?");
    const frosting = readlineSync.question("What frosting?");
    const topping = readlineSync.question("What topping?");
    generateRecipe(flavor, frosting, topping);
}