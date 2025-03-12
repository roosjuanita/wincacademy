'use strict';

////////////////////////////////////////////////////////////////////////////////////
console.log("----------- overwrite ------------------");
// We can overwrite an existing value using its index
const actionsToTake = ["strip wallpaper", "clean walls", "sand surfaces", "apply paint"];
actionsToTake[1] = "test paint";
console.log(actionsToTake); // ["strip wallpaper", "test paint", "sand surfaces", "apply paint"]


////////////////////////////////////////////////////////////////////////////////////
console.log("----------- push ------------------");
// We can add values at the end with push.
// We start with an empty array
const thingsToResearch = [];
console.log(thingsToResearch); // []
thingsToResearch.push("colors");
console.log(thingsToResearch); // ["colors"]

// We can do it multiple times
thingsToResearch.push("painting techniques");
console.log(thingsToResearch); // ["colors", "painting techniques"]

// push actually does two things:
// 1. A value is added to the end of the array.
// 2. The resulting value is the new length of the array (so the number of items in it).
let numberOfItems = thingsToResearch.push("music for DIY");
console.log(thingsToResearch); // ["colors", "painting techniques", "music for DIY"]
console.log(numberOfItems); // 3

// ⚠️ The variable numberOfItems does not automatically update if you add or remove
// values from the array. It's just the length immediately after the push operation.



////////////////////////////////////////////////////////////////////////////////////
console.log("----------- pop ------------------");
// We can use pop to "pop" the last item from an array.
// This actually does two things:
// 1. The last item from the array is removed.
// 2. The item that was removed is the resulting value.
console.log(thingsToResearch); // [ 'colors', 'painting techniques', 'music for DIY' ]

// We remove the last item but ignore the resulting value
thingsToResearch.pop(); 
console.log(thingsToResearch);// [ 'colors', 'painting techniques' ]

// We remove the last item and print the resulting value.
console.log(thingsToResearch.pop()); // "painting techniques"
console.log(thingsToResearch);// [ 'colors']

// We remove the last item and assign the resulting value.
const aThingToResearch = thingsToResearch.pop();
console.log(thingsToResearch);// [] (because we removed all the items)
console.log(aThingToResearch); // "colors"

// If we pop from an empty array we get undefined. The array doesn't change
// and remains empty.
console.log(thingsToResearch.pop()); // undefined




////////////////////////////////////////////////////////////////////////////////////
console.log("----------- shift and unshift ------------------");
// Similar to push and pop we have unshift and shift
// unshift:
// 1. adds a value at the beginning
// 2. moves the existing values 1 position to the right.
// 3. returns the new length of the array
const thingsToDiscuss = ["colors", "who does what", "budget", "sand paper"];
console.log(thingsToDiscuss); // [ 'colors', 'who does what', 'budget', 'sand paper' ]
console.log(thingsToDiscuss.unshift("budget")); // 5
console.log(thingsToDiscuss); //[ 'budget', 'colors', 'who does what', 'budget', 'sand paper' ]

// shift:
// 1. removes a value at the beginning
// 2. moves the existing values 1 position to the left
// 3. returns the value that was removed
console.log(thingsToDiscuss); //[ 'budget', 'colors', 'who does what', 'budget', 'sand paper' ]
console.log(thingsToDiscuss.shift()); // 'budget'
console.log(thingsToDiscuss); // [ 'colors', 'who does what', 'budget', 'sand paper' ]


////////////////////////////////////////////////////////////////////////////////////
console.log("----------- concatenate ------------------");
// We can "concatenate" or glue together arrays like this.
// The result is an expression that we can print or assign (to a variable).
const moreThingsToResearch = ["clothing", "ladders", "ammonia"];
const someOtherThingsToResearch = ["ventilators", "airflow"];

// ["ventilators", "airflow", "clothing", "ladders", "ammonia"]
console.log(someOtherThingsToResearch.concat(moreThingsToResearch));

// The original arrays are not changed
console.log(someOtherThingsToResearch); // ["ventilators", "airflow"]
console.log(moreThingsToResearch); // ["clothing", "ladders", "ammonia"]

// We can assign the result of concat to a new variable.
const allThingsToResearch = someOtherThingsToResearch.concat(moreThingsToResearch);
// ["ventilators", "airflow", "clothing", "ladders", "ammonia"]
console.log(allThingsToResearch);