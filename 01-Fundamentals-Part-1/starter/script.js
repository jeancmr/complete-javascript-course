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

const age = 12;
const isOldEnough = age >= 18;
if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}
const birthYear = 2001;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
