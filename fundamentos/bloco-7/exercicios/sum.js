function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
};
function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
};

function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
};
function encode(vogal) {
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


function decode(vogal1) {
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

function techList (array, item) {
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

  
  // implemente seus testes aqui
  
  // implemente seus testes aqui

module.exports = { sum, myRemove, myFizzBuzz, encode, decode, techList };