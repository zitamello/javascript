function calculateAge1(birthYear){
    return 2022 - birthYear;
}

const age1 = calculateAge1(1989);
console.log(`This is the result of the function declaration. And the age you want to know is ${age1}`);


const calcAge2 = function (birthYear){
    return 2022 - birthYear;
}

const age2 = calcAge2(1989);
console.log(`This is the result of the function expression. Also called anonymus function. 
And the age you want to know is ${age2}`);

//arrow function declaration

const calcAge3 = birthYear => 2022 - birthYear;
age3 = calcAge3(1991);
console.log(`This is the result of the arrow function. And the age you want to know is ${age3}`);

const yearsUntillRetirement = (birthYear, firstName) => {
    const age = 2027 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntillRetirement(1991, 'Jonas'));
console.log(yearsUntillRetirement(1994, 'Allan'));

const percentageOfWorld = (population, countryName) => {
    const totalWorldPopulation = 7900;
    const populationPercentage = (population / totalWorldPopulation) * 100;
    return `${countryName} has ${population} million people. ` +
    `It's about ${Math.round(populationPercentage)}% of the world population.`;
}

console.log(percentageOfWorld(1441, "China"));
console.log(percentageOfWorld(250, "Brazil"));