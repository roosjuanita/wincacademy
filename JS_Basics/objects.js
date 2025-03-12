'use strict';

const perfectDate =  {
    location: "Amsterdam",
    date: "2023-06-24",
    duration: "2 hours"
}

console.log(`The date will be in ${perfectDate.location}.`)

perfectDate.activity = "dancing";
perfectDate.music = "jazz";
perfectDate.romantic = "yes";

console.log(perfectDate)

perfectDate.music = "rock";

console.log(`I would like to go on a date with you in ${perfectDate.location} on ${perfectDate.date} for ${perfectDate.duration} to go ${perfectDate.activity} and listen to ${perfectDate.music}`)