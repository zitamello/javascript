const age = 15 ;

if (age >= 18) {
  console.log(`Sarah can get her driving license!`);
} else {
  const yearsLeft = 18 - age;
  console.log('Sarah can NOT get her driving license because she is under 18 years old! ' +
               `Wait ${yearsLeft} years and then come back.`);
}
const birthYear = 1989;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(`Sarah was born on the ${century} century.`);
