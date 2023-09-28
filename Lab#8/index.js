// const moment = require("moment");
const moment = require("moment-timezone"); // In order to use tz
moment().format();

// 1. Calculate the number of days between your birthdate and the current date

const now = moment();
const bday = moment("2016-02-14 23:38");

// milsec > sec > min > hours > days
// daysLived = Math.floor((now - bday) / 1000 / 60 / 60 / 24)
// console.log(`Days Daughter A lived: ${daysLived} days.`);

daysLived = now.diff(bday, "days");
console.log(`Days Daughter A lived: ${daysLived} days.`);

// 2. Display the number of years, months,and days between your birthdate and current date.
// Example: 24 years, 8 months, and 26 days

// Ver1
//console.log(`${Math.floor(daysLived / 365)} years, ${Math.floor((daysLived % 365) / 30)} months, ${(daysLived % 365) % 30} days`);

// // Ver2 With diff() and add()
// let years = now.diff(bday, "year");
// bday.add(years, "years");
// let months = now.diff(bday, "months");
// bday.add(months, "months");
// let days = now.diff(bday, "days");
// console.log(years + " years " + months + " months " + days + " days");

// Ver3 With duration()
var diffDuration = moment.duration(now.diff(bday));
const years = diffDuration.years(); // 8 years
const months = diffDuration.months(); // 5 months
const days = diffDuration.days(); // 2 days
console.log(years + " years " + months + " months " + days + " days");

// 3. Given two dates, display the date closest to the current date

const day1 = moment("1979-11-25");
const day2 = moment("1979-11-25");

function closetDate(today, date1, date2) {
  let closest;
  today.diff(date1) === today.diff(date2)
    ? (closest = "Tie")
    : today.diff(date1) < today.diff(date2)
    ? (closest = date1.format("MMMM Do YYYY"))
    : (closest = date2.format("MMMM Do YYYY"));
  console.log(closest);
}

closetDate(now, day1, day2);

// 4. Given two dates, display whether the first date is before or after the second date

// Ver1 Custom Function
// function orderOfDate(date1, date2) {
//     date1.diff(date2) === 0
//       ? console.log("Tie")
//       : date1.diff(date2) > 0
//       ? console.log(`${date1.format("dddd, MMMM Do YYYY")} is AFTER ${date2.format("dddd, MMMM Do YYYY")}`)
//       : console.log(`${date1.format("dddd, MMMM Do YYYY")} is BEFORE ${date2.format("dddd, MMMM Do YYYY")}`);
//   }
// orderOfDate(day1, day2)

//Ver2 With isAfter() and isSameOrBefore()
moment(day1).isAfter(day2)
  ? console.log(
      `${day1.format("dddd, MMMM Do YYYY")} is AFTER ${day2.format(
        "dddd, MMMM Do YYYY"
      )}`
    )
  : moment(day1).isSameOrBefore(day2)
  ? console.log(
      `${day1.format("dddd, MMMM Do YYYY")} is SAME OR BEFORE ${day2.format(
        "dddd, MMMM Do YYYY"
      )}`
    )
  : null;

// 5. Display the current time in London
const londonTime = moment
  .tz("Europe/London")
  .format("dddd, Do MMMM YYYY hh:mm:ss a");
console.log(`Current London time is ${londonTime}`);
