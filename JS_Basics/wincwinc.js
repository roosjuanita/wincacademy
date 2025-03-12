'use strict' 

const monthPrice = 5;
const yearDiscount = 0.9;
const yearPrice = ((monthPrice * 12) * yearDiscount);
const customerReferredDiscount = (1 / 3); 
let customerReferred;
let discount;

// The user called Salman subscribed for a whole year and referred no new customers.
console.log('Salman paid:', yearPrice);

//  The user Karen subscribed per month and referred 3 new customers.
customerReferred = 3;
discount = (customerReferred * customerReferredDiscount);
console.log('Karen paid:', ((12 - discount)* monthPrice));

// The user Daniela subscribed for a whole year and referred 8 new customers.
customerReferred = 8;
discount = Math.floor((customerReferred * customerReferredDiscount));
console.log('Daniela paid:', ((12 - discount)* (monthPrice * yearDiscount)));

const freedomfighter = "nelson mandela";
console.log(freedomfighter.indexOf("m"))

