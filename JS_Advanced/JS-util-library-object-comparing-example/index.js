'use strict';

// Syntax for including the Util module:
const util = require('node:util');

// JS comparing objects with util library

const hero = {
  name: 'Spiderman',
  power: 'Shoot webs',
};

const villain = {
  name: 'Spiderman',
  power: 'Shoot webs'
};

const unknownHero = {
  power: 'Shoot webs',
  name: 'Spiderman',
};

console.log(util.isDeepStrictEqual(hero, villain)); // true

console.log(util.isDeepStrictEqual(hero, unknownHero)); // true