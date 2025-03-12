'use strict';

const mockData = require('./mockData.js').data;
const prompt = require('prompt-sync')();


// an object for a new profile
let profile = {};

// Defining the questions
let questions = [
    "What is your first name? ",
    "What is your last name? ",
    "What is your age? ",
    "What is your gender? (possible answer: X, M, F) ",
    "What genders are you interested in dating? (possible answer: X, M, F) ",
    "Where do you live? (possible answer: rural, city) ",
    "What is the minimum age you want to date with? ",
    "What is the maximum age you want to date with? "
];

let i = 0;

// checking if the answers to the questions are correct input
while (i < questions.length) {
        
        let answer = prompt(questions[i]);
        
        if (i === 0) {
            
            if (typeof answer === 'string' && answer.trim() !== '') {
                profile.first_name = answer;
                i++;
            }  else {
                continue;
            }
        }

        else if (i === 1) {
            
            if (typeof answer === 'string' && answer.trim() !== '') {
                profile.last_name = answer;
                i++;
            } else {
                continue;
            }
        }

        else if (i === 2) {

            if (!answer.match(/[a-zA-Z]/) && answer.trim() !== '' && Number(answer) >= 18) {
                profile.age = answer;
                i++;
            } else {
                continue;
            }
        }

        else if (i === 3) {
            
            if (typeof answer === 'string' && answer.trim() !== '') {

                if (answer === 'F' || answer === 'M' || answer === 'X' ) {
                    profile.gender = answer;
                    i++;
                }

            } else {
                continue;
            }
        }

        else if (i === 4) {
            
            if (typeof answer === 'string' && answer.trim() !== '') {
                
                if (answer === 'F' || answer === 'M' || answer === 'X' ) {
                    profile.gender_interest = answer;
                    i++;
                }
            } else {
                continue;
            }
        }

        else if (i === 5) {
            
            if (typeof answer === 'string' && answer.trim() !== '') {

                if (answer === 'rural' || answer === 'city') {
                    profile.location = answer;
                    i++;
                }
            } else {
                continue;
            }
        }

        else if (i === 6) {
            
            if (!answer.match(/[a-zA-Z]/) && answer.trim() !== '' && Number(answer) >= 18) {
                profile.min_age_interest = Number(answer);
                i++;
            } else {
                continue;
            }
        }
        
        else if (i === 7) {
            
            if (!answer.match(/[a-zA-Z]/) && answer.trim() !== '' && Number(answer) > profile.min_age_interest) {
                profile.max_age_interest = Number(answer);
                i++;
            } else {
                continue;
            } 
        }
}

console.log(profile)




// A filled-in profile object for testing purposes
// const profile = {
//     first_name: "John",
//     last_name: "Doe",
//     age: 30,
//     gender: "M",
//     gender_interest: "X",
//     location: "city",
//     min_age_interest: 18,
//     max_age_interest: 35
// };


const data = mockData; // A variable to load the data from the mockData.js file
let matches = 0; // A variable to count the matches found
let matchProfiles = []; // An array to save all the found matches into

// looping over mockData.js to find a match
for (let datingProfile of data) {

    // - Your age range and their age match
    if (datingProfile.age >= profile.min_age_interest && datingProfile.age <= profile.max_age_interest) {

         // - Their age range and your age match
        if (profile.age >= datingProfile.min_age_interest && profile.age <= datingProfile.max_age_interest) {

            // - Their gender_interest and your gender match. 
            if (datingProfile.gender_interest === profile.gender){
                
                // - Your gender_interest and their gender match. 
                if (profile.gender_interest === datingProfile.gender) {
                    
                    // - You both have the same location
                    if (profile.location === datingProfile.location) {
                        matches++; // up the amount of matches with 1
                        matchProfiles.push(datingProfile); // save the profile of the match
                    }

                }
            }
        }

    }
        
}


console.table(matchProfiles) // Show the matches
console.log(`You have got ${matches} matches!`) // Tell the user how many matches we have found