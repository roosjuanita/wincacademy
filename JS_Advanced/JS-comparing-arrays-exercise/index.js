'use strict';

// JS comparing arrays exercise

const readingList = ['How-to code', 'JavaScript 101', 'Why JS is so cool'];
const bookList = ['How-to code', 'JavaScript 101', 'Why JS is so cool'];

// Your code here

// MY CODE
// const compareArrays = JSON.stringify(readingList) === JSON.stringify(bookList)
// console.log(compareArrays)

// ANSWER
const compareArraysWithStringify = (a, b) => JSON.stringify(a) === JSON.stringify(b);
console.log(compareArraysWithStringify(readingList, bookList)); // true

//MY CODE
const compareArrays = (arrayA, arrayB) => {
    if (arrayA.length !== arrayB.length) { 
        return false;
    } else {
        return arrayA.every((element, index) => element === arrayB[index])
    }
}

// ANSWER
const compareArraysWithEvery = (a, b) => a.length === b.length && a.every((e, i) => e === b[i]);

console.log(compareArrays(readingList, bookList));