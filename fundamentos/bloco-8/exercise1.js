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
  const nameBook = books.find((book) => book.name.length === 26);
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

const booksOrderedByReleaseYearDesc = () => expectedResults.sort((a, b) => a.author.birthYear - b.author.birthYear);

console.log(booksOrderedByReleaseYearDesc());

//Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

const expectedResul = false;

function everyoneWasBornOnSecXX() {
  const firstMultipleOf5s = expectedResults.every((number) => (number.author.birthYear >= 1900 && number.author.birthYear <= 2000) ? true : false);
  return firstMultipleOf5s;
  // escreva seu código aqui
}
console.log(everyoneWasBornOnSecXX());



//Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

const bookss = [
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
const expectedResultss = false;

function authorUnique() {
  return bookss.every((book) =>
    !bookss.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
  // escreva seu código aqui
}
console.log(authorUnique());

//Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
const expectedResultes = true;

const someBookWasReleaseOnThe80s = () => {
  const result = bookss.some((book) => (book.releaseYear >= 1980 && book.releaseYear <= 1989) ? true : false);
  return result;
  // escreva seu código aqui
}
console.log(someBookWasReleaseOnThe80s());
