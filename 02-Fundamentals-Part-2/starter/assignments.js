"use strict";
//  ############ --------------LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const country1 = describeCountry("Colombia", 51, "Bogota");
const country2 = describeCountry("EEUU", 332, "Washington, DC");
const country3 = describeCountry("Argentina", 45, "Buenos Aires");
console.log(country1);
console.log(country2);
console.log(country3);

//  ############ --------------LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)
console.log("");
console.log("LECTURE: Function Declarations vs. Expressions");

const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

const chinaWorldPer = percentageOfWorld1(1441);
const colombiaWorldPer = percentageOfWorld1(51);
const eeuuWorldPer = percentageOfWorld1(332);
console.log(chinaWorldPer);
console.log(colombiaWorldPer);
console.log(eeuuWorldPer);

const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
};
console.log(percentageOfWorld2(1441));
console.log(percentageOfWorld2(51));
console.log(percentageOfWorld2(332));

//  ############ --------------LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'
console.log("");
console.log("LECTURE: Arrow Function");
const percentageOfWorld3 = (population) => (population / worldPopulation) * 100;
console.log(percentageOfWorld3(1441));
console.log(percentageOfWorld3(51));
console.log(percentageOfWorld3(332));

//  ############ --------------LECTURE: Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice
console.log("");
console.log("LECTURE: Functions Calling Other Functions");

const describePopulation = (country, population) => {
  const populationPercWorld = percentageOfWorld1(population);

  return `${country} has ${population} million people, which is about ${populationPercWorld} of the world`;
};

console.log(describePopulation("China", 1441));
console.log(describePopulation("Colombia", 51));
console.log(describePopulation("EEUU", 332));

//  ############ --------------LECTURE: Introduction to Arrays
// Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values
console.log("");
console.log("LECTURE: Introduction to Arrays");
const populations = [1441, 51, 332, 45];
console.log(
  `Does the array have 4 elements?: ${populations.length === 4 ? true : false}`
);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

//  ############ -------------- LECTURE: Basic Array Operations (Methods)
// 1. Create an array containing all the neighbouring countries of a country of your
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// into a variable called 'neighbours'
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So add it to the end of the 'neighbours' array
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from
// the end of the array
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country :D'
// 5. Change the name of one of your neighbouring countries. To do that, find the
// index of the country in the 'neighbours' array, and then use that index to
// change the array at that index position. For example, you can search for
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

console.log("");
console.log("LECTURE: Basic Array Operations (Methods)");
const neighbours = ["Ecuador", "Peru", "Brasil", "Venezuela", "Panama"];
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}
neighbours[neighbours.length - 1] = "Argentina";
console.log(neighbours);

//  ############ -------------- LECTURE: Introduction to Objects
// 1. Create an object called 'myCountry' for a country of your choice, containing
// properties 'country', 'capital', 'language', 'population' and
// 'neighbours' (an array like we used in previous assignments)
console.log("");
console.log("LECTURE: Introduction to Objects");
const myCountry = {
  country: "Colombia",
  capital: "Bogota",
  language: "Spanish",
  population: 51,
  neighbours: ["Ecuador", "Peru", "Brasil", "Venezuela", "Panama"],
};
console.log(myCountry);
//  ############ -------------- LECTURE: Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation.
console.log("");
console.log("LECTURE: Dot vs. Bracket Notation");
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language} people, ${myCountry.neighbours.length} neighbouring countries and a capitall called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);
