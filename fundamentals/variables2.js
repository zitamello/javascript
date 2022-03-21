const country = "Brazil";
const continent = "South America";
let population = 250;
const language = "Portuguese";
const isIsland = false;


  console.log(`${country} is located in ${continent} continent and has the gran population of ${population} millions.`
            + ` Its official language is ${language}` + " and the assumption that Brazil is an island is "
            + `${isIsland}.`);

population = population / 2;
console.log(`If ${country} is split into halves, each half would contain ${population} million people.`);
population++;
console.log(population);

const finlandPopulation = 6;
const biggerThanFinland = population >= finlandPopulation;
console.log(biggerThanFinland)
