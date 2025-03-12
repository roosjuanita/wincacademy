'use strict'

const profile1 = {
    firstName: "Roos",
    lastName: "Pollmann",
    age: 37,
    gender: "F",
    country: "Netherlands",
    preferences: {
        likeKids: true,
        hobbies: ["music", "art", "hiking", "cooking"]
    }
}

const profile2 = {
    firstName: "Peter",
    lastName: "de Vries",
    age: 42,
    gender: "M",
    country: "Netherlands",
    preferences: {
        likeKids: false,
        hobbies: ["salsa", "hiking", "dogs", "cooking"]
    }
}

if (profile1.preferences.likeKids  === profile2.preferences.likeKids ) {
    console.log("You both like kids!")
}

if (profile1.preferences.hobbies.length  === profile2.preferences.hobbies.length ) {
    console.log("You have the same amount of hobbies!")
}


// extra exercises

console.log(profile1, "\n\n", profile2)

const entries = Object.entries(profile1)

for (const [key, value] of entries) {
    console.log(`${key}: ${value}`);
}

console.log(`The ${entries[0]} is ${entries[1]}`)

if (profile1.hasOwnProperty('preferences')) {
    console.log("Hobbies: " + profile1.preferences.hobbies.join(", "));
} 