const readline = require('readline-sync');
const getSimpsonsById = require('./simpsons');
//const peso = 80; // Você pode utilizar o valor que desejar aqui
//const altura = 1.78; // Você pode utilizar o valor que desejar aqui

function calculaImc(peso, altura) {
  
  const calculo = peso / (altura * altura);
  
  return calculo;
}

// A função main é o ponto de partida do nosso programa
const main = async () => {
  const num = Number(readline.question('Qual id do simpson?'));
  const newResult = await getSimpsonsById(num);
  console.log(newResult.name);
  const peso = Number(readline.question('Whats your weight?'));
  const altura = Number(readline.question('Whats your height?'));
  const result =  calculaImc(peso, altura);
  switch (true) {
    case (result < 18.5):
        console.log('Magreza');
      break;
    case (result >= 18.5 && result < 25):
      console.log('Peso normal');
      break;
    case (result > 25.0 && result < 2.9):
      console.log('Sobrepeso');
      break;
    case (result > 30 && result < 34.9):
      console.log('Obesidade grau 1');
      break;
    case (result > 35 && result < 39.99):
      console.log('Peso normal');
      break;
    default: console.log('Obesidade graus III e IV');
  }
}

main();
