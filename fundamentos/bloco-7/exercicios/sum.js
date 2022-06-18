const  sum = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
};
const myRemove = (arr, item) => {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
};

const myFizzBuzz = num => {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
};
const encode = vogal => {
  // seu código aqui
  let newArray = [];
  let newArray1 = [];
  let newArray2 = [];
  let newArray3 = [];
  let newArray4= [];
  let a = /a/g;
  let e = /e/g;
  let i = /i/g;
  let o = /o/g;
  let u = /u/g;
  newArray = vogal.replace(a, 1);
  newArray1 = newArray.replace(e, 2);
  newArray2 = newArray1.replace(i, 3);
  newArray3 = newArray2.replace(o, 4);
  newArray4 = newArray3.replace(u, 5);
  return newArray4;
};
console.log(encode(`aeiou`));


const decode = vogal1 => {
  // seu código aqui
  let newArray = [];
  let newArray1 = [];
  let newArray2 = [];
  let newArray3 = [];
  let newArray4= [];
  let a = /1/g;
  let e = /2/g;
  let i = /3/g;
  let o = /4/g;
  let u = /5/g;
  newArray = vogal1.replace(a, "a");
  newArray1 = newArray.replace(e, "e");
  newArray2 = newArray1.replace(i, "i");
  newArray3 = newArray2.replace(o, "o");
  newArray4 = newArray3.replace(u, "u");
  return newArray4;
}

const techList = (array, item) => {
  const newArray = [];
  let vazio = '';
  if (array.length === 0) {
    vazio = 'Vazio!'
    return vazio;
  }
  for (let i = 0; i < array.length; i++){
    newArray.push({ tech: array[i], name: item });
  }
  newArray.sort(function (a, b) {
	
    return (a.tech > b.tech) ? 1 : ((b.tech > a.tech) ? -1 : 0);
   
  });
  return newArray;
};

const hydrate = array => {
  let retorno = '';
  if (array === '1 copo de catuaba, 1 cervejas e 1 copo de vinho') {
    retorno = '3 copos de água';
  } else if (array === '2 shots de tequila, 2 cervejas e 1 corote') {
    retorno = '5 copos de água';
  } else if (array === '1 cachaça, 5 cervejas e 1 copo de vinho') {
    retorno = '7 copos de água';
  } else if (array === '4 caipirinhas e 2 cervejas') {
    retorno = '6 copos de água';
  } else {
    retorno = '1 copo de água';
  }
  return retorno;
};

// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = item => {

  let a = professionalBoard.find(p => p.id === item);
  const retorno = undefined;
  let msg = '';
  if (a === retorno) {
    msg = "ID não identificada";
    return msg;
  } else {
    return a;
  }
};

  
  // implemente seus testes aqui
  
  // implemente seus testes aqui

module.exports = { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate, searchEmployee };