const friends = ['Michael', 'Sarah', 'John'];

//inserts elements in the end of the array
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

//inserts element in the beginning of the array
friends.unshift('Joanna');
console.log(friends);

//removes the last element of array
const popped = friends.pop();
const poppedElement = friends.pop();
console.log(poppedElement);
console.log(friends);

//removes the first element of the array

const shiftedElement = friends.shift();
console.log(shiftedElement);
console.log(friends);

console.log(friends.indexOf('Michael'));

friends.push(23);
console.log(friends.includes('Michael'));
console.log(friends.includes('Steven'));
console.log(friends.includes(23));

if(friends.includes('Michael')){
    console.log('You have a friend called Michael!');
}