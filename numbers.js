let num1 = 2;
let num2 = 2.5;
let num3 = 10.346232

console.log(num1.toString() + num2.toString()); //concatena num1 e num2
console.log(num1 + num2); //retorna a conra correta;
console.log(num1.toString() + num2); //concatena num1 e num2;

console.log(num3.toFixed(2)); //numero de casa decimal

console.log(Number.isInteger(num3));

let temp = num1 * '5';
console.log(temp); //retorna not a number;
console.log(Number.isNaN(temp));
