'use strict';

// JS reduce() exercise template
const shoppingCart = require('./mockData.js').data;

// Your code here
const totalPrice = (shoppingCart.reduce((acc, item) => acc + (item.price * item.quantity), 0));

console.log(`the total price is: ${totalPrice}`)