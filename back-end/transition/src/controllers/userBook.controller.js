// src/controllers/userBook.controller.js

const userBookService = require('../services/userBook.service')

const getUsersBooksById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userBookService.getUsersBooksById(id);

    if (!user)
      return res.status(404).json({ message: 'Pessoa não encontrada' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
};

const getAll = async (_req, res) => {
  try {
    const result = await userBookService.getAll();
    if (!result)
      return res.status(404).json({ message: 'Livros não cadastrados' });
      return res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getBookId = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userBookService.getBookId(Number(id));
    if (!result)
      return res.status(404).json({ message: 'Livros não encontrado!' });
      return res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

module.exports = {
  getUsersBooksById,
  getAll,
  getBookId,
};
