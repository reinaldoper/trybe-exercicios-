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
  
//5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
const expectedRes = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
  ];
  
const fantasyOrScienceFictionAuthors = () =>  books.filter((filtro) => filtro.genre === 'Ficção Científica' || filtro.genre === 'Fantasia').map((book) => book.author.name).sort();
    // escreva seu código aqui

console.log(fantasyOrScienceFictionAuthors());

  //6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
  const expectedResultes = [
    'O Senhor dos Anéis',
    'Fundação',
    'O Chamado de Cthulhu',
  ];
  
const oldBooks = () => books.filter((filtros) => ((2022 - filtros.releaseYear) > 60)).map((book) => book.name).sort();

console.log(oldBooks());

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
  

const oldBooksOrdered = () => books.filter((filtro) => ((2022 - filtro.releaseYear) > 60)).sort((a, b) => a.releaseYear - b.releaseYear);
    
    // escreva seu código aqui

console.log(oldBooksOrdered());
  
// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais
  //Dica: cada inicial termina com um ponto.
  const expected = 'O Senhor dos Anéis';

const authorWith3DotsOnName = () => books.filter((filtros) => (filtros.author.name === 'J. R. R. Tolkien')).map((book) => book.name);
  // escreva seu código aqui

console.log(authorWith3DotsOnName());