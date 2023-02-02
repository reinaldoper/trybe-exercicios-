const sinon = require('sinon');
const { expect } = require('chai');
const { driverService } = require('../driver.service');
const { driverList } = require('./unit/mocks/driver-exercises.service.mock');
const { driverModel } = require('../../models/drives.model');

describe('Verificando service Driver - Exercícios', function () {
  describe('Listando as pessoas motoristas', function () {
    beforeEach(function () {
      sinon.stub(driverModel, 'findAll').resolves(driverList);
    });

    afterEach(function () {
      sinon.restore();
    });

    it('a lista de motoristas é um array', async function () {
         const travel = await driverService.getDrivers();
       
         expect(travel.message instanceof Array).to.equal(true);
    });

    it('retorna a lista de motoristas com sucesso', async function () {
         const travel = await driverService.getDrivers();
 
         expect(travel.message).to.deep.equal(driverList);
    });
  });
});