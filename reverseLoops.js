// const student = [
//     'Jonas',
//     'Shmertzman',
//     2022 - 1992,
//     'teacher',
//     ['Michael', 'Sarah', 'Steven'],
//     true
// ];

// //4, 3, 2.... 0; 

// for(let i = student.length - 1; i >= 0; i--) {
//     console.log(i, student[i]);
// }

// //loop inside a loop 

// for(let exercise = 1; exercise < 4; exercise++) {
//     console.log(`---starting exercise ${exercise}`);

//     for(let rep = 1; rep < 6; rep++){
//         console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋️‍♀️`);
//     }
// }
/*
. Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire
arrays. Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
worry if it's too difficult for you! But you can still try to figure this out anyway
*/

const listOfNeighbours = [
    ['Canada','Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

const onlyNeighbours = [];

for(let i = 0; i < listOfNeighbours.length; i++){
    //reading from listOfNeighbours array
    console.log(listOfNeighbours[2][i]);

    //filling an array
    //types[i] = typeof(studentArray[i]); //same as types[0] = 'string'
    //onlyNeighbours.push(listOfNeighbours[i]);
    //console.log(onlyNeighbours[i]);
}
    // for(let exercise = 1; exercise < 4; exercise++) {
//     console.log(`---starting exercise ${exercise}`);

//     for(let rep = 1; rep < 6; rep++){
//         console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋️‍♀️`);
//     }
// }
    // for(let neighbours = 1; neighbours < listOfNeighbours.length; neighbours++){
    //     console.log(`Neighbour:${listOfNeighbours[country]}`);




