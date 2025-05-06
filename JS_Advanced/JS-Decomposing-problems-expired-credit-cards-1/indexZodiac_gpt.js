const randomPersonData = require("./data.js")['randomPersonData'];

function getCurrentDate() {
    const today = new Date();
    const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    const [day, month, year] = date.split('/').map(Number);
    return { day, month, year };
}

// Function to calculate age from a person object
const calculateAge = person => {
  const currentDate = getCurrentDate();
  const [birthDay, birthMonth, birthYear] = person.birthday.dmy.split('/').map(Number);
  let age = currentDate.year - birthYear;

  if (birthMonth > currentDate.month || (birthMonth === currentDate.month && birthDay > currentDate.day)) {
    age -= 1;
  }

  return { ...person, age };
};

// Preprocess people and update age
const peopleWithCorrectAge = randomPersonData.map(calculateAge);

// Love seeker setup
const loveSeekerBirthday = '1/8/1986';
const loveSeeker = calculateAge({ birthday: { dmy: loveSeekerBirthday } });
const loveSeekerZodiac = getZodiacSign(1, 8);

// Zodiac sign lookup
function getZodiacSign(day, month) {
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
}

const checkZodiacMatch = (zodiacA, zodiacB) => {
  const fire = ['Aries', 'Leo', 'Sagittarius'];
  const air = ['Gemini', 'Libra', 'Aquarius'];
  const water = ['Cancer', 'Scorpio', 'Pisces'];
  const earth = ['Taurus', 'Virgo', 'Capricorn'];

  if (fire.includes(zodiacA)) return fire.includes(zodiacB) || air.includes(zodiacB);
  if (earth.includes(zodiacA)) return earth.includes(zodiacB) || water.includes(zodiacB);
  if (air.includes(zodiacA)) return air.includes(zodiacB) || fire.includes(zodiacB);
  if (water.includes(zodiacA)) return water.includes(zodiacB) || earth.includes(zodiacB);

  return false;
};

const calculateAgeDifference = (ageA, ageB) => Math.abs(ageA - ageB);

// Check compatibility and return extended person data
const matchIfCompatible = person => {
  const [day, month] = person.birthday.dmy.split('/').map(Number);
  const matchZodiac = getZodiacSign(day, month);

  if (!checkZodiacMatch(loveSeekerZodiac, matchZodiac)) return null;

  const ageDifference = calculateAgeDifference(loveSeeker.age, person.age);
  return { ...person, ageDifference };
};

// Display results
const displayMatches = matches => {
  matches.forEach(match => {
    const [day, month] = match.birthday.dmy.split('/').map(Number);
    const zodiac = getZodiacSign(day, month);
    console.log(`Name: ${match.name} ${match.surname}, Age: ${match.age}, Zodiac: ${zodiac}`);
  });
};

// Main matching logic
const findMatches = people => {
  return people
    .map(matchIfCompatible)
    .filter(Boolean)
    .sort((a, b) => a.ageDifference - b.ageDifference)
    .slice(0, 20);
};

// Run matching and display
const matches = findMatches(peopleWithCorrectAge);
displayMatches(matches);
