
//for loop running while condition is true 
for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weight repetition ${rep}🏋️‍♀️`);
}

/* There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
*/

/*
for(let votes = 1; votes <= 50; votes++){
    console.log(`Voter number ${votes} is currently voting.`);
}
*/

const studentArray = [
    'Jardel',
    'Borges',
     1988,
    "Brazil",
    ['David', 'Zita', 'Jean'],
    true
];

const types = [];

for(let i = 0; i < studentArray.length; i++) {
    //reading from student array
    console.log(studentArray[i], typeof(studentArray[i]));
    

    //filling an array
    //types[i] = typeof(studentArray[i]); //same as types[0] = 'string'
    types.push(typeof(studentArray[i]));
}

console.log(types);

const birthYear = [1992, 1987, 1969, 2000];
const ages = [];

for(let i = 0; i < birthYear.length; i++) {
    ages.push(2022 - birthYear[i]);
}

console.log(ages);



