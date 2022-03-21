
const age = 23;

//age >= 18 ? console.log("I like to drink Vodka!") : console.log("I like to drink water!");

const myDrink = age >= 18 ? 'alcohol' : 'water';
console.log(`I'm allowed to drink ${myDrink}`);

const country = "Brazil";
const population = 130;
const countryPopulation = population > 33 ? 'above average' : 'below average';
console.log(`${country} population is ${countryPopulation}`);

//using ternary operator inside console.log as an expression

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);
