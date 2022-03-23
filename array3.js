/* Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values
*/

const populations = [350, 250, 1441, 55];

if (populations.length === 4) {
    console.log('True! The array has 4 elements!');
}


const percentageOfWorld = (population) => {
    const totalWorldPopulation = 7900;
    const populationPercentage = Math.round((population / totalWorldPopulation) * 100);
    return populationPercentage;
} 

const percentages = [percentageOfWorld(populations[0]), percentageOfWorld(populations[1]), percentageOfWorld(populations[2]), percentageOfWorld(populations[3])];
console.log(percentages);



