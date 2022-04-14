'use strict';

const bookings = [];

const createBooking = function (flightNumber, numPassengers = 1, ticketPrice = 199 * numPassengers){
    
    //ES5
    //numPassengers = numPassengers || 1; 
    //ticketPrice = ticketPrice || 199;

    const booking = {
        flightNumber,
        numPassengers,
        ticketPrice
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 3);
createBooking('LH123', 4);

const flight = 'LH234';
const passenger = {
    name: 'Jonas Schmedtman',
    birthdate: '1991-03-18',
    passport: 23875218960,
    sex: 'male',
}

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = `${passenger.sex === 'male' ? 'Mr. ' : 'Mrs.'}` + passenger.name; 

    if(passenger.passport === 23875218960){
        console.log('Check in!');
    }else {
        console.log('Wrong Passport!');
    }
}

checkIn(flight, passenger);
console.log(flight);
console.log(passenger);