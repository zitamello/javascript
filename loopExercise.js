/* 
Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment,
and reflect on how much better this solution is
*/

const populations = [350, 250, 1441, 55];
const percentagesOriginal = [];
const percentages2 = [];

const percentageOfWorld = function(population){
    worldPopulation = 7900;
    percentagePopulation = (population / worldPopulation) * 100;
    return Math.round(percentagePopulation);
}

for(let i = 0; i < populations.length; i++) {
    percentages2[i] = `${Math.round(percentageOfWorld([populations[i]]))}%`;
}

//same code from before but without using for loops; 
percentagesOriginal.push(`${percentageOfWorld([populations[0]])}, ${percentageOfWorld([populations[1]])}, ` +
`${percentageOfWorld([populations[2]])}, ${percentageOfWorld([populations[3]])}`);
console.log(percentagesOriginal);
console.log(percentages2);
