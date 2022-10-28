const express = require('express');

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
app.get('/activities', (req, res) => {
  res.status(200).json(activities);
});

app.get('/activities/:id', (req, res) => {
  const idParams = req.params.id;
  const activies = activities.find(({ id }) => id === Number(idParams));
  res.status(200).json(activies);
});
app.delete('/activities/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = activities.findIndex((team) => team.id === Number(id));
  activities.splice(arrayPosition, 1);

  res.status(200).json(activities);
});
app.put('/activities/:id', (req, res) => {
  const idParams = req.params.id;
  const { name, initials } = req.body;
  let arrayActivies;
  for (let i = 0; i < activities.length; i ++) {
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