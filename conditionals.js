const hora = 19;

if (hora > 0 && hora < 12) {
    console.log("Bom dia!");

} else if (hora > 12 && hora < 18) {
    console.log("Boa tarde!");
}
else {
    console.log("Boa noite!");
}

const numero = 17;

if (numero >= 0 && numero <= 5) {
    console.log(`Sim, ${numero} está entre 0 e 5.`);
} else if (numero >= 6 && numero <= 9) {
    console.log(`Sim, ${numero} não está entre 6 e 9.`);
} else if (numero >= 10 && numero <= 15) {
    console.log(`Sim, o ${numero} está entre 10 e 15.`);
} else {
    console.log(`O número não está contido nas condições anteriores. ${numero} é maior que 15.`);
}

