
'use strict';

const openingHours = {
    thu: {
        open: 10,
        close: 23,
    },
    fri: {
        open: 11,
        close: 24,
    },
    sat: {
        open: 12,
        close: 24,
    },
};

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavani 23, Firenze, Italy",
    categories: ["Italian", "Pizzaria", "Vegetarian", "Garlic", "Organic", "Authentic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Ceasar Salad", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto", "Fetuccini", "Lasagna", "Raviolli"],
    dessertsMenu: ["Gelatto", "Charlotte Pie", "Dolce de Leche", "Choco Ganache"],
    openingHours,

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({starterIndex, mainIndex, time, address}) {
        console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} for ` +
        `${time} at ${address}`);
    },
};

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu, ...restaurant.dessertsMenu ];
// for (let item of menu) console.log(item);

//getting properties names

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for(let day of Object.keys(openingHours)){
    openStr += `${day}, `;
}

console.log(openStr);


//getting properties values 

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for(let [day, {open, close}] of entries){
    console.log(`On ${day} we open at ${open} and close at ${close}`);
}