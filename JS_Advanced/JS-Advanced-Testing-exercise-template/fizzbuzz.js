// THE SOLUTION
module.exports = fizzbuzz = (n) => {
    if (typeof n !== "number") {
        throw new Error('fizzbuzz needs a number!')
    }
    if (n % 15 === 0) return "FizzBuzz";
    if (n % 5 === 0) return "Buzz";
    if (n % 3 === 0) return "Fizz";
    return n
}  
  // const result = fizzbuzz(75); 
  // console.log(result);


// MY CODE:
// const parameter = 3;

// const fizzbuzz = parameter => {
//     if (typeof parameter !== 'number') {
//         throw new Error('Input is not a number');
//     }

//     if (parameter % 3 === 0 && parameter % 5 === 0) {
//         console.log('fizzbuzz');
//     } else if (parameter % 3 === 0) {
//         console.log('fizz');
//     } else if (parameter % 5 === 0) {
//         console.log('buzz');
//     } else {
//         console.log(parameter);
//     }
// };

// fizzbuzz(parameter);