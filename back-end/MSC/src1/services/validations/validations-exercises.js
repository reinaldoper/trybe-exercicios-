// src/services/validations/validations-exercises.js
const {
  addCarSchema,
} = require('./schemas-exercises');

const validateNewCar = (model, color, licensePlate) => {
  const { error } = addCarSchema
    .validate({ model, color, licensePlate });
 
  if (error) return { type: 'INVALID_VALUE', message: error.message };
  return { type: null, message: '' };
};

module.exports = {
  validateNewCar,
};
