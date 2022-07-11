'use strict';


const movements = [200, 450, 400, 1000, -650, -140, -78, 1300];

for (const movement of movements) {
    if (movement > 0){
        console.log(`You deposited: ${Math.abs(movement)}`);
    } else {
        console.log(`You withdrew: ${Math.abs(movement)}`);
    }
}


console.log('-------USING FOR EACH----------');
movements.forEach(function (movement, index, array) {
    if (movement > 0){
        console.log(`Movement ${index + 1}: You deposited: ${Math.abs(movement)}`);
    } else {
        console.log(`Movement ${index + 1}: You withdrew: ${Math.abs(movement)}`);
    }
})

console.log('----------- USING FOR EACH WITH MAPS -------------');

const currencies = new Map([
    ['USD', 'United States Dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Great Britain Pound'],
    ['BRL', 'Brazilian Real'],
]);

currencies.forEach(function (value, key, map){
    console.log(`${key}: ${value}`);
})


console.log('----------- USING FOR EACH WITH SETS -------------');

const currenciesUnique = new Set ([
    'USD', 'GBP', 'EUR', 'EUR', 'USD', 'BRL']
);

console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map){
    console.log(`${value}: ${value}`);
})

const mercury = {
    name: 'Mercury',
    description: 'The innermost planet of the Solar System.' + 
    ' Mercury is the smallest major planet in both size and mass.' + 
    ' Due to its proximity to the sun, it has the shortest year of all the planets of the Solar System,',
    visibleAtTheSky: true,
    mass: '3,285 × 10^23',
    area: '74.800.000',
    gravity: '3,7',
    radius: '2.439,7',
    orbitalDaysAroundTheSun: '88',
    hasMoons: false,
    hasRings: false,
    homeToLife: false,

    factsAbout: function(){
        console.log(`${this.name} is ${this.description}` +  
        ` taking ${this.orbitalDaysAroundTheSun} Earth Days to orbit around the sun.` +
        ` ${this.name} has ${this.hasMoons === false ? 'no' : 'number of'} moons and ${this.hasRings === false ? 'no' : 'number of'} rings.`);
    }

}

const factsAboutMercury = mercury.factsAbout();

factsAboutMercury;
