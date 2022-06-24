const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

  //🚀 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
  const expectedResult = [
    'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
    'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
    'Fundação - Ficção Científica - Isaac Asimov',
    'Duna - Ficção Científica - Frank Herbert',
    'A Coisa - Terror - Stephen King',
    'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
  ];
  
const formatedBookNames = () => books.map((filtro) => `${filtro.name} - ${filtro.genre} - ${filtro.author.name}`);

console.log(formatedBookNames());
  
//🚀 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado. Dica: use as funções map, sort

const expectedResults = [
    {
      age: 31,
      author: 'Isaac Asimov',
    },
    {
      age: 38,
      author: 'H. P. Lovecraft',
    },
    {
      age: 39,
      author: 'Stephen King',
    },
    {
      age: 43,
      author: 'George R. R. Martin',
    },
    {
      age: 45,
      author: 'Frank Herbert',
    },
    {
      age: 62,
      author: 'J. R. R. Tolkien',
    },
  ];
  
const nameAndAge = () => {
    const result = books.map((livro) => {
       return {
            age: livro.releaseYear - livro.author.birthYear,
            author: `${livro.author.name}`,
        };
    });
    result.sort((a, b) => a.age - b.age);
    return result;
    // escreva seu código aqui
}
  
console.log(nameAndAge());

//3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
//Dica: use as funções filter e sort

const expectedResul = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: { name: 'George R. R. Martin', birthYear: 1948 },
      releaseYear: 1991
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: { name: 'Frank Herbert', birthYear: 1920 },
      releaseYear: 1965
    }
  ];
  //3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
//Dica: use as funções filter e sort
const fantasyOrScienceFiction = () => {
    const book = books.filter((filtro) => {
        if (filtro.genre === 'Ficção Científica' || filtro.genre === 'Fantasia') {
            return filtro;
        }
    })
    return book;
    // escreva seu código aqui
}
  
console.log(fantasyOrScienceFiction());

//4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
//Dica: use as funções filter e sort
const expectedResu = [
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: { name: 'H. P. Lovecraft', birthYear: 1890 },
      releaseYear: 1928,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954,
    },
  ];
  
const oldBooksOrdered = () => {
    const result = books.filter((filtro) => {
        if ((2022 - filtro.releaseYear) > 60) {
            return filtro;
          }
    })
    result.sort((a, b) => a.releaseYear - b.releaseYear);
    return result;
    // escreva seu código aqui
}
  console.log(oldBooksOrdered());
//5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
const expectedRes = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
  ];
  
const fantasyOrScienceFictionAuthors = () => {
    const book = books.map((filtro) => {
        if (filtro.genre === 'Ficção Científica' || filtro.genre === 'Fantasia') {
            return filtro.author.name;
        }
    });
    book.sort((a, b) => a - b);
    console.log(book);
    return book;
    // escreva seu código aqui
}
console.log(fantasyOrScienceFictionAuthors());
  
  //6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
  const expectedResultes = [
    'O Senhor dos Anéis',
    'Fundação',
    'O Chamado de Cthulhu',
  ];
  
function oldBooks() {
    const result = books.map((filtros) => {
        if ((2022 - filtros.releaseYear) > 60) {
            return filtros.name;
          }
    })
    return result;
    // escreva seu código aqui
}
  console.log(oldBooks());