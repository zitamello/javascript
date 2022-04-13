
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
};


const odds = {
    team1: 2.33,
    x: 2.5,
    team2: 6.5,
};


const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
]);

/* 
1. Create an array 'events' of the different game events that happened (no
duplicates)
*/

console.log(gameEvents.values);

// const arrayEvents = [gameEvents.get(17), gameEvents.get(36), gameEvents.get(47), gameEvents.get(61),
//      gameEvents.get(64), gameEvents.get(69), gameEvents.get(70), gameEvents.get(72), gameEvents.get(76),
//      gameEvents.get(80), gameEvents.get(92)];

// console.log(arrayEvents);

const events = [...new Set(gameEvents.values())];
console.log(events);

/* 


2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.



*/

gameEvents.delete(64);
console.log(gameEvents);


/*
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)

*/

const avg = function(total){
    const fullgame = 90;
    const average = total / fullgame;
    return `An event happened, on average, every ${average.toFixed(0)} minutes`;
}

const gameEventsArray = [...gameEvents];
console.log(gameEventsArray);

const minutes = gameEventsArray[0];
console.log(minutes);

let m = 0
for (let [minutes] of gameEventsArray){
    m += minutes;
    console.log(m);
}

console.log(avg(m));

/*
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17:
⚽
GOAL
*/

for (let [minutes, event] of gameEventsArray){
    const half = minutes <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${minutes}: ${event}`);
    
    
    // if (minutes <= 45) {
    //     console.log(`[FIRST HALF] ${minutes}: ${event}`);
    // }else if(minutes < 90) {
    //     console.log(`[SECOND HALF] ${minutes}: ${event}`);
    // } else {
    //     console.log(`[EXTRA TIME] ${minutes}: ${event}`);
    // }
}
