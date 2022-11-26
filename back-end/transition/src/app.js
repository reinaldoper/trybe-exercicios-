const express = require('express');

const userBookController = require('./controllers/userBook.controller');


const app = express();

app.use(express.json());
app.get('/books/search', userBookController.getSearch);
app.get('/books/:id', userBookController.getBookId);
app.get('/userbooks/:id', userBookController.getUsersBooksById);
app.get('/books', userBookController.getAll);

module.exports = app;

