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
for (index = 0; groceryList.length(); index +=1){
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