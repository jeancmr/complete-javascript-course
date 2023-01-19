// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK �

// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
const dolphinsOne = 96;
const dolphinsTwo = 108;
const dolphinsThree = 89;

const KoalasOne = 88;
const KoalasTwo = 91;
const KoalasThree = 110;

//§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// const dolphinsOne = 97;
// const dolphinsTwo = 112;
// const dolphinsThree = 101;

// const KoalasOne = 109;
// const KoalasTwo = 95;
// const KoalasThree = 123;

//§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// const dolphinsOne = 97;
// const dolphinsTwo = 112;
// const dolphinsThree = 101;

// const KoalasOne = 109;
// const KoalasTwo = 95;
// const KoalasThree = 106;

const avrgDolphins = (dolphinsOne + dolphinsTwo + dolphinsThree) / 3;
const avrgKoalas = (KoalasOne + KoalasTwo + KoalasThree) / 3;
console.log(avrgDolphins, avrgKoalas);
const minScore = 100;
if (avrgDolphins > avrgKoalas && avrgDolphins >= minScore) {
  console.log("Dolphins has won the game!");
} else if (avrgKoalas > avrgDolphins && avrgKoalas >= minScore) {
  console.log("Koalas has won the game!");
} else if (avrgKoalas === avrgDolphins) {
  console.log("Tied gameee");
} else {
  console.log("No one has won. Neither of the team reached the minimum score");
}
