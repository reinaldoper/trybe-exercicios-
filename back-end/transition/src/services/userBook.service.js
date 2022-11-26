// src/services/userBook.service.js

const { User, Book } = require('../models');

const getUsersBooksById = (id) => User.findOne({
  where: { id },
  include: [{ model: Book, as: 'books', through: { attributes: [] } }],
});

const getAll = async () => {
  const result = await Book.findAll();
  return result;
};

const getBookId = async (id) => {
  const result = await Book.findOne({
    where: { id },
  });
  return result;
};

module.exports = {
  getUsersBooksById,
  getAll,
  getBookId,
};
