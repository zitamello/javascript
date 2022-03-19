
  const form = document.querySelector('.form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Evento prevenido');
});
  
 
function setResultado(msg) {
    const resultado = document.querySelector('#div-Validation');
    resultado.innerHTML = msg;
}


