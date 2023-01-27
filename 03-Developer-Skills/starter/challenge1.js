'use strict';

// const forecasted = [17, 21, 23];
const forecasted = [12, 5, -5, 0, 4];

const arr = [];

const printForecast = function (tost) {
  for (let i = 0; i < tost.length; i++) {
    arr.push(`${tost[i]}ºC in ${i + 1} days ... `);
  }
  return arr;
};
console.log(printForecast(forecasted));
arr.forEach(element => console.log(element));
