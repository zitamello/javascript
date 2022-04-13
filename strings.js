const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

console.log('B737'[0]);

console.log(airline.length);
console.log(plane.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

//when using slice, the number parameter is the beginning position
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));


console.log(airline.slice(-2));
console.log(airline.slice(1, -2));

const checkMiddleSeat = function(seat) {
    const seatPosition = seat.slice(-1);
    if (seatPosition === 'B' || seatPosition === 'E'){
        console.log('You got the middle seat 😔');
    }else if (seatPosition === 'A' || seatPosition === 'F'){
        console.log('You got the Window Seat! ✈')
    }else {
        console.log('You got the corridor seat 👍');
    }

}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('11A');
checkMiddleSeat('11E');

console.log((airline.toLowerCase()));
console.log(airline.toUpperCase());

//fiz capitalization in passangers name 

const passenger = 'sARAh';
let passangerCorrection = passenger.toLowerCase();
passangerCorrection = passenger[0].toUpperCase() + passangerCorrection.slice(1);
console.log(passangerCorrection);

const passengerName = 'jOnAs';
const nameCorrection = passengerName[0].toUpperCase() + passengerName.slice(1).toLowerCase();
console.log(nameCorrection);

const fixingNameTypos = function(passanger){
    const correction = passanger[0].toUpperCase() + passanger.slice(1).toLowerCase();
    console.log(correction);
}

fixingNameTypos(passenger);
fixingNameTypos('lUiZ');
fixingNameTypos('EduArDO');


const officialEmail = 'hello@jonas.io';
const loginEmail = ' HELLO@Jonas.Io \n';

const emailCorrection = loginEmail.toLowerCase().trim();
console.log(emailCorrection);
console.log(emailCorrection === officialEmail);

const ticketPrice = '688,97BRZ';
const priceUS = ticketPrice.replace('BRZ', '$').replace(',', '.');
console.log(priceUS);

const announcement = "All passengers come to boarding door 23. door 23!";

// console.log(announcement.replaceAll('door', 'gate'));

//regular expression 
console.log(announcement.replace(/door/g, 'gate'));

//booleans 
const newPlane = 'Airbus A320neo';
console.log(newPlane.includes('A320'));
console.log(newPlane.includes('BOEING'));
console.log(newPlane.includes('A3'));
console.log(newPlane.startsWith('A3'));
console.log(newPlane.startsWith('Airbus'));

if(newPlane.startsWith('Airbus') && newPlane.endsWith('NEO'.toLowerCase())){
    console.log(`${newPlane} is part of the new Airbus family`);
}

const checkBaggage = function(items){
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are NOT allowed to board! Please head to the securiry department!');
    } else {
        console.log('You are allowed to board! Welcome aboard and have a safe travel!');
    }
}

checkBaggage('I have a laptop, some Food and a Pocket Knife');
checkBaggage('I have some socks and camera');
checkBaggage('Got some snacks and a gun for protection!');

console.log('a+vary+nice+string'.split('+'));
console.log('Jonas Schemedtman'.split(' '));

const [firstName, lastName] = 'Jonas Schemedtman'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name){
    const names = name.split(' '); 
    const capitalizeNames = [];
    for(const word of names){
        //capitalizeNames.push(word[0].toUpperCase() + word.slice(1));
        //another way to solve it;
        capitalizeNames.push(word.replace(word[0], word[0].toUpperCase()));
    }
    console.log(capitalizeNames.join(' '));
}

capitalizeName('jessica ann schmitd');
capitalizeName('ana maria silva');


//padding a string 
const message = 'Go to Gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Jonas'.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = function (number){
    const str = number + '';
    const lastNumbers = str.slice(-4);
    return lastNumbers.padStart(str.length, '*');
}

console.log(maskCreditCard(23412353221278));
console.log(maskCreditCard('23243483923981'));
console.log(maskCreditCard(43256742));

const warning = 'BAD WEATHER... ALL DEPARTURES DELAYED! '; 

console.log(warning.repeat(5));