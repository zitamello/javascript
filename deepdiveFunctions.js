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