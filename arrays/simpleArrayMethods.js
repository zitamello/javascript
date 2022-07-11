'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];


//SLICE METHOD
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
//copies from the last elements 
console.log(arr.slice(-1));
console.log(arr.slice(-2));

//copies starting position 2 and then eliminates the last two 
console.log(arr.slice(2, -2));

//entire array
console.log(arr.slice());
console.log([...arr]);


console.log('Using Splice method');
//documentconsole.log(arr.splice(2));
//splice deleted the elements from the original array
//deleting the last element of the original array
arr.splice(-1);
console.log(arr);

//REVERSE method 
 arr = ['a', 'b', 'c', 'd', 'e'];
 let arr2 = ['k', 'j', 'i', 'h', 'g', 'f'];
 console.log(arr2.reverse());
 console.log(arr2);

 //CONCAT 

 const letters = arr.concat(arr2);
 console.log(letters);


 //JOIN method 
 console.log(letters.join(' - '));
