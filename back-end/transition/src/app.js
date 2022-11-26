const express = require('express');

const userBookController = require('./controllers/userBook.controller');


const app = express();

app.use(express.json());
app.get('/userbooks/:id', userBookController.getUsersBooksById);
app.get('/books', userBookController.getAll);
app.get('/books/:id', userBookController.getBookId);

module.exports = app;

