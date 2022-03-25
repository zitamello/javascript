
//objects 
//the order does not matter, so objects are used for unstructured data;
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedman',
    age: 2022 - 1990,
    job: 'teacher',
    friends: ['Michael', 'Sarah', 'John']
};

//console.log(jonas);
/*Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments)
*/

const myCountry = {
    country: 'Brazil',
    capital: 'Brasilia',
    language: 'Portuguese',
    population: 250,
    neighbours: ['Argentina', 'Bolivia', 'Colombia', 'Equador', 'Uruguay', 'Paraguay', 'Venezuela']
};

//console.log(myCountry);

//using dot notation refers to properties that exist inside the object 

console.log(jonas.friends);

//using the bracket notation refers to the actual value. This allows expressions and assignments that
//are otherwise not possible with dot notation 
console.log(jonas['age']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);


jonas.location = 'Portugal';
jonas['e-mail'] = 'jonas_schertzman@gmail.com';

// const userInput = prompt('What do you wanna know about Jonas? Choose between firstName, lastName, age, job or friends.');
// if(jonas[userInput]) {
//     console.log(jonas[userInput]);
// } else {
//     console.log('Wrong Request.');
// }

//challenge 
//output jonas has 3 friends and his best friend is michael; 

console.log(`${jonas.firstName} has ${jonas.friends.length} friends` + 
` and his best friend is ${jonas.friends[0]}`);

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,` +
` ${myCountry.neighbours.length} neighbours countries and a capital called ${myCountry.capital}.`);

myCountry.population = myCountry.population + 2;
console.log(`${myCountry.population} million people`);
myCountry['population'] = myCountry.population - 2;
console.log(`${myCountry.population}`);