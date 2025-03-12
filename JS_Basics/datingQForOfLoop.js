const prompt = require("prompt-sync")();
'use strict';

const questions = [];
const answers = [];

questions.push("What is your first name? ");
questions.push("What is your last name? ");
questions.push("What is your age? ");
questions.push("Where do you live? ");
questions.push("What is your gender? ");
questions.push("Which genders are you interested in dating? ");
questions.push("What is your main hobby? ");
questions.push("What is your favourite movie? ");

for (const question of questions) {
    answers.push(prompt(question));

}

console.table(answers)