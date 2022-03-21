//in js every value is either an object or a primitive data type

//primitives

/*
Number
String
Boolean
undefined == a variable is not defined yet // empty
Null
Symbol == not really useful but it's data type that is unique and can not be changed
BigInt == larger integers;
*/

let x = 23;
let words = "Once upon a time...";
let javascriptIsFun = true;
let nemo;

console.log(javascriptIsFun);
console.log(typeof(javascriptIsFun));
console.log(words);
console.log(typeof(words));
console.log(x);
console.log(typeof(x));
console.log(nemo);

//dynamic typing

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);
console.log(typeof(javascriptIsFun));

let year;
console.log(year);
console.log(typeof(year));

year = 2022;
console.log(year);
console.log(typeof(year));

console.log(typeof(null));
