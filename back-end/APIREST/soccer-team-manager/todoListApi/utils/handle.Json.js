const { readFile } = require('fs').promises;
const { writeFile } = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '..', 'movies.json');
const getMovies = async () => {
  const content = JSON.parse(await readFile(filePath));
  return content;
};

const createMovie = async (movie) => {
  const content = JSON.parse(await readFile(filePath));
  await writeFile(filePath, JSON.stringify([...content, { id: content.lenght + 1, movie }]));
};
module.exports = { getMovies, createMovie };