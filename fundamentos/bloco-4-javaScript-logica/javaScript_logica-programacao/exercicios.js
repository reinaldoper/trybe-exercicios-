//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1) {
  sum += fruits[index];
}

if (sum > 15) {
  console.log(sum);
} else {
  console.log('valor menor que 16');
}
//algoritmo
const n = 9;
let result = 100;
for (let i = 0; i <= n; i += 1) {
  result -= i;
}
console.log(result);

//fatorial de 10

let num = 10;
let soma = num;
for (let i = 1; i < num; i++) {
  console.log(soma);
  console.log("");
  soma *= i;
  console.log(soma);
}
console.log(soma);
// algoritmo innverter
let word = 'tryber';
var newString = "";
for (var i = word.length - 1; i >= 0; i--) {
  newString += word[i];
}
console.log(newString);

// maior numero primo - incompleto
function primeNumber(num) {
  for (var divisor = 2; divisor < num; divisor++)
    if (num % divisor == 0) return false;
  return true;
}

var determinadoNumero = 50;
var i;
let maior = i;
for (i = 2; i < determinadoNumero; i++) {
  if (primeNumber(i)) {
    console.log(i);
    if (i > maior) {
      maior = i;
    }
  }

}
console.log("O maior é :");
console.log(maior);