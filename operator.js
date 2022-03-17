

// > maior que
// < menor que 
// >= maior que igual
// <= menor que igual
// == igualdade entre valores
// === igualdade entre valores e tipos
// != diferente entre valores
//!== diferente entre valores e tipos

const num = 10;
const num2 = '10';
let word = 'hello';

const temp = num > num2;
const temp2 = num < num2;
const temp3 = num == num2;
const temp4 = num === num2;
const temp5 = num === word;
const temp6 = num != num2;
const temp7 = num !== num2;
const temp8 = num !== word;

console.log(`O valor é ${temp}`);
console.log(`O valor é ${temp2}`);
console.log(`O valor é ${temp3}`);
console.log(`O valor é ${temp4}`);
console.log(`O valor é ${temp5}`);
console.log(`O valor é ${temp6}`);
console.log(`O valor é ${temp7}`);
console.log(`O valor é ${temp8}`);