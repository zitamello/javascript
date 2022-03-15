let names = []; //array vazio

names = ['Luis', 'Maria', 'Joao'];

console.log(names);

names[3] = 'Eduardo';

console.log(names);
console.log(names.length);

names.push('Luiza');

console.log(names);
console.log(names.length);

names.push('Fabio'); //adiciona no fim

console.log(names);

names.unshift('Marcos');

console.log(names);

const removido = names.pop(); //remove o ultimo elemento do array

console.log(names);
console.log(removido);

const firstremoval = names.shift();

console.log(names);
console.log(firstremoval);
