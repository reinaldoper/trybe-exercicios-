// divisão da soma do array pela quantidade, média aritmética
const array = [1, 2, 3, 4];
let sum = 0;
let total = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);
total = sum / array.length;
console.log(total);

//condição valor maior que 20

if (total > 20) {
    console.log("Valor maior que 20.");
} else {
    console.log("Valor menor ou igual a 20.");
}
// maior numero do array
let somador;
let maior;
const arra = [10, 230, 3, 4, 5, 9, 30];
maior = arra[0];
for (let i = 0; i < arra.length; i++) {
    if (arra[i] > maior) {
        maior = arra[i];
    }

}
console.log(maior);
console.log("");
console.log("");
// impares no array
let array1 = [10, 230, 3, 4, 5, 9, 350];
let impares = array1[0];
let quant1;
let menor = array1[0];
for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 != 0) {
        quant1 = array1[i];
        console.log("Os impares são " + quant1);
    }
    if (array1[i] < menor) {
        menor = array1[i];
    }
}
if (quant1 == 0) {
    console.log("Nenhum valor ímpar encontrado!");
}
console.log("O menor valor é " + menor + ".");
console.log("");

//array de 1 a 25
let result = [];
for (let i = 1; i < 26; i++) {
    result.push(i);
}
for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}

console.log("");

//divisão por 2
console.log("Divisão por 2 :");
for (let i = 0; i < result.length; i++) {
    console.log(result[i] / 2);
}

// ordenação
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] < numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
}
console.log("");
console.log("Bonus :");
console.log("Ordenação do menor para o maior:");
console.log(numbers);
console.log("");
console.log("Ordenação do maior para o menor:");
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] > numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
}
console.log(numbers);

// multiplicação pelo seu sucessor
//Está incompleto....
console.log("");
console.log("Multiplicação pelo seu sucessor :");
let dobro = [];
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(var i = 0; i < numbers.length; i++) {
  dobro.push(numbers[i] * numbers[i + 1]);
}
console.log(dobro);