'use strict';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log('Length of array -> ' + friends.length);
//logs the last element of array
console.log('Using friends.length - 1 logs the last element of the array, which is =>',
 friends[friends.length - 1]);

const years = new Array(1991, 1984, 2008, 2022);
console.log(years[0]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'John';
const john = [firstName, 'Schwartzman', 2022-1982, 'programmer', friends];
console.log(john);

console.log(john.length);

//exercise
const calculateAge = function(birthYear) {
    return 2022 - birthYear;
}

const age1 = calculateAge(years[0]);
const age2 = calculateAge(years[1]);
const age3 = calculateAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calculateAge(years[0]), calculateAge(years[1]), calculateAge(years[years.length - 1])];
console.log(ages);