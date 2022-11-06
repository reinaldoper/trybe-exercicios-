// src/app.js

const express = require('express');
const cacauTrybe = require('./cacauTrybe');


const app = express();
app.use(express.json());
app.listen(3003, () => {
  console.log('Online cacau');
});

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});
app.get('/chocolates/total', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ totalChocolates: chocolates.length });
});
app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  // Usamos o Number para converter o id em um inteiro
  const chocolate = await cacauTrybe.getChocolateById(Number(id));
  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});
//solução retirada do course para estudo posterior
app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;
  const updatedChocolate = await cacauTrybe.updateChocolate(Number(id), { name, brandId });

  if (updatedChocolate) return res.status(200).json({ chocolate: updatedChocolate });
  res.status(404).json({ message: 'chocolate not found' });
});
app.post('/chocolates', async (req, res) => {
  try {
    const data = req.body;
    await cacauTrybe.postCacauTrybe(data);
    res.status(200).json({ message: 'Dados instalados com sucesso!'});
  } catch (error) {
    res.status(404).json(error.message);
  }
});
app.delete('/chocolates/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await cacauTrybe.getAllChocolates();
    console.log(Number(id));
    const result = data.filter((data) => data.id !== Number(id));
    await cacauTrybe.writeCacauTrybe(result);
    res.status(200).json({ message: 'Exclusão com sucesso'});
  } catch (error) {
    res.status(404).json(error.message);
  }
})
module.exports = app;