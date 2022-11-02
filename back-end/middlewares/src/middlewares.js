const validaId = (req, res, next) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    res.status(400).send({ message: 'Id invalido' });
  } else {
    next();
  }
};
const validaData = (req, res, next) => {
  const requiredProperties = ['nome', 'sigla'];
  if (requiredProperties.every((property) => property in req.body)) {
    next(); // Chama o próximo middleware
  } else {
    res.status(400).send({ message: 'Atributos errados' }); // Ou já responde avisando que deu errado
  }
};

module.exports = { validaData, validaId };