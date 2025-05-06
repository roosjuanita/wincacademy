const randomPersonData = require("./data.js")['randomPersonData'];


const pastDate = {
    year: 19,
    month: 5,
};
const futureDate = {
    year: 20,
    month: 5,
};
const todayDate = {
    year: 19,
    month: 7,
};

const dates = [pastDate, futureDate, todayDate];


const june22 = { month: 6, year: 22 };
const july22 = { month: 7, year: 22 };
const aug22 = { month: 8, year: 22 };
const july23 = { month: 7, year: 23 };



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

const compareDates = (dateA, dateB) => {
    if (dateA.year > dateB.year) {
        return 1;
    }
    if (dateB.year > dateA.year) {
        return -1;
    }



    if (dateA.month > dateB.month) {
        return 1;
    }
    if (dateB.month > dateA.month) {
        return -1;
    }

    
    return 0;
    };



const isLaterThan = (dateA, dateB) => {
    const result = compareDates(dateA, dateB);
    if (result === 1) {
        return true;
    }

    
    return false;
};

const isLaterThanJuly22 = someDate => {
    return isLaterThan(someDate, { month: 7, year: 22 });
};




const datesForFiltering = [june22, july22, aug22, july23];



const compareDatesOfPersons = (personA, personB) => {
    const dateA = personA.credit_card.expiration;
    const dateB = personB.credit_card.expiration;


    return compareDates(dateA, dateB);
};

const personsMassaged = randomPersonData.map(transformExpirationDate);
const personsSorted = personsMassaged.sort(compareDatesOfPersons);


const printPerson = person => {
    console.log(`Name: ${person.name} ${person.surname}`);
    console.log(`Phone: ${person.phone}`);
    console.log(`CC number: ${person.credit_card.number}`);

    const month = person.credit_card.expiration.month;
    const year = person.credit_card.expiration.year;
    console.log(`Expires: 20${year}-${month}`); // 2022-7


    console.log("------------------------------");
};
