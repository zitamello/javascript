
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

restaurant.orderDelivery({
    time: "22:30",
    address: "Via del Sole, 21",
    mainIndex: 2, 
    starterIndex: 2,
});



const { name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {
    name: restaurantName, 
    openingHours: hours, 
    categories: tags} = restaurant;

console.log(restaurantName, openingHours, tags);


const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating values 
let a = 111;
let b = 222; 
const obj = {a: 23, b: 7, c: 14};

({a, b} = obj);
console.log(a, b);

//nested objects 
const {fri: {open: o, close: c} } = openingHours;
console.log(o, c);