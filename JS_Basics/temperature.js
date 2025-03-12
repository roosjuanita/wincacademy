const prompt = require('prompt-sync')();

const celsius = Number(prompt("Name a temperature in Celsius:"));

const fahrenheit = ((9 / 5) * celsius) + 32;

console.log(`“${celsius} degrees Celsius is equal to ${fahrenheit} degrees Fahrenheit”.`)

