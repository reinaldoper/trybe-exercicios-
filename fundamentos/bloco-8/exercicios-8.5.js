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