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


for(let i = 0; i < listOfNeighbours.length; i++){
    //reading from listOfNeighbours array
    for(let n = 0; n < listOfNeighbours.length; n++){
        if (typeof(listOfNeighbours[n][i]) !=='string') continue;       
        console.log(`Neighbour: ${listOfNeighbours[n][i]}` + 
        ` Neighbour: ${typeof(listOfNeighbours[n][i + 1]) === 'undefined' ? 'No neighbours' : listOfNeighbours[n][i + 1] }`);   
}
}