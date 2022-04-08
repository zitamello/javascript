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


const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [players1, players2];
console.log(allPlayers);

const players1final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1final);


const {team1, x:draw, team2} = odds;
console.log(`The odds for ${game.team1} is ${team1}, the odds for a draw is ${draw} ` +
`and the odds for ${game.team2} is ${team2}`);

const printGoals = function(...players){
    for(i = 0; i < players.length; i++){
    console.log(`${i + 1} goals were scored!`);
    }
}

printGoals('Davies', 'Muller', 'Lewandowski' );

const winningTeam = (team1 < team2 && team1 < draw) ? game.team1 : game.team2;
console.log(winningTeam);

for(let [goals, player] of game.scored.entries()){
    console.log("Goals " + `${goals + 1}: ${player} scored.`);
}

const avgOdd = function(...odds){
    [odd1, odd2, odd3] = odds;
    const averageOdds = ((odd1 + odd2 + odd3) / 3).toFixed(2);
    return averageOdds;
}

const average = avgOdd(team1, draw, team2);
console.log(average);

/* 
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
*/

