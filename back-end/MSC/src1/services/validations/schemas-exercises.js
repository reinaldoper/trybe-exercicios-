// src/services/validations/schemas-exercises.js
const Joi = require('joi');

const addCarSchema = Joi.object({
  model: Joi.string().min(3).required(),
  color: Joi.string().min(2).required(),
  licensePlate: Joi.string().length(7).required(),
});

module.exports = {
  addCarSchema,
};