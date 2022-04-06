//destruturing arrays 

'use strict';

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavani 23, Firenze, Italy",
    categories: ["Italian", "Pizzaria", "Vegetarian", "Garlic", "Organic", "Authentic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Ceasar Salad", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto", "Fetuccini", "Lasagna", "Raviolli"],
    desserts: ["Gelatto", "Charlotte Pie", "Dolce de Leche", "Choco Ganache"],

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const arr = [2, 4, 5];
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);

 let [main, , secondary] = restaurant.categories;
 console.log(main, secondary);

// const temp = main;
// main = secondary; 
// secondary = temp; 

// console.log(main, secondary);
// //same result as before 
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//array inside an array 

const nestedArray = [2, 4, [6, 7, 8, 9]];
const [i, , [j, k, l, m]] = nestedArray;
console.log(i, j, k, l, m);

//default values 

const [p=1, q=1, r=1] = [8,9];
console.log(p, q, r);

