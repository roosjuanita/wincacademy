'use strict';
import 

/////////////////////////////////////////////////////////////////
// Cupcake generator v2

const generateRecipe = function(flavorParameter, frostingParameter, toppingParameter) {
  const cupcakeFlavor = ["Vanilla", "Chocolate", "Strawberry", "Lemon"];
  const frostings = ["cream cheese", "buttercreme", "meringue", "tiramisu"];
  const toppings = ["chocolate sauce", "blueberries", "strawberries", "nuts"];

  if (flavorParameter === "") {
    flavorParameter = cupcakeFlavor[Math.floor(Math.random() * 4)];
  }
  if (frostingParameter === "") {
    frostingParameter = frostings[Math.floor(Math.random() * 4)];
  }
  if (toppingParameter === "") {
    toppingParameter = toppings[Math.floor(Math.random() * 4)];
  }

  console.log(`${flavorParameter} cupcake with ${frostingParameter} frosting and ${toppingParameter} as topping. \n`)
};

console.log("Note: just press enter if you don't have an ingredient in mind \n");

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
for (const day of weekDays) {
  console.log(day);
  const flavor = prompt("What flavor?");
  const frosting = prompt("What frosting?");
  const topping = prompt("What topping?");
  generateRecipe(flavor, frosting, topping);
}