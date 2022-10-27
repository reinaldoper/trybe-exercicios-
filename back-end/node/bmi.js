const readline = require('readline-sync');
//const peso = 80; // Você pode utilizar o valor que desejar aqui
//const altura = 1.78; // Você pode utilizar o valor que desejar aqui

function calculaImc(peso, altura) {
  
  const calculo = peso / (altura * altura);
  
  return calculo;
}

// A função main é o ponto de partida do nosso programa
function main() {
  const peso = Number(readline.question('Whats your weight?'));
  const altura = Number(readline.question('Whats your height?'));
  return calculaImc(peso, altura);
}

console.log(main());
