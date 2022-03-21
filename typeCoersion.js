
//type conversion


const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 19);

console.log(Number('Jonas'));
console.log(typeof inputYear);
console.log(typeof NaN);

console.log(typeof(String(23)), typeof 23);

//type coersion

console.log('I am ' + 23 + ' years old.'); // 23 is number but because of type coersion of + sign
                                           // it automatically turns the number into string.


console.log(`23` - '10' + 20 + 2); // the string is converted into number to do its math because of - symbol

let n = '1' + 1;  //11
n = n - 1; //10
console.log(n);

let x = 2 + 3 + 4 + '5'; //95
console.log(x);

console.log('9' - '5'); //4
x = '19' - '13' + 17; // 6 + 17 = 23
console.log(x);

x = '123' < 57; //false
console.log(x);

x = 5 + 6 + '4' + - 9 - 4 - 2; // 1143
console.log(x);