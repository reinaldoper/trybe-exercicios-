const { readFile } = require('fs').promises;
const path = require('path');

const filePath = path.resolve(__dirname, '..', 'movies.json');
const getMovies = async () => {
  const content = JSON.parse(await readFile(filePath));
  return content;
};

/* const createMovie = async (movie) => {
  const content = JSON.parse(await readFile(filePath));
  const newMovie = {
  id: content[content.length - 1].id + 1,
  movie,
  };
  const allMovies = JSON.stringify([...content, newMovie]);
  await writeFile(filePath, allMovies);
}; */
module.exports = { getMovies };