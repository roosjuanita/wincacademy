
'use strict';

const books = require('./books');

// To see data structure.
console.log(books[0]);

// This function can be a global variable, we use it in two different functions.
const compareByYear = (book1, book2) => {
  if (book1.year > book2.year) return 1;
  if (book1.year < book2.year) return -1;
  return 0;
};


// Part 1
const getFiveOldest = books => {
  // Mutable because we sort the original array.
  books.sort(compareByYear)
  return books.slice(0,5);
};
console.log("Five oldest");
console.log(getFiveOldest(books));

// Part 2
const isUnknownAuthor = book => book.author === "Unknown";

// Can be written with Array.filter in a cleaner way.
const filterOutKnownAuthors = books => {
  // Immutable because we don't change or return the original array.
  const unknownAuthorBooks = [];
  for (let book of books) {
    if (isUnknownAuthor(book)) {
      unknownAuthorBooks.push(book);
    }
  }
  return unknownAuthorBooks;
};

const getThreeNewestByUnknownAuthors = books => {
  // We reassign so we have a copy.
  books = filterOutKnownAuthors(books);
  books.sort(compareByYear);
  return books.slice(-3);
};

console.log("Three newest by unknown authors");
console.log(getThreeNewestByUnknownAuthors(books));


// Part 3
const sortByLanguageAndCountry = books => {
  // Language reverse alphabetically, then country alphabetically.
  // The function should be inside of the sortBy function because it's only used once.
  const compareByLanguageAndCountry = (book1, book2) => {
     if (book1.language < book2.language) return 1;
    if (book1.language > book2.language) return -1;
    
    if (book1.country > book2.country) return 1;
    if (book1.country < book2.country) return -1;
    return 0;
  };
  // Mutable operation.
  books.sort(compareByLanguageAndCountry);
  return books;
}

console.log("Sorted by language reverse alphabetically, then country alphabetically.");
console.log(sortByLanguageAndCountry(books));
