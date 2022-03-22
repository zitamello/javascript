//function calling another function 

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));


function percentageOfWorld(population) {
    const totalPopulation = 7900;
    percentage = (population / totalPopulation) * 100;
    return Math.round(percentage);
}

const describePopulation = (countryName, population) => {
        const totalPercentage = percentageOfWorld(population);
        return `${countryName} has ${population} million people, ` + 
        `which is about ${totalPercentage}% of the world population.`;
}

console.log(describePopulation("China", 1441));
console.log(describePopulation("America", 350));
console.log(describePopulation("United Kingdom", 60));

const calculateAge = (birthYear) => {
    return 2037 - birthYear;
}

const yearsUntillRetirement = function (birthYear, firstName){
    const age = calculateAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} is already retired. 🤸‍♂️`);
        return -1;
    }
}

console.log(yearsUntillRetirement(1960, "Michael"));