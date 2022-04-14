'use strict';
//callbackFUNCTIONS 

const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str){
    const [first, ...others] = str.split(' '); //
    return [first.toUpperCase(), ...others].join(' ');
}

const transform = function(str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)}`)

    console.log(`Transformed by: ${fn.name}`);
}


transform('Javascript is the best!', upperFirstWord);
transform('Javascript is the best!', oneWord);
//function returning fucntions
const greet = function (greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey!');
greeterHey('John');
greeterHey('Jonas');


greet('Hello')('Sarah');

//creating greet function as arrow function 

const functionGreet = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greeterHi = functionGreet('Hi');
greeterHi('Mel');
greeterHi('Draven');

//call and apply methods   
const airline = {
    name: 'Lufthansa',
    iataCode: 'LH', 
    bookings: [],
    book: function (flightNumber, passengerName){
        console.log(`${passengerName} booked a seat on ${this.name} flight ${this.iataCode}${flightNumber}`);
        
    this.bookings.push({flight: `${this.iataCode} ${flightNumber}`, passengerName });
    },
};

airline.book(2384, 'Jonas Schemtman');
airline.book(2948, 'Sarah Jones'); 
console.log(airline);

const eurowings = {
    name: 'Eurowings',
    iataCode: 'EW',
    bookings: [],

}

/* does not WORK
const book = airline.book;
book(231, 'Steven Fox');
*/


const book = airline.book;
book.call(eurowings, 234, 'Steven Fox');
console.log(eurowings);

book.call(airline, 482, 'Mary Cooper');
console.log(airline);


const swiss = {
    name: 'Swiss Air Lines',
    iataCode: 'SAL',
    bookings: []
}

book.call(swiss, 5643, 'Michael Jordan'); 
console.log(swiss);

//apply methods 
const flightData = [581, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(eurowings, ...flightData);
console.log(eurowings);

//bind methods  
const bookEW = book.bind(eurowings);
const bookSwiss = book.bind(swiss); //
const bookAirline = book.bind(airline); //

bookEW(634, 'Susan Boyle');
console.log(eurowings);
bookSwiss(5234, 'Nate River');


const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jordan Peele');
bookEW23('Jason Peele');


//with EVENT LISTENERS 
swiss.planes = 300;
swiss.buyAirplane = function(){
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
// swiss.buyAirplane();
document
.querySelector('.buy-planes')
.addEventListener('click', swiss.buyAirplane.bind(swiss));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));