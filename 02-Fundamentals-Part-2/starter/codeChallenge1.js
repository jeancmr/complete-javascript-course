"use strict";
// DATA 1
// const dolphinsOne = 44;
// const dolphinsTwo = 23;
// const dolphinsThree = 71;

// const koalasOne = 65;
// const koalasTwo = 54;
// const koalasThree = 49;

// DATA 2
const dolphinsOne = 85;
const dolphinsTwo = 54;
const dolphinsThree = 41;

const koalasOne = 23;
const koalasTwo = 34;
const koalasThree = 27;
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsAverage = calcAverage(dolphinsOne, dolphinsTwo, dolphinsThree);
const koalasAverage = calcAverage(koalasOne, koalasTwo, koalasThree);

function checkWinner(avgDolphings, avgKoalas) {
  console.log("Dolphins avrg: " + avgDolphings);
  console.log("Koalas avrg: " + avgKoalas);

  if (avgDolphings >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphings} vs ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphings) {
    return `Koalas win (${avgKoalas} vs ${avgDolphings})`;
  } else {
    return "niaoniao";
  }
}

console.log(checkWinner(dolphinsAverage, koalasAverage));
// console.log(checkWinner(111, 557));
