const randomPersonData = require("./data.js")['randomPersonData'];

function getCurrentDate() {
  const today = new Date();
  const date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
  const [day, month, year] = date.split('/').map(Number);
  return {day, month, year}
}; 
// console.log(getCurrentDate());

// Function to calculate current age of a person
const calculateAge = person => {
  // const currentDate = getCurrentDate();
  const currentDate = getCurrentDate();
  const [birthDay, birthMonth, birthYear] = person.birthday.dmy.split('/').map(Number);
  let age = currentDate.year - birthYear;

  // If birthday hasn't occurred yet this year, subtract 1
  if (
    birthMonth > currentDate.month ||
    (birthMonth === currentDate.month && birthDay > currentDate.day)
  ) {
    age -= 1;
  }

  // Return data with updated age
  return { ...person, age };
}

// Create a new array with the updated ages of all the persons
const peopleWithCorrectAge = randomPersonData.map(calculateAge);
// console.log(peopleWithCorrectAge[0]);

// Function to calculate which zodiac sign a birthday has
const getZodiacSign = (day, month) => {
  switch (true) {
    case (month === 3 && day >= 21): case (month === 4 && day <= 19): return 'Aries';
    case (month === 4 && day >= 20): case (month === 5 && day <= 20): return 'Taurus';
    case (month === 5 && day >= 21): case (month === 6 && day <= 20): return 'Gemini';
    case (month === 6 && day >= 21): case (month === 7 && day <= 22): return 'Cancer';
    case (month === 7 && day >= 23): case (month === 8 && day <= 22): return 'Leo';
    case (month === 8 && day >= 23): case (month === 9 && day <= 22): return 'Virgo';
    case (month === 9 && day >= 23): case (month === 10 && day <= 22): return 'Libra';
    case (month === 10 && day >= 23): case (month === 11 && day <= 21): return 'Scorpio';
    case (month === 11 && day >= 22): case (month === 12 && day <= 21): return 'Sagittarius';
    case (month === 12 && day >= 22): case (month === 1 && day <= 19): return 'Capricorn';
    case (month === 1 && day >= 20): case (month === 2 && day <= 18): return 'Aquarius';
    case (month === 2 && day >= 19): case (month === 3 && day <= 20): return 'Pisces';
    default: return 'Unknown';
  }
};

// Candidate setup
const candidate = {
  birthday: {dmy:'1/8/1986'},
  age: 38,
  zodiac: getZodiacSign(1, 8)
};


const checkZodiacMatch = (candidateZodiacSign, potentialMatchZodiacSign) => {
  const fire = ['Aries', 'Leo', 'Sagittarius'];
  const air = ['Gemini', 'Libra', 'Aquarius'];
  const water = ['Cancer', 'Scorpio', 'Pisces']
  const earth = ['Taurus', 'Virgo', 'Capricorn']
  
  if (fire.includes(candidateZodiacSign)) {
    if (fire.includes(potentialMatchZodiacSign) || air.includes(potentialMatchZodiacSign))
      return true;
  }

  if (earth.includes(candidateZodiacSign)) {
    if (earth.includes(potentialMatchZodiacSign) || water.includes(potentialMatchZodiacSign))
      return true;
  }

  if (air.includes(candidateZodiacSign)) {
    if (air.includes(potentialMatchZodiacSign) || fire.includes(potentialMatchZodiacSign))
      return true;
  }

  if (water.includes(candidateZodiacSign)) {
    if (water.includes(potentialMatchZodiacSign) || earth.includes(potentialMatchZodiacSign))
      return true;
  }

  // If no match, return false
  return false;

}

// Function to calculate the age difference
const calculateAgeDifference = (ageA, ageB) => {
  return Math.abs(ageA - ageB);  // Absolute value of age difference
};

// Function to find matches if compatible
const matchIfCompatible = person => {
  const [day, month] = person.birthday.dmy.split('/').map(Number);
  const matchZodiacSign = getZodiacSign(day, month);
  
  // If zodiac sign of potential match matches with love seeker (True or False)
  if (!checkZodiacMatch(candidate.zodiac, matchZodiacSign)) {
    return null;
  }
  
  const ageDifference = calculateAgeDifference(candidate.age, person.age);
  return { ...person, ageDifference}; 
};

const displayMatches = matches => {
  matches.forEach(match => {
    const [day, month] = match.birthday.dmy.split('/').map(Number);
    const zodiac = getZodiacSign(day, month);
    console.log(`Name: ${match.name} ${match.surname}, Age: ${match.age}, Zodiac: ${zodiac}`);
  });
}


// Sorting and limiting the result to 20 matches
const findMatches = people => {
  return people
    .map(matchIfCompatible)
    .filter(Boolean)
    .sort((a, b) => a.ageDifference - b.ageDifference)
    .slice(0, 20);
};


const matches = findMatches(peopleWithCorrectAge);
displayMatches(matches);
