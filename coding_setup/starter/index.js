// Import a single thing
import { add, divide, subtract, multiply, square, speedOfLightMetersPerSecond } from "./lib.js";
import camelcaseKeys from "camelcase-keys";

// // Import multiple things
// import { subtract, multiply } from "./lib.js";

// // Importing something that is not a function works the same
// import { speedOfLightMetersPerSecond } from "./lib.js";

const person = {
first_name: "Leo", 
last_name: "Johnson", 
phone_number: "+31654738297"
}

console.log(camelcaseKeys(person))

console.log(add(3, 4));

console.log(subtract(5, 2));

console.log(multiply(10, 4));

console.log(`The speed of light: ${speedOfLightMetersPerSecond} m/s.`);