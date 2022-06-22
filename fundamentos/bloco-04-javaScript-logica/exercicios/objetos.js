let player = {
 name : 'Marta',
lastName : 'Silva',
age : 34,
medals : { golden: 2, silver: 3 },
bestInTheWord : [2006, 2007, 2008, 2009, 2010, 2018],
};

//primeiros exercicios de objetos para fixar
console.log("A jogadora "+player.name+" "+player.lastName+" tem "+player.age+" anos de idade.");

//segundo exercicio de fixação de objetos

console.log("A jogadora "+ player.name+ " "+player.lastName+" foi eleita a melhor do mundo por "+player.bestInTheWord.length+ " vezes.")
console.log("");

//terceiro exercicio de fixação de objetos
console.log("A jogadora possui "+player.medals.golden+ " medalhas de ouro e "+player.medals.silver+ " medalhas de prata.");
console.log("");
//exercicios forIn
let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}
console.log("");
// outro exercicios forIn
let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }
  console.log("");
  //outro exercicios de fixação
  let food = ['hamburguer', 'bife', 'acarajé'];
  for (let position in food) {
    console.log(position);
  };
  //resultado: 0, 1, 2;
  console.log("");
  //exemplo forOf
 food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;
console.log("");
//exercicios de fixação
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };
  for(let key in names){
    console.log("Olá "+names[key]);
  }
  console.log("");
  //último exercicios de fixação
   car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for(let key in car){
    console.log(key+" - "+car[key]);
  }
  console.log("");
  //funções
  function maiorNum(primeiroNum, segundoNum) {
    if (primeiroNum > segundoNum) {
      return primeiroNum + ' é maior que ' + segundoNum;
    } else if (segundoNum > primeiroNum) {
      return segundoNum + ' é maior que ' + primeiroNum;
    } else {
      return 'Os números são iguais';
    }
  }
  
  console.log(maiorNum(10, 20)); // 20 é maior que 10
  console.log(maiorNum(2, -5)); // 2 é maior que -5
  console.log(maiorNum(1, 1)); // Os números são iguais
  console.log("");
  //exercicios complementares
  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
  //1 - Imprima no console uma mensagem de boas-vindas para a personagem acima
  console.log("Bem vinda "+info.personagem+"!");
  console.log("");
  for(let key in info){
      console.log(key);
  }
  console.log("");
  // mostrar os valores do objeto
  for(let key in info){
    console.log(info[key]);
}
console.log("");
//juntando dois objetos e imprimir o resultado.
let info1 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain,',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };
  for(let key in info, info1){
        console.log(info[key]+" e " +info1[key]);
  }
  console.log("");
  //acessando a chave dentro do objeto
  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      },
    ],
  };
 
    console.log("O livro favorito de "+leitor.nome+" " + leitor.sobrenome+"  é "+leitor.livrosFavoritos[0].titulo)+".";
console.log("");
//Acessando o array
console.log(leitor.nome+" tem "+leitor.livrosFavoritos.length+" livros favoritos.");
