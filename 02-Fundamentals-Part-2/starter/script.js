"use strict";
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive yey");
// const interface = "audio";

// function logger() {
//   console.log("My name is Jonas");
// }

//calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// console.log(fruitProcessor(1, 2));

// const appeOrangeJuice = fruitProcessor(2, 4);
// console.log(appeOrangeJuice);

// ###### FUNCTION DECLARATIONS VS EXPRESSIONS
// console.log("");
//function declaration
// function calcAgel(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAgel(1991);

//function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);
// console.log(age1, age2);

//Arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
// return retirement;
//   return `${firstName} retires in ${retirement}`;
// };
// console.log(yearsUntilRetirement(1991, "juan"));
// console.log(yearsUntilRetirement(1980, "pedro"));

//FUNCTION CALLING OTHER FUNCTIONS
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
// const cutFruitPieces = (fruit) => fruit * 4;

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// ####### ------ REVIEWING FUNCTIONS
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
// const age = 2037 - birthYear; this was replaced by the below one
// const age = calcAge(birthYear);
// const retirement = 65 - age;
// if (retirement > 0) {
//   return retirement;
// } else {
//   return -1;
// }

// return `${firstName} retires in ${retirement}`;
// };
// console.log(yearsUntilRetirement(1991, "jonas"));
// console.log(yearsUntilRetirement(1950, "mike"));

//  ########## ---- ###### ARRAYS ########## ----- #########
// const friend1 = "michael";
// const friend2 = "steven";
// const friend3 = "peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[2], years[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// // friends = ["Bob", "Alice"]; no way
// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

// // EXERCISE
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearz = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(yearz[0]);
// const age2 = calcAge(yearz[1]);
// const age3 = calcAge(yearz[yearz.length - 1]);
// console.log(age1, age2, age3);
// const ages = [
//   calcAge(yearz[0]),
//   calcAge(yearz[1]),
//   calcAge(yearz[yearz.length - 1]),
// ];
// console.log(ages);

//  ##### basic array operations
// const friends = ["Michael", "Steven", "Peter"];
// //add elements
// // friends.push("Jay");
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// //remove elements
// friends.pop(); //last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); //first
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }

//  ########## ---- ###### OBJECTS ########## ----- #########
// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schedmnann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// DOT VS BRACKET NOTATION
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schedmnann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// console.log(jonas.'last' + nameKey
// const inputData = prompt(
//   `What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends`
// );

// console.log(`So you just picked ${jonas[inputData]}`);

// if (jonas[inputData]) {
//   console.log(jonas[inputData]);
// } else {
//   console.log(
//     "Wrong request. Choose between firstName, lastName, age, job and friends"
//   );
// }
// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// console.log(jonas);

//Challenge
//"Jonas has 3 friends, and his best friend is called Michael"

//First way
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`
// );

//Second way
// console.log(
//   `${jonas["firstName"]} has ${
//     jonas.friends.length
//   } friends and his best friend is called ${
//     jonas.friends[jonas.friends.indexOf("Michael")]
//   }`
// );

//'''''''''OBJECT METHODS

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schedmnann",
//   birthyear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriverLicense: true,

// calcAge: function (birth) {
//   return 2037 - birth;
// },

// calcAge: function () {
//   console.log(this);
//   return 2037 - this.birthyear;
// },

// calcAge: function () {
//   this.age = 2037 - this.birthyear;
//   return this.age;
// },
// getSummary: function () {
//   return `Name: ${this.firstName}, last name: ${this.lastName}, birth day: ${this.birthyear}, job: ${this.job}, jonas's friends: ${this.friends} and state of license: ${this.hasDriverLicense}`;
// },
// getSummary: function () {
//   return `${this.firstName} is a ${this.calcAge()}-yeard old ${
//     this.job
//   }, and he ${
//     this.hasDriverLicense ? "has" : "doesn't have"
//   } a driver's license`;
// },
// };

// console.log(jonas["calcAge"](1991));
// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.getSummary());
// console.log(jonas);

//  ########## ---- ###### LOOPS ########## ----- #########
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }
// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["michael", "peter", "steven"],
//   true,
// ];
// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i], typeof jonas[i]);

//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// // continue and break
// console.log("-----ONLY STRINGS-------");
// for (let i = 0; i < years.length; i++) {
//   if (typeof jonas[i] !== "string") continue;

//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log("-----BREAK WITH NUMBER-------");
// for (let i = 0; i < years.length; i++) {
//   if (typeof jonas[i] === "number") break;

//   console.log(jonas[i], typeof jonas[i]);
// }
//  -------- looping backwards
// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["michael", "peter", "steven"],
//   true,
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(jonas[i]);
// }

//  -------- loops in loops
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-----starting exercise ${exercise}`);

//   for (let rep = 1; rep < 8; rep++) {
//     console.log(`Exercise ${exercise}: lifting weight repetition ${rep}`);
//   }
// }

// while loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }
// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep}`);
//   rep++;
// }

// console.log(dice);
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  // dice = Math.trunc(Math.random() * 6) + 1;
  // console.log(dice);
  // console.log(
  //   `You rolled a ${dice}. ${dice === 6 ? "Well done!" : "Keep trying"}`
  // );
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end`);
}
