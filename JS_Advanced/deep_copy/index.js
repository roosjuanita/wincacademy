'use strict';

const lodashClonedeep = require('lodash.clonedeep');
const lodashClonedeep = _.cloneDeep;

// JS deep copy example

const bottle = {
    size: "500ml",
    color: "blue",
    brand: "Bootle",
    model: "Thermos v10"
}

// Deep copy
const myBottle = lodashClonedeep(bottle);

// The objects have the same values but not the same reference
console.log(myBottle === bottle); // false

// We make a change to just myBottle
myBottle.color = "pink";

console.log(myBottle);
// { size: '500ml', color: 'pink', brand: 'Bootle', model: 'Thermos v10' }


// bottle stays the same
console.log(bottle);
// { size: '500ml', color: 'blue', brand: 'Bootle', model: 'Thermos v10' }