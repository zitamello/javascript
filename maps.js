'use strict';

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavani 23, Firenze, Italy",
    categories: ["Italian", "Pizzaria", "Vegetarian", "Garlic", "Organic", "Authentic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Ceasar Salad", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto", "Fetuccini", "Lasagna", "Raviolli"],
    desserts: ["Gelatto", "Charlotte Pie", "Dolce de Leche", "Choco Ganache"],
    openingHours: {
        thu: {
            open: 12,
            close: 23,
        },
        fri: {
            open: 11,
            close: 24,
        },
        sat: {
            open: 11,
            close: 24,
        },
    },

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({starterIndex, mainIndex, time, address}) {
        console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} for ` +
        `${time} at ${address}`);
    },
};

const restMap = new Map();
restMap.set('name', 'Classico Italiano');
restMap.set(1, 'Firenze, Italy');
restMap.set(2, 'Napoli, Italy');
console.log(restMap);

restMap
       .set('categories', ["Italian", "Pizzaria", "Vegetarian", "Garlic", "Organic", "Authentic"] )
       .set('open', 11)
       .set('close', 23)
       .set(true, 'We are open :D')
       .set(false, 'We are close :(' ); 

console.log(restMap.get('name'));
console.log(restMap.get(1));
console.log(restMap.get(false));

console.log(restMap);

const time = 22;
console.log(restMap.get(time > restMap.get('open') && time < restMap.get('close')));

console.log(restMap.has('categories'));
restMap.delete(2);
console.log(restMap);
console.log(restMap.has('name'));

const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['Correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again!'],
]);

console.log(question);
console.log(question.get('question'));
for (const [key, value] of question){
    if(typeof(key) === 'number') console.log(`Answer ${key}: ${value}`);
}

//const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);    

console.log(answer === question.get('Correct') ? question.get(true) : question.get(false));