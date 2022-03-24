//using continue and break; 


const studentArray = [
    'Jardel',
    'Borges',
     1988,
    "Brazil",
    ['David', 'Zita', 'Jean'],
    true
];

const types = [];


//continue skips the current iteration and goes to the next one; 
console.log('---- ONLY STRINGS ---')
for(let i = 0; i < studentArray.length; i++) {
    //reading from student array
    if(typeof studentArray[i] !== 'string') continue;

    //filling an array
    //types[i] = typeof(studentArray[i]); //same as types[0] = 'string'
    types.push(typeof(studentArray[i]));
    console.log(studentArray[i], typeof(studentArray[i]));
}

//break terminates the entire loop

console.log('---- BREAK WITH NUMBER ---')
for(let i = 0; i < studentArray.length; i++) {
    //reading from student array
    if(typeof studentArray[i] === 'number') break;

    //filling an array
    //types[i] = typeof(studentArray[i]); //same as types[0] = 'string'
    //types.push(typeof(studentArray[i]));
    console.log(studentArray[i], typeof(studentArray[i]));
}
