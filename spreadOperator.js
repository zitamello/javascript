const arr = [6, 2, 4];
const badArr = [1, 5, 3, arr[0], arr[1], arr[2]];7
console.log(badArr);

const newArr = [1, 5, 3, ...arr];
console.log(newArr);

const restaurant = {
    mainMenu: ["Pizza", "Raviolli", "Gnocchi"],
    starterMenu: ["Bruschetta", "Fetuccini", "Ceasar Salad", "Capri Salad"], 
    dessertsMenu: ["Choco ganache", "Dolce del Leche", "Gelatto Italiano"],
};

const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu, ...restaurant.dessertsMenu];
console.log(menu);

const newMainMenu = [...restaurant.mainMenu, "Alfreddo's", "Lasagna"];
console.log(newMainMenu);


const newRestaurant = { ...restaurant, founder: "Fabio Capello", name: "Classico Italiano" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant, name: "Ristorante Roma"};
restaurantCopy.founder = "Roberto Baggio";
console.log(restaurantCopy.name, restaurantCopy.founder, newRestaurant.name, newRestaurant.founder);