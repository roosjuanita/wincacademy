// Ignore this for now
const randomPersonData = require("./data.js")['randomPersonData'];
// consoleDeep(randomPersonData[0]);

// Temporary helper function to print deeply nested structures
const consoleDeep = something => {
  console.dir(something, {depth: null});
};

// Massage the expiration date to make it easier to use.
const transformExpirationDate = person => {
  const expiration = person.credit_card.expiration;
  const month = Number(expiration.split("/")[0]);
  const year = Number(expiration.split("/")[1]);
  person.credit_card.expiration = {
    month,
    year,
  };
  return person;
};

const personsMassaged = randomPersonData.map(transformExpirationDate);
// consoleDeep(personsMassaged[0]); // Marianna


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

const isLaterThan = (dateA, dateB) => {
  const result = compareDates(dateA, dateB);
  if (result === 1) {
    return true;
  }
  // If it's the same or earlier: it's not later :-) so we return true.
  return false;  
};

// Keep creditcards that have expiration date of July of 2022, or later.
const hasExpirationDateLaterThanJune22 = person => {
  const expirationDate = person.credit_card.expiration;
  return isLaterThan(expirationDate, {month: 6, year: 22});
};

const personsWithValidCreditcards = personsMassaged.filter(hasExpirationDateLaterThanJune22);
// consoleDeep(personsWithValidCreditcards[0]); // Gejza, Feb 2026

// Sort
const compareDatesOfPersons = (personA, personB) => {
  const dateA = personA.credit_card.expiration;
  const dateB = personB.credit_card.expiration;
  return compareDates(dateA, dateB);
};

const personsSorted = personsWithValidCreditcards.sort(compareDatesOfPersons);
// Show first 5 to see if sorting worked
// consoleDeep(personsSorted.slice(0, 5));

// Take first 25
const personsToCall = personsSorted.slice(0, 25);

// Print
const printPerson = person => {
  console.log(`Name: ${person.name} ${person.surname}`);
  console.log(`Phone: ${person.phone}`);
  console.log(`CC number: ${person.credit_card.number}`);  
  
  const month = person.credit_card.expiration.month;
  const year = person.credit_card.expiration.year;  
  console.log(`Expires: 20${year}-${month}`); // 2022-7

  // Print a separator line so we can easily see where one person ends and
  // the other begins.
  console.log("------------------------------");
};
personsToCall.forEach(printPerson);