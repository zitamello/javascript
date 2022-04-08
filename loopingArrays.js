
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

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({starterIndex, mainIndex, time, address}) {
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

//if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);   

//using optional chaining 
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours?.thu?.open);
console.log(restaurant.openingHours.wed?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for(let day of days){
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day} we open at ${open}`);
}

//using on methods 

console.log(restaurant.order?.([0, 1]) ?? "Method does not exist!");
console.log(restaurant.orderDelivery?.(0, 1) ?? "ok");

const user = [
    { 
        name: "Jonas", 
        email: "hellojonas@io.com",
    }
];

console.log(user[0]?.name ?? 'User not found.');
console.log(user[1]?.name ?? 'User not found in our database.');