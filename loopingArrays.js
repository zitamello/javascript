
'use strict';

const openingHours = {
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
};

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavani 23, Firenze, Italy",
    categories: ["Italian", "Pizzaria", "Vegetarian", "Garlic", "Organic", "Authentic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Ceasar Salad", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto", "Fetuccini", "Lasagna", "Raviolli"],
    dessertsMenu: ["Gelatto", "Charlotte Pie", "Dolce de Leche", "Choco Ganache"],
    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({starterIndex, mainIndex, time, address}) {
        console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} for ` +
        `${time} at ${address}`);
    },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu, ...restaurant.dessertsMenu ];
for (let item of menu) console.log(item);

for(let item of menu.entries()){
    console.log(item);
}

for(let [i, el] of menu.entries()){
    console.log(`${i + 1}: ${el}`);
}