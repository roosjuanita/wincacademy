const prompt = require('prompt-sync')();

const answerName = prompt("What is your name?");
const answerBorn = prompt("Where were you born?");
const answerFood = prompt("What is your favourite food?");

console.log(`You are ${answerName}, you were born in ${answerBorn}, your favourite food is ${answerFood}`);

