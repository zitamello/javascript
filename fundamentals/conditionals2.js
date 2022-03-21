const country = "Brazil";
const continent = "South America";
let population = 250;
const language = "Portuguese";
const isIsland = false;


  console.log(`${country} is located in ${continent} continent and has the gran population of ${population} millions.`
            + ` Its official language is ${language}` + " and the assumption that Brazil is an island is "
            + `${isIsland}.`);

populationHalf = population / 2;

console.log(`If ${country} is split into halves, each half would contain ${populationHalf} million people.`);

if (population > 33) {
  console.log(`${country} population is above average.`)
} else {
  console.log(`${country} population is below average.`)
}
