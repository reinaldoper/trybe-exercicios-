/* const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  fetch(API_URL, { headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(data =>
      document.getElementById('jokeContainer').innerText = data.joke
    );
}

window.onload = () => fetchJoke(); */
//"Accept: application/json" "https://icanhazdadjoke.com/"
//curl -H "Accept: text/plain" "https://icanhazdadjoke.com/"

// api.js
/* const fetch = require('node-fetch');

const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
      .then((data) => data.data)
      .catch((error) => error.toString());
    return coins;
}


window.onload = () => fetchCoins(); */
// api.js

//solução retirada do course
const fetchCoins = async () => {
    const url = 'https://api.coincap.io/v2/assets';

    const coins = await fetch(url).then((response) => response.json())
        .then((data) => data.data)
        .catch((error) => error.toString());

    return coins;
}

const setCoins = async () => {
    const coins = await fetchCoins();

    const coinsList = document.getElementById('coins-list');
    coins
        .filter((_, index) => index < 10)
        .forEach(coin => {
            const newLi = document.createElement('li');
            const usdPrice = Number(coin.priceUsd);

            newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;

            coinsList.appendChild(newLi);
        });
}

window.onload = () => setCoins();