'use strict'
const prompt = require("prompt-sync")();

const MINIMUM = 20;

const discountGenerator = function (orderAmount) {
    if (orderAmount >= MINIMUM) {
        return 10;
    }
    else {
        return 0;
    }
};

const order = prompt('How many cupcakes would you like to order? ');

if (order >= MINIMUM) {
    console.log(`Your discount is ${discountGenerator(order)}%.`);
} else {
    console.log(`Your discount is ${discountGenerator(order)}%. If you want to get 10% discount you'll have to buy ${MINIMUM - order} more cupcakes.`);
}

