const myCountry = {
    country: 'Brazil',
    capital: 'Brasilia',
    population: 250,
    continent: 'South America',
    neighbours: ['Argentina', 'Bolivia', 'Colombia'],
    language: 'Portuguese',

    describeCountry: function () {
        return `${this.country} is a country located in the ${this.continent} continent and has over ${this.population} million `+
        `${this.language}-speaking people.` + 
        ` ${this.country} has ${this.neighbours.length} neighbouring countries and its capital city is called ${this.capital}.`;
    },

    checkIsland: function(){
        if (this.neighbours.length > 0) {
             myCountry['isIsland'] = false;
        } else {
            myCountry['isIsland'] = true;
        }
        return `${this.country} is ${this.isIsland ? 'an' : 'not an'} island.`;
}
}

console.log(myCountry.describeCountry());
console.log(myCountry.checkIsland());