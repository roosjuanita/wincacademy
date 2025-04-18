'use strict';

// const evenChecker = number => {
//     let isEven;

//     if ((number % 2) === 0 ) {
//         isEven = true;
//     }
//     else {
//         isEven = false;
//     }
//     return isEven;
// }

// const unevenChecker = number => {
//     let isEven;

//     if ((number % 2) === 0 ) {
//         isEven = false;
//     }
//     else {
//         isEven = true;
//     }
//     return isEven;
// }

const isEvenNumber = number => {
    return number % 2 === 0;
}

const isUnevenNumber = number => {
    return number % 2 !== 0;
}

const filterFunction = (array, checker) => {
    const result = [];
    for (const number of array){
        // if (checker(number) === true) {
        if (checker(number)) {
            result.push(number)
        } 
    };
    return result;

}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(`Even numbers are: ${filterFunction(numbers, isEvenNumber)} `)
console.log(`Uneven numbers are: ${filterFunction(numbers, isUnevenNumber)} `)