const express = require('express');

// os requires são relativos ao arquivo, então o path muda ligeiramente
const { validaId, validaData } = require('../middlewares');
const apiCredentials = require('../middlewares/apiCredentials');

// cria um router middleware
const router = express.Router();

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];
// o path é relativo à rota em que o router foi montado (2)
router.get('/', (req, res) => res.json(teams));

// configurações globais afetam apenas este router (3)
router.use(apiCredentials);

router.get('/:id', validaId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  if (team) {
    res.json(team);
  } else {
    res.sendStatus(404);
  }
});

router.post('/', validaData, (req, res) => {
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

router.put('/:id', validaData, validaId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
  } else {
    res.sendStatus(400);
  }
});

router.delete('/:id', validaId, (req, res) => {
  const id = Number(req.params.id);
  const arrayPosition = teams.filter((team) => team.id !== id);
  teams.splice(arrayPosition, 1);

  /* res.status(200).end(); */
  res.sendStatus(200);
});

module.exports = router;