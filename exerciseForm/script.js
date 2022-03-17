console.log("See if you can read this on browser's console tab...");

function myFunction() {
  const form = document.querySelector('.form');
  const result = document.querySelector('.div-resultado');
  const pessoas = [];

  function recebeEventoForm (evento) {
    evento.preventDefault();
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    });

    result.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    console.log(result);
    console.log(pessoas);

  }

  form.addEventListener('submit', recebeEventoForm);
}

myFunction();
