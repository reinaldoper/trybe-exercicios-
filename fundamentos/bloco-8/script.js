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
    callback(result, num);
    console.log(callback(result, num));
    return callback(result, num);

}

const verifica = (result, num) => {
    if (result === num) {
        return 'Parabéns você ganhou';
    } else {
        return 'Tente novamente';
    }
}
console.log(sorteio(3, verifica));