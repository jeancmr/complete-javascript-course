// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const hurrah = num => num + 7 * num;
console.log(hurrah, typeof hurrah, hurrah(8));
console.log(hurrah(2));
console.log(hurrah);

const agesPeople = [
  24, 35, 67, 43, 23, 21, 23, 25, 26, 24, 29, 25, 24, 43, 35, 23, 21, 20,
];

// const avrPeople = function (ages) {
//   let sum = 0;
//   for (let i = 0; i < ages.length; i++) {
//     sum += ages[i];
//   }
//   return sum / 18;
// };

// const avrPeople = function (ages) {
//   let sum = 0;
//   ages.forEach(element => (sum += element));
//   return sum / ages.length;
// };
// console.log(avrPeople(agesPeople));

const avrPeople = agesPeople.reduce((a, b) => a + b, 0) / agesPeople.length;
console.log(avrPeople);
