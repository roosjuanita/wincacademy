'use strict';

// JS map() exercise
const products = require('./mockData.js').data;

// Your code here
const VAT = 1.09;

const calculateVat = changeFactor => 
    products.map( product => {
        const price = (Number(product.price * changeFactor)).toFixed(2);
        return {...product, price};
    });


console.log(calculateVat(VAT))