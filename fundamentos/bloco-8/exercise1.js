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
  
  // Adicione o código do exercício aqui:Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.Dica: use a função forEach.
  function authorBornIn1947() {
      const first = books.find((number) => number.author.birthYear=== 1947);
      return first.author.name;
};
console.log(authorBornIn1947());

// Retorne o nome do livro de menor nome. Dica: use a função forEach.
function smallerName() {
    let nameBook;
    let menor = 100;
  books.forEach((book) => {
        if (book.name.length < menor) {
          menor = book.name.length;
          nameBook = book.name;
       }
      });
      return nameBook;
    // Variável nameBook que receberá o valor do menor nome;
};
smallerName();
console.log(smallerName());

// Encontre o primeiro livro cujo nome possui 26 caracteres.
const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  let frase = expectedResult.author.name.length;
  let frase_array = expectedResult.name.length;
  if (frase === 26) {
    nameBook = expectedResult.author.name;
  }if (frase_array === 26) {
    nameBook = expectedResult.name;
  }
  return nameBook; 
  // escreva seu código aqui
} getNamedBook();
console.log(getNamedBook());


// Ordene os livros por data de lançamento em ordem decrescente.

const expectedResults = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

const booksOrderedByReleaseYearDesc = () => expectedResults.sort((a, b) => a.releaseYear - b.releaseYear);

console.log(booksOrderedByReleaseYearDesc());