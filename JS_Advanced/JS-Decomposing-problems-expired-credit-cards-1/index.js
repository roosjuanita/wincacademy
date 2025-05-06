'use strict';

const randomPersonData = require("./data.js")['randomPersonData'];

// Set current date to July 2022
const currentDate = {month: 7, year: 22}

// Function to transform date mm/yy to {month: mm, year: yy}
const transformExpirationDate = person => {
    const expirationString = person.credit_card.expiration;
    const [month, year] = expirationString.split('/').map(Number);
    person.credit_card.expiration = { month, year };
    return person;
}

// Function to compare two date objects {month, year} for sorting in chronological order, ascending
const compareDates = (dateA, dateB) => {
    if (dateA.year > dateB.year) {
        return 1;
    }
    if (dateB.year > dateA.year) {
        return -1;
    }

    // If we're still in the function that means the years are the same.

    if (dateA.month > dateB.month) {
        return 1;
    }
    if (dateB.month > dateA.month) {
        return -1;
    }

    // If we're still in the function that means the months are also the same.
        return 0;
};

// Transform the expiration date for each person into an object with {month, year}
const personsMassaged = randomPersonData.map(transformExpirationDate);

// Filter the cards that have expiration dates on or after the current date
const expiringCards = personsMassaged.filter(person => {
    return compareDates(person.credit_card.expiration, currentDate) >= 0;
});

// Sort the expiring cards by their expiration date (ascending order)
expiringCards.sort((a, b) => compareDates(a.credit_card.expiration, b.credit_card.expiration));

// Limit the list to the top 25 expiring cards
const top25 = expiringCards.slice(0, 25);

// Print name, phone number, cc number and expiration date
const printPerson = person => {
    console.log(`Name: ${person.name} ${person.surname}`);
    console.log(`Phone: ${person.phone}`);
    console.log(`CC number: ${person.credit_card.number}`);

    const month = person.credit_card.expiration.month;
    const year = person.credit_card.expiration.year;
    console.log(`Expires: 20${year}-${month}`); // 2022-7


    console.log("------------------------------");
};

// Print the details of each person in the top 25 expiring cards list
top25.map(printPerson)