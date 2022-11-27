// src/services/userBook.service.js

const { User, Book, sequelize, UserBook } = require('../models');

const getUsersBooksById = (id) => User.findOne({
  where: { id },
  include: [{ model: Book, as: 'books', through: { attributes: [] } }],
});

const getAll = async () => {
  const result = await Book.findAll();
  return result;
};

const getAllUser = async () => {
  const result = await User.findAll();
  return result;
};

const getAllSearch = async () => {
  const result = await Book.findAll({
    attributes: { exclude: ['id', 'releaseYear', 'totalPages'] },
  });
  return result;
};

const getBookId = async (id) => {
  const result = await Book.findOne({
    where: { id },
    attributes: { exclude: ['id', 'releaseYear', 'totalPages'] },
  });
  return result;
};

const getUserId = async (id) => {
  const result = await User.findOne({
    where: { id },
    attributes: { exclude: ['id'] },
  });
  return result;
};
const insert = async ({ firstName, lastName, age }) => {
  try{
  const res = await User.create({ firstName, lastName, age });
  return res;
  } catch (e) {
    await t.rollback();
    console.log(e);
    throw e; // Jogamos o erro para a controller tratar
  }
};

const insertUserBook = async ({ userId, bookId }) => {
  try{
  const res = await UserBook.create({ userId, bookId  });
  return res;
  } catch (e) {
    await t.rollback();
    console.log(e);
    throw e; // Jogamos o erro para a controller tratar
  }
};

module.exports = {
  getUsersBooksById,
  getAll,
  getBookId,
  getAllSearch,
  insert,
  getAllUser,
  getUserId,
  insertUserBook,
};
