const { readFile } = require('fs').promises;
const fs = require('fs').promises;
const path = require('path');

const filePath = path.resolve(__dirname, '..', 'movies.json');
const getMovies = async () => {
  const content = JSON.parse(await readFile(filePath));
  return content;
};

const createMovie = async (movie) => {
  const content = JSON.parse(await readFile(filePath));
  const newMovie = {
  id: content[content.length - 1].id + 1,
  movie,
  };
  const allMovies = JSON.stringify([...content, newMovie]);
  await fs.writeFile(filePath, allMovies);
};
const delteMovie = async (id) => {
  const result = await getMovies();
  const newMovie = result.filter((movie) => movie.id !== Number(id));
  const updatedMovies = JSON.stringify(newMovie, null, 2);
  await fs.writeFile(filePath, updatedMovies);
};
module.exports = { getMovies, createMovie, delteMovie };