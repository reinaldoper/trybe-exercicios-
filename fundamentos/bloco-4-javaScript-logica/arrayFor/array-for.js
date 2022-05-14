let menu = ["Home", "Serviços", "Portifólio", "Links"];
let menuServices = menu.indexOf("Serviços");

console.log(menuServices);
// exercicio 2

menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portifólio');

console.log(indexOfPortfolio);

//exercicio 3

let menu1 = ['Home', 'Serviços', 'Portfólio', 'Links'];

console.log(menu1.push("Conntato"));

//exercicio 4

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (index = 0; groceryList.lenght; index +=1){
    console.log(groceryList[index]);
}


//exemplo de for/of
let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

//exemplo 2


let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

//exemplo 3


let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}

// exercicio 1 da segunda parte
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let result of names){
    console.log(result);
}
// exercico 2 2° parte imprimir valor do array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let number of numbers){
    console.log(number);
}

// exercicio 3 2° parte - adicionar mai 1
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let number of numbers){
    number ++;
    console.log(number);
}

// exercicio 4 2° parte - médi aritmética
let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let x ;
let soma = 0;
for (let x of number){
    soma += number[x];
    console.log(soma);
}

