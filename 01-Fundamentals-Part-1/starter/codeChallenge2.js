// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement
const weightM = 95;
const heightM = 1.88;
const weightJ = 85;
const heightJ = 1.76;
const bmiM = weightM / heightM ** 2;
const bmiJ = weightJ / heightJ ** 2;
if (bmiM > bmiJ) {
  console.log(`Mark's BMI (${bmiM}) is higher than John's (${bmiJ}!`);
} else {
  console.log(`John's BMI (${bmiJ}) is higher than Mark's (${bmiM})!`);
}
