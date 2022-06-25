const func = () => 'Acordando!!';
const cafe = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';
const doingThings = (wakeUp) => wakeUp();
console.log(doingThings(cafe));
console.log(doingThings(func));
console.log(doingThings(dormir));

// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const cadastro = (name) => {
  let emails = name.replace(' ', '');
  let minusculo = emails.toLowerCase();
  let obj = {
    nomeCompleto: name,
    email: `${minusculo}@trybe.com`,
  };
  return obj;
}

console.log(newEmployees(cadastro));

//Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const sorteio = (num, callback) => {
  let result = Math.floor(Math.random() * 5 + 1);
  return callback(result, num);

}

const verifica = (result, num) => (result === num) ? 'Parabéns você ganhou' : 'Tente novamente';
console.log(sorteio(4, verifica));
//Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
//Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
/* const arr = ["pera", "limao", "banana", "goiaba"];
const bb = ["tomate", "tangerina", "pera", "melancia"]; */
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

/* const hof = (arrayCorretas, arrayVerificar, callback) => {

} */

const checa = (arrayCorretas, arrayVerificar) => {
  let acertos = [];
  for (let i = 0; i < arrayCorretas.length; i += 1) {

    for (let j = 0; j < arrayVerificar.length; j += 1) {

      if (arrayVerificar[j] === arrayCorretas[i]) {
        acertos.push(arrayVerificar[j]);
      }
    }
  }
  return acertos;
};
console.log(checa(RIGHT_ANSWERS, STUDENT_ANSWERS));

const RIGHT = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
/* const arr = ["pera", "limao", "banana", "goiaba"];
const bb = ["tomate", "tangerina", "pera", "melancia"]; */
const STUDENT = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


function validarDiferenca() {
  var r1 = [2, 4, 6, 8, 5, 7, 9, 10];
  var r2 = [2, 4, 6, 8, 5, 7, 9, 1];
  var r3 = [];
  r1.forEach(function (element) {
    if (r2.indexOf(element) == -1)
      r3.push(element);
  });

  return r3;
}


console.log(validarDiferenca());

//conteúdo dia 8.2
const students1 = [{
    name: 'Maria',
    grade: 70,
    approved: ''
  },
  {
    name: 'José',
    grade: 56,
    approved: ''
  },
  {
    name: 'Roberto',
    grade: 90,
    approved: ''
  },
  {
    name: 'Ana',
    grade: 81,
    approved: ''
  },
];

function verifyGrades() {
  for (let i = 0; i < students1.length; i += 1) {
    const student = students1[i];
    if (student.grade >= 60) {
      student.approved = 'Aprovado';
    } else {
      student.approved = 'Recuperação';
    }
  }
}

verifyGrades();

console.log(students);
// [
//   { name: 'Maria', grade: 70, approved: 'Aprovado' },
//   { name: 'José', grade: 56, approved: 'Recuperação' },
//   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
//   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// ]

const students = [{
    name: 'Maria',
    grade: 70,
    approved: ''
  },
  {
    name: 'José',
    grade: 56,
    approved: ''
  },
  {
    name: 'Roberto',
    grade: 90,
    approved: ''
  },
  {
    name: 'Ana',
    grade: 81,
    approved: ''
  },
];

function verifyGrades() {
  students.forEach((student, index) => {
    if (student.grade >= 60) {
      students[index].approved = 'Aprovado';
    } else {
      students[index].approved = 'Recuperação';
    }
  });
}

verifyGrades();

console.log(students);
// [
//   { name: 'Maria', grade: 70, approved: 'Aprovado' },
//   { name: 'José', grade: 56, approved: 'Recuperação' },
//   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
//   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// ]
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 5 === 0) {
    firstMultipleOf5 = numbers[index];
    break;
  }
}

console.log(firstMultipleOf5);
// 50
const numberss = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5s = numberss.find((number) => number % 5 === 0);

console.log(firstMultipleOf5s);
// 50

const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a);
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]

//exercicios para fixar
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, nome) => {
  const result = [];
  arr.forEach((name) => {
    if (name  === nome) {
      result.push(name);
    }
  });
  return result;
  //Adicione seu código aqui
}

console.log(hasName(names, 'Ana'))

const people = [{
    name: 'Mateus',
    age: 18
  },
  {
    name: 'José',
    age: 16
  },
  {
    name: 'Ana',
    age: 23
  },
  {
    name: 'Cláudia',
    age: 20
  },
  {
    name: 'Bruna',
    age: 19
  },
];

const verifyAges = (arr, minimumAge) => {
  const result = [];
  arr.forEach((idade) => {
    if (idade.age <= minimumAge) {
      result.push(idade.name);
    }
  });
  return result;
  //Adicione seu código aqui
}

console.log(verifyAges(people, 18));

// Use o método forEach chamando a callback showEmailList para apresentar os emails
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  const result = [];
  email.forEach((dados) => {
    result.push(`${dados}`);
  })
  return result;
  
};
console.log(showEmailList(emailListInData));

// Adicione seu código aqui

//3 - Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  const result = [];
  musicas.find((ids) => {
    if (ids.id === id) {
      result.push(ids.title);
    }
  }); return result;
  // Adicione seu código aqui
}

console.log(findMusic('31031685'))

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const nomes = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  const result = nomes.find((nome) => nome.length === 5);
  return result;
  // Adicione seu código aqui:
}

console.log(findNameWithFiveLetters());

//1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false, use some;
const nome = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasNames = (arr, name) => {
  const result = arr.some((nomeList) => nomeList === name ? true : false);
  return result;
  //Adicione seu código aqui
}

console.log(hasNames(nome, 'Ana'))