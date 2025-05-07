'use strict';

// JS comparing objects with equality operator

/* Source: 
   https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/js/s/deep-equality-comparison.md */

const hero = {
  name: 'Spiderman',
  power: 'Shoot webs',
  real_name: 'Peter Parker'
};

const villain = {
  name: 'Spiderman',
  power: 'Shoot webs',
  real_name: 'Peter Parker'
};

const anotherHero = {
  real_name: 'Peter Parker',
  power: 'Shoot webs',
  name: 'Spiderman',
};

const isEqual = (a, b) => {
  // Check if the two values are identical.
  if (a === b) return true;

  // Check if both values are non-object values with an equivalent value (strict comparison).
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object'))
    return a === b;
  
  // Check if only one value is null or undefined or if their prototypes differ.
  if (a.prototype !== b.prototype) return false;

  // If none of the above conditions are met, use Object.keys() to check if both values have the same number of keys.
  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;


  // Use Array.prototype.every() to check if every key in a exists in b and if they are equivalent by calling isEqual() recursively.
  return keys.every(k => isEqual(a[k], b[k]));
};

console.log(isEqual(hero, villain)); // true

console.log(isEqual(hero, anotherHero)); // true