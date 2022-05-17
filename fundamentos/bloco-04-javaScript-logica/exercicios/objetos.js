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
