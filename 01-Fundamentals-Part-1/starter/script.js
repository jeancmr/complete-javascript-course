// let js = "amazing";
// if (js === "amazing") alert("JavaScript is fun!");

//  console.log(40 + 8 + 23 - 10);

// let and const
// let age = 38;
// age = 39;
// const birthYear = 2001;
// birthYear = 5;

// basic operations
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2029;
//  console.log(ageJonas, ageSarah);
//  console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = "Jean";
// const lastName = "Madiedo";
//  console.log(firstName + " " + lastName);

// let x = 10 + 5;
// x += 10; // x = x + 10 =25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
//  console.log(x);

// const isFullAge = ageSarah >= 18;
//  console.log(isFullAge);

//  ################ STRINGS ##########
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
//  console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
//  console.log(jonasNew);

// const age = 12;
// const isOldEnough = age >= 18;
// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
// }
// const birthYear = 2001;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

//type conversion
// const inputYear = "1991";
// console.log(Number(inputYear) + 1);
// console.log(inputYear + 1);
// console.log(Number("Jean"));
// console.log(typeof NaN);

// console.log(String(23), Number(inputYear) + 1);

// //type coercion
// console.log("I am " + 23 + " years old"); //It prints a string
// console.log("23" - "10" - 3); //BECAUSE OF THE MINUS OPERATOR
// console.log("23" + "10" + 3); //STRING CONVERTED TO A STRING
// console.log("23" + "10" - 3);
// console.log("23" * "2");
// console.log("23" / "2");

// let n = "1" + 1; // "11"
// n = n - 1;
// console.log(n);
// console.log(2 + 3 + 4 + "5");
// console.log("10" - "4" - "3" - 2 + "5");

// 4 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("jean"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 0;
// if (money) {
//   console.log("Dont spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is undefined");
// }
// const age = "18";
// if (age === 18) console.log("you just became an adult :D (strict)");
// if (age == 18) console.log("you just became an adult :D (loose)");

// const favourite = prompt("What's your favourite number");
// const numberFavorite = Number(favourite);
// console.log(favourite + 1, typeof favourite);
// console.log(numberFavorite + 1, typeof numberFavorite);

// const favourite = Number(prompt("What's your favourite number"));
// console.log(favourite);
// console.log(typeof favourite);
// if (favourite === 23) console.log("cool! 23 is an amazing number");

// ################## TERNARY OPERATOR ################
const age = 28;
age >= 18
  ? console.log("I like to drink wine🍷")
  : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
