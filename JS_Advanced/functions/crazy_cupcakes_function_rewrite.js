'use strict';
const prompt = require("prompt-sync")();

    let addTopping = 'y'
    const toppings = [];

const chooseToppings = (...toppings) => {
    if (toppings.length === 0) {
        console.log('You chose no toppings\n')
    }
    else {
        console.log('The topping(s) are: \n')
    
        for (const topping of toppings) {
            console.log(`* ${topping}`)
        }
        console.log('\n')
    }
    
}

console.log("Note: just press enter if you don't have an ingredient in mind \n");

const flavor = prompt("Which flavor do you want? ");
const frosting = prompt("Which frosting do you want? ");
chooseFlavorAndFrosting(flavor, frosting)


function chooseFlavorAndFrosting(flavor, frosting) {
    const flavors = ['Strawberry', 'Chocolate', 'Vanilla', 'Mint Chocolate Chip']
    const frostings = ['chocolate', 'vanilla', 'strawberry', 'mint']

    if (flavor === '') {
        flavor = flavors[Math.floor(Math.random() * 4)];
    }
    if (frosting === '') {
        
        frosting = frostings[Math.floor(Math.random() * 4)];
    }
    while (addTopping === 'Y' || addTopping === 'y') {
        const topping = prompt('What do you want as a topping? ').trim();;
        if (topping !== '') {
            toppings.push(topping);
            addTopping = prompt('Do you want to add another topping? Type Y or N ')
        }
        else {
            break;
        }

    }

    console.log(`\nYour Crazy Cupcake surprise is a ${flavor} cupcake with ${frosting} frosting. \n`);
    chooseToppings(...toppings);
};