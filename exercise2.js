let nome = 'Luiz';
nome = 'Otavio';

console.log(nome);

let a = 'A';
let b = a; //copia do valor de a para a variavel b;
console.log(a, b);

a = 'outra string';
console.log(a, b);

//com objetos do tipo function, array, e objects, os valores sao passados por referencia

let arrayA = [1, 2, 3];
let arrayB = arrayA;

console.log(arrayA, arrayB);

arrayA.push(4);

console.log(arrayA, arrayB);

arrayB.pop();
console.log(arrayA, arrayB);

const objectA =  {
  nome: 'Luix',
  sobrenome: 'Otavio'
};

const objectB = objectA;

console.log(objectA, objectB);
objectA.nome = 'Joao'
console.log(objectA, objectB);
