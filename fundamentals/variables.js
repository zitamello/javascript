let firstName = 'Jonas';
let age = 15;
let bookName = 'Game of Thrones';
let _client = "this variable declaration is valid."; //but it is not used that much;
let $country = "I'm setting Canada as my country into this variable declaration"; //not recommended but still valid; 

console.log(`${firstName} likes to read ${bookName}` + ` even if his age is only ${age}.`);
console.log(typeof(age));
console.log(`{_client} ${_client}`);
console.log(`{$country} ${$country}`);
