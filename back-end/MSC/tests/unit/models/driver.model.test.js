const sinon = require('sinon');
const { expect } = require('chai');

const driveModel = require('../../../src/models/drives.model');
const connection = require('../../../src/models/connection');

describe('Driver Model', function () {
  before(async function () {
    const execute = [{
      id: 1,
      name: 'Liana Cisneiros',
    },
    {
      id: 2,
      name: 'Fábio Frazão',
    },
  ];
    sinon.stub(connection, execute).resolves();
  });
  after(async function () {
    connection.execute.restore();
  });
  describe('Lista todas as pessoas motoristas', function () {
    it('com o tipo array', function () {
      const response = driveModel.findAll();
      expect(response).to.be.a('array');
    });

    it('com sucesso', function () {
      const expected = [
        {
          id: 1,
          name: 'Liana Cisneiros',
        }, 
        {
          id: 2,
          name: 'Fábio Frazão',
        },
      ];

      const response = driveModel.findAll();

      expect(response).to.deep.equal(expected);
    });
  });
});