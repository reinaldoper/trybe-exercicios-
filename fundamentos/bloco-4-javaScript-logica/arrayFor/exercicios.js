// divisão da soma do array pela quantidade, média aritmética
const array = [1, 2, 3, 4];
let sum = 0;
let total =0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);
total = sum/array.length;
console.log(total);

//condição valor maior que 20

if(total > 20){
    console.log("Valor maior que 20.");
}else{
    console.log("Valor menor ou igual a 20.");
}
// maior numero do array
let somador;
let maior;
const arra = [10, 230, 3, 4, 5, 9, 30];
maior = arra[0];
for (let i = 0; i < arra.length; i++) {
    if(arra[i] > maior){
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
    if(array1[i] % 2 != 0){
        quant1 = array1[i];
        console.log("Os impares são "+quant1);
    }
    if(array1[i] < menor){
        menor = array1[i];
    }
}
if(quant1 == 0){
    console.log("Nenhum valor ímpar encontrado!");
}
console.log("O menor valor é "+menor+".");
console.log("");

//array de 1 a 25
let result = [];
for(let i = 1; i < 26; i++){
    result.push(i);
}
for(let i = 0; i < result.length; i++){
    console.log(result[i]);
}

console.log("");

//divisão por 2
for(let i = 0; i < result.length; i++){
    console.log(result[i]/2);
}