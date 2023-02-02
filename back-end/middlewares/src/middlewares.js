const validaId = (req, res, next) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    res.status(400).send({ message: 'Id invalido' });
  } else {
    next();
  }
};
const validaData = (req, res, next) => {
  const requiredProperties = ['nome', 'email', 'sigla'];
  /* console.log(requiredProperties); */
  const { nome, email, sigla } = req.body;
  console.log(nome, email, sigla);
  const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const alidaNome = nome;
  if (email.match(validateEmail) && alidaNome.length < 6) {
    next();
  } else if (requiredProperties.every((property) => property in req.body)) {
    next(); // Chama o próximo middleware
  } else {
    res.status(400).send({ message: 'Atributos errados' }); // Ou já responde avisando que deu errado
  }
};
const validaEmail = (req, res, next) => {
  /* console.log(requiredProperties); */
  const { email } = req.body;
  const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.match(validateEmail)) {
    next();
  } else {
    res.status(400).send({ message: 'Email errado' }); // Ou já responde avisando que deu errado
  }
};
const validaNome = (req, res, next) => {
  /* console.log(requiredProperties); */
  const { nome } = req.body;
  if (nome.length < 6) {
    next();
  } else {
    res.status(400).send({ message: 'Nome errado!' }); // Ou já responde avisando que deu errado
  }
};

module.exports = { validaData, validaId, validaEmail, validaNome };