'use strict';

console.log("----------step 1----------\n\n");

const jsonString = require("./emojis.js").json;
// console.log(jsonString.length);

const emojis = JSON.parse(jsonString);

console.log(emojis["cake"]);


console.log("\n\n----------step 2----------\n\n");

// Generate an array of cake emojis, with name and URL. 
const emojisEntries = Object.entries(emojis);
// destructure each entry into name and url
const cakeEmojiEntries = emojisEntries.filter(([name, _url]) => {
    return name.includes('cake');
});

// Turn it into an array of objects.
const cakeEmojis = cakeEmojiEntries.map(([name, url]) => {
    return {
        name,
        url
    }
});
console.log(cakeEmojis);

console.log("\n\n----------step 3----------\n\n");

// We can write the solution more compact like so:
const cakeEmojis2 = Object.entries(emojis)
    .filter(([name, _url]) => name.includes("cake"))
    .map(([name, url]) => ({ name, url }));

console.log(cakeEmojis2);

console.log("\n\n----------step 4----------\n\n");

// Compact and more performant because we iterate less.
const cakeEmojis3 = Object.entries(emojis)
    .reduce(
    (all, [name, url]) => {
        if (name.includes("cake")) all.push({name, url});
        return all;
    }, []
    );
console.log(cakeEmojis3);
