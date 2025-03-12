// Our program will prompt a user for the height of the pyramid and then build it with the suitable material for the job. 
// Smaller pyramids (height < 5) can be made out of match sticks represented by the “|” character. 
// Larger pyramids should be built out using lego bricks represented by the “=” character. 
// Huge pyramids of a height of 10 and up should be made out of stone bricks, represented by the “#” character. 
// If a requested pyramid is too tall (>15 levels) your program should not build a pyramid as this can lead to an unstable pyramid.

'use strict';
const prompt = require('prompt-sync')();

let number;
let symbol;

// Prompt the user for the height of the pyramid till you get a positive integer
while (true) {
    number = prompt("How is the height of the pyramid? ");

        if (!isNaN(number) && number > 0) {
            break;

        }

    console.log("Invalid Input. Please enter a positive number.");
}

// if the number is < 5 go for |
if (number < 5) {
    symbol = '| ';
}    

// if else the number is 5 - 10 go for =
else if  (number < 10) {
    symbol = '= '
}

// if else  the number is 10 - 15 use #
else if (number < 15) {
    symbol = '# '
}

// else warn the user about building too close to heaven.
else {
    console.log("You are building to close to heaven!");
    process.exit();
}


//build te pyramid 
for (let i = 0; i < number; i++) {
        let spaces = number - (i + 1);
        let symbols = number - spaces;
        console.log(`${" ".repeat(spaces)}${symbol.repeat(symbols)}`)
}


    

// ----#
// ---#-#
// --#-#-#
// -#-#-#-#    
// #-#-#-#-#

