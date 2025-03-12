const prompt = require("prompt-sync")();
'use strict';

let wantCalculation = prompt("Do you want to do a calculation? (answer with: Y/N) ")
let result;
let firstNumber;
let operator;
let secondNumber

while (wantCalculation == "Y") {
    firstNumber = Number(prompt("What is the first number? "))
    operator = prompt("What operation do you want to do? (answer with : + - / *) ")
    secondNumber = Number(prompt("What is the second number? "))

    if (operator === "+") {
        result = firstNumber + secondNumber;
    } else if (operator === "-"){
        result = firstNumber - secondNumber;
    } else if (operator === "/") {
    result = firstNumber / secondNumber;
    } else if (operator === "*") {
        result = firstNumber * secondNumber;
    } else {
        console.log("The input you have given is incorrect.")
        break;
    }

    console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`)
    wantCalculation = "N";
    wantCalculation = prompt("Do you want to do a calculation? (answer with: Y/N)")
    break;
}


// THE ANSWER FROM WINC

// 'use strict';


// while (true) {
//   const answer = prompt("Do you want to do a calculation? Y/N");
//   if (answer === "N" || answer === null) {
//     // We exit the while loop so we don't need to do if-else here.
//     break; 
//   }

//   if (answer === "Y") {
//     const operand1 = Number(prompt("What is the first number?"));
//     const operator = prompt("Which operation do you want to do? +, -, * or /");
//     const operand2 = Number(prompt("What is the second number?"));


//     let calculationResult;
//     switch (operator) {
//       case '+':
//         calculationResult = operand1 + operand2;
//         break;
//       case '-':
//         calculationResult = operand1 - operand2;
//         break;
//       case '*':
//         calculationResult = operand1 * operand2;
//         break;
//       case '/':
//         calculationResult = operand1 / operand2;
//         break;
//       default:
        
//         break;
//     }
//     if (calculationResult === undefined) {
//       console.log("You did not submit a known operator, so I could not calculate");
//       continue;
//     }
//     console.log(`${operand1} ${operator} ${operand2} = ${calculationResult}`);
//   } else {
//     console.log("Your answer was unclear");
//   }
// }