//operadores logicos

/*
&& -> AND 
|| -> OR
! -> NOT
*/
/*
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true || false);
console.log(true || true);
console.log(false || false);
console.log(!true && true);
console.log(!true && false);
*/

const usuario = 'Luis';
const senha = '123456';

const login = usuario === 'Luis';
const password = senha === '12345';

const loginSucessful = usuario === senha;

console.log(`Usuario so pode logar se o login e o password for true. O login é true? ${loginSucessful}`);