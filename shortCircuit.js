//use any data type, return any data type, short circuit-evaluation

const restaurant = {
    mainMenu: ["Pizza", "Raviolli", "Gnocchi"],
    starterMenu: ["Bruschetta", "Fetuccini", "Ceasar Salad", "Capri Salad"], 
    dessertsMenu: ["Choco ganache", "Dolce del Leche", "Gelatto Italiano"],
    orderPizza: function(mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);

    }
};


console.log('----------OR-------------');
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(false || null);
console.log(undefined || 1);
console.log(undefined || null);

//first truthy value will be returned
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0
const guests1 = restaurant.numGuests ? restaurant.numGuests : 1;
console.log(guests1);

const guests2 = (restaurant.numGuests || 10);
console.log(guests2);


console.log('----------AND-------------');
console.log(undefined && 'Jonas');
console.log(0 && null);
console.log(7 && 'hello');

console.log('Hello' && 23 && null && 'ok');

if (restaurant.orderPizza){
    restaurant.orderPizza('pepperoni', 'cheese', 'onions');
}
//same as code before 
restaurant.orderPizza && restaurant.orderPizza('pepperoni', 'cheese');

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

const rest1 = {
    name: "Capri",
    numGuests: 0,
};


const rest2 = {
    name: "La Plazza",
    owner: "Geovanni Rossi",
};

// rest1.numGuests = rest1.numGuests || 10; 
// rest2.numGuests = rest2.numGuests || 10; 

//same code as before 
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 20;

// console.log(rest1, rest2);

rest1.numGuests ??= 10;
rest2.numGuests ??= 20; 

rest2.owner &&= '< Anonymus >';
rest1.owner &&= '< Anonymus >';
console.log(rest1, rest2);


