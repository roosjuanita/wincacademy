// Ignore this for now
const randomPersonData = require("./data.js")['randomPersonData'];

/******************************************************************************
1. Create a new empty list of people

Thoughts:
none

Code thoughts:
make an array of objects
const

*/

/******************************************************************************
2. Look at the first or next person in the original list. If there are no people
left go to step 5.

Thoughts:
is this just to know the end of the list?
or is this just the description of a for loop?

Code thoughts:
loop over the data with a for .. of loop 

(We could do this using a for loop, for..of loop, while loop or using one of
the array methods like map or foreach.
Stopping when reaching the last person is easiest using an array method or
for..of)

*/

/******************************************************************************
2.a Massage the data, expiration dates should be an object: {month, year}

We need to:
a. read the date
b. convert it to a better format
c. overwrite the current date property with the new format

The new format should be an object with a month and a year property, both
of which are numbers.

array.map

/******************************************************************************
3. If the expiration date for their credit card is before July of 2022, go to
step 2.

Thoughts:
need to massage the code

Code thoughts:
use if statement

(If the expiration happened before July 2022 we should look at the next person.
We could do this with a for or for .. of loop an if-statement and a
continue-statement, but array.filter is actually a good method to use because
we need to *filter* out items from the array and keep the rest.)

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
Because we also compare for sorting, let's use one function for this.
So let's have this function return -1, 0 or 1 because that's also what
array.sort expects.
*/


/******************************************************************************
3c. Filter out persons with expired cards.

Thoughts:
Mostly code thoughts.

Code thoughts:
We use array.filter for this and reassign the result to a new array.
*/


/******************************************************************************
4. If the expiration date for their credit card is July of 2022 or later, add
this person to the new list and go to step 2.

Thoughts:
none

Code thoughts:
push it to this new array > done in 3c

*/
/****************************************************************************** 
5. Sort the new list of people by credit card expiration date chronologically, so
July 2022 should be at the top, later dates should be lower in the list.

Thoughts:
none

Code thoughts:
use .sort() and a function to sort the new array of objects.
first sort years and then sort months.

*/

/******************************************************************************
6. Remove all but the first 25 people from this new list.

Thoughts:
I think we should just slice it? or pop it? I don't know what it is called.
I'm not sure how to remove a part of an array.

Code thoughts:
array.slice()

*/

/******************************************************************************
7. Look at the first or next person in the list. If there are no people left go
to step 9.

Thoughts:
none

Code thoughts:
for ... of loop
(This is part of the iteration step, so step 2.)
*/


/******************************************************************************
8. For each person display their first name, last name, credit card number,
credit card expiration date and phone number.

Thoughts:
none

Code thoughts:
console.log()
(We need to iterate here again, so a loop or an array method.
Just console.log statements.
The actual printing could be a function.)

*/

/******************************************************************************
9. You're done!
*/

