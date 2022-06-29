//Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens, faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread.
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['mamão', 'cereja', 'vergamota'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['pera', 'maçã', 'uva'];

const fruitSalad = (fruit, additional) => {
    let result = [];
    fruit.forEach(() => {
        result = [...fruit, ...additional];
    })
    return result;
    // Esreva sua função aqui
};

console.log(fruitSalad(specialFruit, additionalItens));

//object destruturing
// definindo o objeto
const character = {
    nome: 'Luke SkyWalker',
    age: '53',
    description: {
        specieName: 'Human',
        jedi: true,
    },
    homeWorld: {
        name: 'Tatooine',
        population: '200000',
    },
};

// desestruturando o objeto:
const {
    nome,
    age,
    homeWorld: {
        name: planetName
    },
    description: {
        jedi
    }
} = character;

// imprimindo os valores:
console.log(`Esse é o ${nome}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);


const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
};

const {
    workDays,
    weekend
} = daysOfWeek;
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']

const weekdays = [...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

//1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.

const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};

const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};
const resultado = (obj, obj1) => {
    let newObj = {
        ...obj,
        ...obj1
    };

    return newObj;
}
console.log(resultado(user, jobInfos));
//2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.
console.log(`Hi, my name is ${resultado(user, jobInfos).name}, I'm ${resultado(user, jobInfos).age} years old and I'm ${resultado(user, jobInfos).nationality}. I work as a ${resultado(user, jobInfos).profession} and my squad is ${resultado(user, jobInfos).squadInitials}-${resultado(user, jobInfos).squad}.`);

//1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá
const [saudacao] = saudacoes;
console.log(saudacao);

//2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
[comida, animal, bebida] = [bebida, comida, animal]
console.log(comida, animal, bebida); // arroz gato água

// Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined. Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian.
const getNationality = ({
    firstName,
    nationality = 'Brazilian'
}) => `${firstName} is ${nationality}`;

const person = {
    firstName: 'João',
    lastName: 'Jr II',
};
const {
    nationality = 'Brazilian'
} = person;
const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

//Agora é hora de praticar: altere a função getPosition utilizando a property shorthand.
const getPosition = (latitude, longitude) => ({
    latitude,
    longitude
});

console.log(getPosition(-19.8157, -43.9542));

//Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.
const multiply = (number, value = 1) => {
    return number * value;
    // Escreva aqui a sua função
};

console.log(multiply(8, 3));

//PRÀTICA   ==>  1 - Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2, 15 e 54. Dica: use spread operator
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
    rectangleArea(...rectangles) // altere a chamada da funcao rectangleArea
    console.log(rectangle[0] * rectangle[1]);
});
//2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
//Dica: use parâmetro rest.

const sum = (...soma) => {
    return soma.reduce((acc, item) => acc + item);
}
console.log(sum(1, 2, 4, 6));

//3 - Escreva a função personLikes, que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo:
//Dica: use object destructuring.

const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
};

const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = ({
    name,
    age,
    likes
}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

//🚀 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
//Dica: use object destructuring.

const people = [{
        name: 'Nicole',
        bornIn: 1992,
        nationality: 'Australian',
    },
    {
        name: 'Harry',
        bornIn: 2008,
        nationality: 'Australian',
    },
    {
        name: 'Toby',
        bornIn: 1901,
        nationality: 'Australian',
    },
    {
        name: 'Frida',
        bornIn: 1960,
        nationality: 'Dannish',
    },
    {
        name: 'Fernando',
        bornIn: 2001,
        nationality: 'Brazilian',
    },
];
const filterPeople = (arr) => arr.filter(
    ({ nationality, bornIn }) =>
      nationality === 'Australian'
      && bornIn > 1900 && bornIn <= 2000,
    );

console.log(filterPeople(people));
// escreva filterPeople abaixo
//5 - Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:
//Dica: use array destructuring.
const myList = [1, 2, 3];
const [a, b, c] = myList;

const swap = (...myList) => myList;
// escreva swap abaixo
console.log(swap(c, b, a));

//6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro:
//Dica: use array destructuring e abbreviation object literal.
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([name, brand, year]) => ({name, brand, year});
console.log(toObject(palio));

const myLists = [1, 2, 3];
const result = myLists.reduce((acc, item) => {
    return acc + item;
});
console.log(result);

// escreva swap abaixo
const swaps = ([a, b, c]) => [c, b, a];
console.log(swaps(myLists));