
const restaurant = {
    mainMenu: ["Pizza", "Raviolli", "Gnocchi"],
    starterMenu: ["Bruschetta", "Fetuccini", "Ceasar Salad", "Capri Salad"], 
    dessertsMenu: ["Choco ganache", "Dolce del Leche", "Gelatto Italiano"],
    orderPizza: function(mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);

    }
};


restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach', 'cheese');
restaurant.orderPizza('pepperoni', "cheese", "pepper", "onion", "fried garlic");
//spread because ... on the RIGHT SIDE of = operator
const arr = [1, 2, ...[3, 4]];


//REST syntax because ... on the LEFT SIDE of = operator. 
//REST must be always the last on the left side of = operator
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b);
console.log(others);

const [pizza, raviolli, gnocchi, ...others2] = [...restaurant.mainMenu, 
                                                      ...restaurant.starterMenu, 
                                                      ...restaurant.dessertsMenu];

console.log(pizza, raviolli, gnocchi);
console.log(others2);

//using REST operator with Functions => REST ARGUEMENTS
const add = function(...numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    console.log(numbers);
    console.log(sum);
}

add(1, 2);
add(1, 3, 5, 7);
add(2, 4, 6, 8, 10);
add(1, 2, 3, 5, 7, 11, 15, 17);

const x = [23, 5, 7];
add(...x);