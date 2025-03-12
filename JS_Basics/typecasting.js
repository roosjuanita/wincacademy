const prompt = require('prompt-sync')();

// ⚠️ We renamed the variable here to "birthYearString"
const birthYearString = prompt("In which year were you born?");
console.log("You became an adult in the year:");

// Cast (convert) birthYear to a number
const birthYear = Number(birthYearString)
console.log(birthYear + 18);


// We can also combine cast and prompt on the same line
const birthYear2 = Number(prompt("In which year were you born?"));
console.log("You became an adult in the year:");
console.log(birthYear2 + 18);

