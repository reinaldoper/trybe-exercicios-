// src/cacauTrybe.js

const fs = require('fs').promises;
const { join } = require('path');
const path = '/files/cacauTrybeFile.json';

const readCacauTrybeFile = async () => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe;
};
const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe
    .find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe
    .filter((chocolate) => chocolate.brandId === brandId);
};
const writeCacauTrybe = async (content) => {
  try {
    const completePath = join(__dirname, path);
    await fs.writeFile(completePath, JSON.stringify(content));
  } catch (e) {
    console.error('Erro ao salvar o arquivo', e.message);
    return null;
  }
}
//solução retirada do course para estudo posterior
const updateChocolate = async (id, update) => {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolateToUpdate = cacauTrybe.find(
    (chocolate) => chocolate.id === id,
  );

  if (chocolateToUpdate) {
    cacau= cacauTrybe.map((chocolate) => {
        if (chocolate.id === id) return { ...chocolate, ...update };
        return chocolate;
      });
  
    await writeCacauTrybe(cacau);
    return { ...chocolateToUpdate, ...update };
  }

  return false;
};
const postCacauTrybe = async (update) => {
  const cacauTrybe = await readCacauTrybeFile();
  const { name, brandId } = update;
  const datas = cacauTrybe.length;
  console.log(cacauTrybe);
  const data = [...cacauTrybe, { name, brandId, id: datas + 1} ];
  await writeCacauTrybe(data);
};

module.exports = {
    getAllChocolates,
    getChocolateById,
  getChocolatesByBrand,
  updateChocolate,
  postCacauTrybe, 
  writeCacauTrybe,
};