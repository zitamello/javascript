const pessoa = {
  nome: 'Lucas',
  sobrenome: 'Carvalho',
  idade: 18,

  fala(){
    console.log(`${this.nome} ${this.sobrenome} is ${this.idade} years old` + ' and he is saying hello...');
  },

  incrementaIdade(){
    this.idade++;
    console.log(`Now his age is ${this.idade}`);
  }
};

pessoa.fala();
pessoa.incrementaIdade();
