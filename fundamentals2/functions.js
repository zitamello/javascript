'use strict';

function logger() {
    console.log('My name is Jonas!');
}

logger();


function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
//console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

function describeCountry(country, population, capitalCity) {
    const countryDescriptions = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
    return countryDescriptions;
}

const countryA = describeCountry('Brazil', 250, 'Brasilia');
console.log(countryA);


const countryB = describeCountry('Finland', 6, 'Helsinki');
console.log(countryB);


const countryC = describeCountry('South Korea', 55, 'Seoul');
console.log(countryC);

//function declaration 

function calculateAge1(birthYear){
    return 2022 - birthYear;
}

const age1 = calculateAge1(1989);
console.log(age1);

//anonymous function // function expression

const calculateAge2 = function(birthYear){
    return 2022 - birthYear;
}

const age2 = calculateAge2(1991);
console.log(age1, age2);

function percentageOfTheWorld(population) {
    const worldPopulation = 7900;
    const totalPercentage = (population / worldPopulation) * 100;
    return totalPercentage; 
}

let percentage = percentageOfTheWorld(1441);
console.log(`China has ${Math.round(percentage)} % of the world population.`);
percentage = percentageOfTheWorld(250);
console.log(`Brazil has ${Math.round(percentage)} % of the world population`);
percentage = percentageOfTheWorld(913);
console.log(`India has ${Math.round(percentage)} % of the world population`);

const percentage1 = function(population){
    const worldPopulation = 7900;
    const totalPercentage = (population / worldPopulation) * 100;
    return totalPercentage; 
}

const worldPercentage = percentage1(144);
console.log(`Japan has ${Math.round(worldPercentage)} % of the world population`);

