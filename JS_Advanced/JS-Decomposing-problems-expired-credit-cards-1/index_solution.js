// Ignore this for now
const randomPersonData = require("./data.js")['randomPersonData'];


/******************************************************************************
1. Create a new empty list of people

Thoughts:
No real thoughts.

Code thoughts:
This should probably be an array.
It can be a const because we're not re-assigning to this list.
We will be sorting the array later on, but sorting a const is still not
reassigning.
*/

/******************************************************************************
2. Look at the first or next person in the original list. If there are no people
left go to step 5.

Thoughts:
We need to iterate or loop over each person.
We need to stop after the last person.

Code thoughts:
We could do this using a for loop, for..of loop, while loop or using one of
the array methods like map or foreach.

Stopping when reaching the last person is easiest using an array method or
for..of.
*/

/******************************************************************************
(this step came out of code thoughts from step 5)
2.5. Massage the expiration date to make it easier to use.

Thoughts:
Mostly code thoughts.

Code thoughts:
We need to:
a. read the date
b. convert it to a better format
c. overwrite the current date property with the new format

The new format should be an object with a month and a year property, both
of which are numbers.
*/


const transformExpirationDate = person => {
  const expiration = person.credit_card.expiration;
  // We do a couple of things in one expression:
  // 1. split on the "/" character.
  // 2. grab the month or year
  // 3. Convert it to a number
  const month = Number(expiration.split("/")[0]);
  const year = Number(expiration.split("/")[1]);
  // We create a new object and immediately assign it to the expiration
  // property.
  person.credit_card.expiration = {
    month,
    year,
  };
  // We return the transformed person because we want to use array.map.
  return person;
};

// Let's see if this works as we hope.
// console.log(randomPersonData[0]);
// console.log(transformExpirationDate(randomPersonData[0]));
// console.log(randomPersonData[0]);

// console.log(randomPersonData[5]);
// console.log(transformExpirationDate(randomPersonData[5]));


/******************************************************************************
3. If the expiration date for their creditcard is before July of 2022, go to
step 2.

Thoughts:

This kinda feels like multiple steps:
* grab/read the credit card expiration date from the person object
* compare the expiration date with the current date
* conditionally do something if the expiration date is in the future or past

Let's break it down into multiple steps, see below.

Code thoughts:
We will need to grab the date from the credit_card property from the person object.

The date is a string like "4/22" or "12/26". The current date is July 16 2022.
Luckily our "today" is always the same.

I don't think we need the day because the credit card expiration date is for
a specific month.

We cannot simply do "4/22" > "7/22". We probably want to compare the year and
the month separately. So that means we need to grab the month part of this
string and convert it to a number and do the same for the year.

We're also lucky that there are no credit card expiration dates from before
2000 or else we'd have trouble comparing "4/22" and "4/99".

If the expiration happened before July 2022 we should look at the next person.
We could do this with a for or for .. of loop an if-statement and a
continue-statement, but array.filter is actually a good method to use because
we need to *filter* out items from the array and keep the rest.
*/


/******************************************************************************
3a. Read the expiration date from a person.

Thoughts:
Mostly code thoughts.

Code thoughts:
A person is a nested object so we can read properties of properties of
properties.

*/




/******************************************************************************
3b. Compare the date with current date.

Thoughts:
Mostly code thoughts.

Code thoughts:
Because we massaged the data we should put the current date in the same form.
This should definitely be a function.

Because we also compare for sorting, let's use one function for comparing and
have that function return -1, 0 or 1 because that's also what
array.sort expects.

Then we can create a function around this compare function that returns a boolean
that tells us if one date is later than another. (a wrapper function)
*/

// We will use a variation of this function with array.sort.
// It doesn't really matter if we return 1 or -1 when dateA > dateB
// or vice-versa, because we can always reverse the resulting array.
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

// Does this work as expected?
// console.log(compareDates(pastDate, futureDate)); // Should return -1
// console.log(compareDates(pastDate, todayDate)); // Should return -1
// console.log(compareDates(futureDate, todayDate)); // Should return 1
// console.log(compareDates(pastDate, pastDate)); // Should return 0

// Let's also test with array.sort
const dates = [pastDate, futureDate, todayDate];
// We should get the dates in chronological order, and we do 💪
// console.log(dates.sort(compareDates)); 



const isLaterThan = (dateA, dateB) => {
  const result = compareDates(dateA, dateB);
  if (result === 1) {
    return true;
  }

  // If it's the same or earlier: it's not later :-) so we return true.
  return false;
};

// console.log(isLaterThan(pastDate, futureDate)); // Should return false
// console.log(isLaterThan(pastDate, todayDate)); // Should return false
// console.log(isLaterThan(futureDate, todayDate)); // Should return true
// console.log(isLaterThan(pastDate, pastDate)); // Should return false (because they're the same)


/******************************************************************************
3c. Filter out persons with expired cards.

Thoughts:
Mostly code thoughts.

Code thoughts:
We use array.filter for this and reassign the result to a new array.
*/

// We can "wrap" the isLaterThan function with a specific date to get a new
// function that we can use with array.filter
const isLaterThanJuly22 = someDate => {
  return isLaterThan(someDate, { month: 7, year: 22 });
};

const june22 = { month: 6, year: 22 };
const july22 = { month: 7, year: 22 };
const aug22 = { month: 8, year: 22 };
const july23 = { month: 7, year: 23 };
// console.log(isLaterThanJuly22(june22)); // false
// console.log(isLaterThanJuly22(july22)); // false (because it's the same)
// console.log(isLaterThanJuly22(aug22)); // true
// console.log(isLaterThanJuly22(july23)); // true

const datesForFiltering = [june22, july22, aug22, july23];
// console.log(datesForFiltering.filter(isLaterThanJuly22));


/******************************************************************************
4. If the expiration date for their creditcard is July of 2022 or later, add
this person to the new list and go to step 2.

Thoughts:
What we do in step 3c.

*/
/******************************************************************************
5. Sort the new list of people by creditcard expiration date chronologically, so
July 2022 should be at the top, later dates should be lower in the list.

Thoughts:
So now we have a shorter list. But that it's shorter doesn't really matter for
this step.

Code thoughts:
We definitely need to use array.sort. But we do need to pass in a callback
function to compare persons because otherwise it doesn't know how to order.

In this step again we need to grab the date out of a person object and again
compare it. This does sound a bit repetitive. We could use a function to do this.

But.. if we're going to do this, we should probably massage/enrich the data
before step 3 so we can do step 3 and 5 a lot more easily.
See the concept for more info on this "massaging/enriching" of data.

So let's introduce step 2.5
*/

// console.log(randomPersonData[0]);
// A variation of the compare function from step 3b
const compareDatesOfPersons = (personA, personB) => {
  const dateA = personA.credit_card.expiration;
  const dateB = personB.credit_card.expiration;

  // We can now use compareDates!
  return compareDates(dateA, dateB);
};

// To test this function we need to massage randomPersonData first so the
// expiration property has the right shape
const personsMassaged = randomPersonData.map(transformExpirationDate);
const personsSorted = personsMassaged.sort(compareDatesOfPersons);

// Show first 5
// console.dir(personsSorted.slice(0, 5), { depth: null });
// Show last 5
// console.dir(personsSorted.slice(personsSorted.length - 5), { depth: null });



/******************************************************************************
6. Remove all but the first 25 people from this new list.

Thoughts:
If our list is sorted correctly just chop off everyone after 25.

Code thoughts:
We can use array.slice to do this.
*/

/******************************************************************************
7. Look at the first or next person in the list. If there are no people left go
to step 9.

Thoughts:
No particular thoughts.

Code thoughts:
This is part of the iteration step, so step 2.

*/


/******************************************************************************
8. For each person display their first name, last name, credit card number,
credit card expiration date and phone number.

Thoughts:
To make it easier to read we should probably do some formatting here.
We could try and print a single person on one line, but maybe it's
nicer to separate each person somehow.
Let's try some stuff to see what looks good.

Code thoughts:
We need to iterate here again, so a loop or an array method.
Just console.log statements.
The actual printing could be a function.
*/

/*
their full name
their credit card number
their credit card expiration date
their phone number
*/

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

// We still have personsSorted from earlier
// printPerson(personsSorted[0]);
// printPerson(personsSorted[10]);
// printPerson(personsSorted[50]);

/******************************************************************************
9. You're done!
*/

