const ordersSet = new Set([
    'Pasta', 'Pizza', 'Risotto', 'Pizza', 'Pizza', 'Pasta', 'Risotto', 'Foccacia', 'Pizza',
]);

console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add("Garlic Bread");
console.log(ordersSet);
ordersSet.delete("Foccacia");
console.log(ordersSet);

for(const orders of ordersSet) console.log(orders);

//example 

const staff = ['Waiter', 'Chef', 'Waiter', 'Seus-chef', 'Manager', 'Waiter', 'Maitre', 'Waiter', 'Chef'];
const restaurantStaff = [...new Set(staff)];
console.log(restaurantStaff);

for(i = 0; i < 100; i++){
    if (i % 2 === 0){

    }else {
        console.log(i);
    }
}