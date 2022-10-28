const { readFile } = require('fs').promises;
const path = './simpson.json';
const getSimpsonsById = async (id) => {
  const content = await readFile(path, 'utf-8');
  const arr = JSON.parse(content);
  const simpson = arr.find((e) => Number(e.id) === Number(id));
  return simpson;
}
module.exports = getSimpsonsById;