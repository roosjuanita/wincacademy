const prompt = require("prompt-sync")();
'use strict';

const questions = [];
const answers = []

questions.push("What is your first name? ");
questions.push("What is your last name? ");
questions.push("What is your age? ");
questions.push("Where do you live? ");
questions.push("What is your gender? ");
questions.push("Which genders are you interested in dating? ");
questions.push("What is your main hobby? ");
questions.push("What is your favourite movie? ");

let i = 0;

while (i < questions.length) {
    let answer = prompt(questions[i]);
    if (answer.length >= 2) {
        answers[i] = answer;
        i++;
    } else {
        continue;
    } 
}

for (let k = 0; k < questions.length; k++) {
    number = k +1;
    console.log(`Question ${number}: ${questions[k]} \n${answers[k]} \n`)
}


// for (let i = 0; i < questions.length; i++) {
//     answers[i] = prompt(questions[i]);
// }
