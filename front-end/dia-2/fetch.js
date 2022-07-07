const fetch = require('node-fetch');

/* const fetchJoke = () => {
  const url = 'api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke(); */

// Algo deu errado :(
// TypeError: Only absolute URLs are supported

//Async e Await
/* const fetch = require('node-fetch'); */

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
      .catch((error) => console.log(`Algo deu errado :( \n${error}`));
    console.log(result);
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.
//sando o try/catch
/* const fetch = require('node-fetch'); */

const fetchJokes = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJokes();

// Chuck Norris can write multi-threaded applications with a single thread.