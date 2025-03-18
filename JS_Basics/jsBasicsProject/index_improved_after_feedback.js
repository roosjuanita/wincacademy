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



// Ask the user to answer questions to set up a profile we can match
let i = 0;
let validAnswer = false; // A variable to check if the input is correct

while (i < questions.length) {
    let answer = prompt(questions[i]);

    switch(i) {
        case 0: // check the input for first_name
        case 1: // check the input for last_name
            validAnswer = (answer.match(/[a-zA-Z]/) && answer.trim() !== '');
            if (validAnswer) {
                if (i === 0) { 
                    profile.first_name = answer
                    console.log(profile.first_name)
                } else {
                    profile.last_name = answer   
                    console.log(profile.last_name)
                }
                i++;
            } else {
                continue;
            }
            break;

        case 2: // check the input for age
            validAnswer = (!answer.match(/[a-zA-Z]/) && answer.trim() !== '' && Number(answer) >= 18);
            if (validAnswer) {
                profile.age = Number(answer);
                console.log(profile.age)
                i++;
            } else {
                continue;
            }
            break;

        case 3: // check the input for gender
            validAnswer = (answer.trim() !== '' && answer === 'F' || answer === 'M' || answer === 'X')
            if (validAnswer) {
                profile.gender = answer;
                console.log(profile.gender)
                i++;
            } else {
                continue;
            } 
            break;
            
        case 4: // check the input for gender_interest
            validAnswer = (answer.trim() !== '' && answer === 'F' || answer === 'M' || answer === 'X')
            if (validAnswer) {
                profile.gender_interest = answer;
                console.log(profile.gender)
                i++;
            } else {
                continue;
            } 
            break;

        case 5: // check the input for location
            validAnswer = (answer === 'rural' || answer === 'city');
            if (validAnswer) {
                profile.location = answer;
                console.log(profile.location)
                i++;
            } else {
                continue;
            }
            break;

        case 6: // check the input for min_age_interest
        case 7: // check the input for max_age_interest
            validAnswer = (!answer.match(/[a-zA-Z]/) && answer.trim() !== '' && Number(answer) >= 18);
            if (validAnswer) {
                if (i === 6) {
                    profile.min_age_interest = Number(answer); 
                    console.log(profile.min_age_interest)
                } else {
                    if (answer >= profile.min_age_interest) {
                        profile.max_age_interest = Number(answer); 
                        console.log(profile.max_age_interest)
                    } else {
                        break;
                    } 
                }
                
                i++;

            } else {
                continue;
            }
            break;

        default:
            continue;  // Go back to the same question
    }
}

console.table(profile)

let matches = 0; // A variable to count the matches found
let matchProfiles = []; // An array to save all the found matches into

// looping over mockData.js to find a match
for (let datingProfile of mockData) {

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

// Tell the user how many matches we have found
if (matches === 1) {
    console.log(`You've got 1 match!`);
} else {
    console.log(`You've got ${matches} matches!`); 
} 

console.table(matchProfiles) // Show the matches