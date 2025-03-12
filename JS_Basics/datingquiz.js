const prompt = require('prompt-sync')();
'use strict';

/*
We calculate the match percentage like this:

Question 2: If the age difference is less than 20: increase match percentage with 33.
Question 3: If they both love cats: increase match percentage with 33.
Question 4: If they both love dogs: increase match percentage with 33.
*/

console.log("Welcome to dating app \"Winc Winc\".");
console.log("We currently have 1 other person on our dating platform.");
console.log("Please answer the following questions so we can find a good match for you.");

const otherPersonName = "Steve Turing";
const otherPersonYearOfBirth = Number(1940);
const otherPersonLovesCats = "yes";
const otherPersonLovesDogs = "yes";

let percentage;
let numQuestions = 4;
let questionsAnswered = 0;

// Question 1
const name = prompt("What's your name?");
questionsAnswered = questionsAnswered + 1;
percentage = (questionsAnswered / numQuestions) * 100;
console.log(`You have now answered ${percentage}% of our questions.`);


// Question 2
const yearOfBirth =   Number(prompt("In which year were you born?"));
questionsAnswered = questionsAnswered + 1;
percentage = (questionsAnswered / numQuestions) * 100;
console.log(`You have now answered ${percentage}% of our questions.`);


// Question 3
const lovesCats = prompt("Do you love cats?");
questionsAnswered = questionsAnswered + 1;
percentage = (questionsAnswered / numQuestions) * 100;
console.log(`You have now answered ${percentage}% of our questions.`);


// Question 4
const lovesDogs = prompt("Do you love dogs?");
questionsAnswered = questionsAnswered + 1;
percentage = (questionsAnswered / numQuestions) * 100;
console.log(`You have now answered ${percentage}% of our questions.`);

// Calculate the match percentage
let matchPercentage = 0;
if ((yearOfBirth + 20) >= otherPersonYearOfBirth && (yearOfBirth - 20) <= otherPersonYearOfBirth) {
    matchPercentage = matchPercentage + 33;
}
console.log("otherPersonYearOfBirth:", otherPersonYearOfBirth)
console.log("yearOfBirth:", yearOfBirth)
console.log(matchPercentage)

if (lovesDogs == otherPersonLovesDogs) {
    matchPercentage = matchPercentage + 33;
}
console.log("otherPersonLovesDogs:", otherPersonLovesDogs)
console.log("LovesDogs:", lovesDogs)
console.log(matchPercentage)

if (lovesCats == otherPersonLovesCats) {
    matchPercentage = matchPercentage + 33;
}

console.log("lovesCats:", lovesCats)
console.log("otherPersonLovesCats:", otherPersonLovesCats)
console.log(matchPercentage)

// Show the match percentage
console.log(`Your match percentage with ${otherPersonName} is ${matchPercentage}.`);