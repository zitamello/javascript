const now = 2034;

//math operators
const ageJohn = now - 1989;
const ageSarah = now - 2019;

console.log(ageJohn, ageSarah);

console.log(ageJohn * 2, ageSarah * 2, ageJohn / 2, ageSarah / 2);

const firstName = "Jonas";
const lastName = "Smith";

console.log(firstName + " " + lastName);

//assignment operators
let x = 10 + 5;
x += 10; // x = x + 10
console.log(x);
x *= 4;
console.log(x);
x++ //x = x + 1
console.log(x);
x--; // x = x - 1;
console.log(x);


//comparison operators
// >= > <= < == === != !==

console.log(ageJohn > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);
