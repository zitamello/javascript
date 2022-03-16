const client = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 25
};

const client2 = {
  nome: 'Maria',
  sobrenome: 'Dolores',
  idade: 22
};

console.log(`Welcome to our website ${client.nome}` + ` ${client.sobrenome}`);
console.log(`Welcome to our website ${client2.nome}` + ` ${client2.sobrenome}`);

//using function to create new clients

function createClient(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
  };
}

const client3 = createClient('Carlos', 'Tavares', 45);
console.log(`The client is ${client3.nome}` + ` ${client3.sobrenome}`);
