'use strict';

const books = require('./books');

// Write a function that takes the books array and returns the 5 oldest books
// const oldestFirst = (book1, book2) => {
//     if (book1.year > book2.year) return 1;
//     if (book1.year < book2.year) return -1;
//     return 0;
// }

// books.sort(oldestFirst)
// const oldestBooks = books.slice(0,5)
// console.log(oldestBooks)


// Write a function that takes the books array and returns the 3 newest books by unknown authors.
// const newestFirst = (book1, book2) => {
//     if (book1.year < book2.year) return 1;
//     if (book1.year > book2.year) return -1;
//     return 0;
// }

// books.sort(newestFirst)

// for (let book of books) {
//     if (book.author === "Unknown") {
//         console.log(book)
//     }    
// }

// Write a function that takes the books array and returns all books, sorted by language reverse alphabetically, then country alphabetically. 
// The last 4 books in the resulting array should be these in this order: 
// “Children of Gebelawi”, “One Thousand and One Nights”, “Season of Migration to the North” and “The Epic Of Gilgamesh”.
const specificSort = (book1, book2) => {
    if (book1.language < book2.language) return 1;
    if (book1.language > book2.language) return -1;

    if (book1.country > book2.country) return 1;
    if (book1.country < book2.country) return -1;

    return 0;
}

books.sort(specificSort)
const specificFour = books.slice(-4)
console.log(specificFour)