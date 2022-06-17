const testingScope = escopo => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if) ';
        ifScope = ` ${ifScope}ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    /* console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida. */
  }


  


testingScope(true);

//função que retorna array crescente
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const ordena = array => array.sort((a, b) => a - b);

console.log(`Os números ${ordena(oddsAndEvens)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
//fatorial
const fatorial = numeros => {
  let valor = 1;
  for (let i = numeros; i > 1; i--){
    valor *= i;
  }  return valor;
}
console.log(fatorial(4));

//fatorial recursivo com ternary operator.
const fatory = numero => (numero === 0) ? 1 : numero * fatory(numero - 1);

console.log(`O fatorial recursivo de 3 é ${fatory(3)}.`);

//Crie uma função que receba uma frase e retorne a maior palavra.
const maior = frase => {
  let palavras = frase.split(' ');
  let bigFor = "";
for (word of palavras) {
  if (word.length > bigFor.length) {
    bigFor = word;
  }
}
  return bigFor;
}
console.log(maior('minha casa é bonita e maravilhosa, paralelepipedo'));
