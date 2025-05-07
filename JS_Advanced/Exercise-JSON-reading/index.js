'use strict';

const jsonString = require("./emojis.js").json;
// console.log(jsonString.length);

const emojis = JSON.parse(jsonString)
// console.log(jsonParse.christmas_tree)

// Object.entries(emojis)
//     .filter(([name]) => name.includes("cake"))
//     .forEach(([name, url]) => {
//         console.log(`name: ${name}`);
//         console.log(`url: ${url}`);
//         console.log('');
// });


const cakeEmojis = Object.entries(emojis)
    .filter(([name]) => name.includes("cake"))
    .map(([name, url]) => ({ name, url }));

console.log(cakeEmojis)