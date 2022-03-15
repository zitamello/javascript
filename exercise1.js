let varA = 'A';
let varB = 'B';
let varC = 'C';

let originalVarA = varA;

varA = varB;
varB = varC;
varC = originalVarA;

console.log(varA, varB, varC);
