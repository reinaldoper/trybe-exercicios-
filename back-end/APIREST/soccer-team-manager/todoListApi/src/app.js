const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const { getMovies } = require('../utils/handle.Json');

const filePath = path.resolve(__dirname, '..', 'movies.json');

const app = express();
app.use(express.json());
const activities = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
  {
    id: 3,
    name: 'Corinthians Sport Clube',
    initials: 'SCCP',
  },
  {
    id: 4,
    name: 'Clube Atlético Paranaense',
    initials: 'CAP',
  },
];
const OK = 200;
const CREATED = 201;

app.put('/movies/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { movie, price } = req.body;
      const movies = await getMovies();
      const index = movies.findIndex((element) => element.id === Number(id));
      movies[index] = { id: Number(id), movie, price };
      const updatedMovies = JSON.stringify(movies, null, 2);
      await fs.writeFile(filePath, updatedMovies);
       res.status(200).json(movies[index]);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });
  app.delete('/movies/:id', async (req, res) => {
    try {
      const { id } = req.params;
    const result = await getMovies();
    const newMovie = result.filter((movie) => movie.id !== Number(id));
    const updatedMovies = JSON.stringify(newMovie, null, 2);
    await fs.writeFile(filePath, updatedMovies);
    res.status(OK).json({ message: `Deletado o id:${id}` });
    res.status(204).end();
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });
app.post('/movies', async (req, res) => {
     try {
       const movies = await getMovies();
       const { movie, price } = req.body;
       const newMovie = {
         id: movies[movies.length - 1].id + 1,
         movie,
         price,
       };
       const allMovies = JSON.stringify([...movies, newMovie]);
       await fs.writeFile(filePath, allMovies);
      res.status(CREATED).json(newMovie);
     } catch (err) {
       res.status(500).send({ message: err.message });
     }
   });

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await getMovies();
  const foundMovie = movies.find((e) => Number(e.id) === Number(id));
  res.status(OK).json({ movie: foundMovie });
});
app.get('/movies', async (req, res) => {
  const movies = await getMovies();
  res.status(OK).json(movies);
});
app.get('/activities', (req, res) => {
  res.status(OK).json(activities);
});

app.get('/activities/:id', (req, res) => {
  const idParams = req.params.id;
  const activies = activities.find(({ id }) => id === Number(idParams));
  res.status(OK).json(activies);
});
app.delete('/activities/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = activities.filter((team) => team.id !== Number(id));
  /* activities.splice(arrayPosition, 1); */

  res.status(OK).json(arrayPosition);
});
app.put('/activities/:id', (req, res) => {
  const idParams = req.params.id;
  const { name, initials } = req.body;
  let arrayActivies;
  for (let i = 0; i < activities.length; i++) {
    const activi = activities[i];
    if (activi.id === Number(idParams)) {
      activi.name = name;
      activi.initials = initials;
      arrayActivies = activi;
    }
  }
  res.status(200).json(arrayActivies);
});
module.exports = app;