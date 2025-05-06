'use strict';

const deeplyNested = [
    {
    name: "Marianna",
    surname: "Markovič",
    gender: "female",
    region: "Slovakia",
    age: 33,
    title: "mrs",
    phone: "(987) 323 6204",
    birthday: { dmy: "29/08/1987", mdy: "08/29/1987", raw: 557253462 },
    email: "marianna87@example.com",
    password: "Markovič87*^",
    credit_card: {
      expiration: {
        month: 1,
        year: 22
      },
      number: "9879-9658-8306-9662",
      pin: 3776,
      security: 828,
    },
    photo: "https://uinames.com/api/photos/female/13.jpg",
  },
  {
    name: "Gejza",
    surname: "Riška",
    gender: "male",
    region: "Slovakia",
    age: 31,
    title: "mr",
    phone: "(497) 712 2456",
    birthday: { dmy: "22/09/1989", mdy: "09/22/1989", raw: 622502898 },
    email: "gejzariška@example.com",
    password: "Riška89({",
    credit_card: {
      expiration: {
        month: 2,
        year: 26
      },
      number: "7853-2037-7965-2370",
      pin: 5421,
      security: 622,
    },
    photo: "https://uinames.com/api/photos/male/16.jpg",
  },
  {
    name: "Εύρυτος",
    surname: "Βούλγαρης",
    gender: "male",
    region: "Greece",
    age: 30,
    title: "mr",
    phone: "(971) 391 6670",
    birthday: { dmy: "28/04/1990", mdy: "04/28/1990", raw: 641295287 },
    email: "Εύρυτος-90@example.com",
    password: "Βούλγαρης90{_",
    credit_card: {
      expiration: {
        month: 4,
        year: 23
      },
      number: "3773-9284-5455-9313",
      pin: 2844,
      security: 128,
    },
    photo: "https://uinames.com/api/photos/male/3.jpg",
  }
];

// This only prints properties up to 3 levels deep.
console.log(deeplyNested);

// We can use this to print all levels deep, or to a certain depth.

// Print all levels
console.dir(deeplyNested, { depth: null });

// Print n levels deep
console.dir(deeplyNested, { depth: 1 });

// We can also create a (wrapper) function that makes doing this a bit cleaner
// in case you want to do it multiple times in a file. Don't forget to remove
// this helper function when you're done debugging.

const consoleDeep = something => {
  console.log(something);
  console.dir(something, {depth: null});
};

consoleDeep(deeplyNested);