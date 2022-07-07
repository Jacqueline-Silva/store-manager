const { expect } = require("chai");
const sinon = require("sinon");
const connection = require('../../../db/connection');
const SalesModel = require('../../../models/SalesModel');

describe('SalesModel', () => {
  beforeEach(() => {
    sinon.restore();
  });

  const allSales = [
    {
      "saleId": 1,
      "date": "2021-09-09T04:54:29.000Z",
      "productId": 1,
      "quantity": 2
    },
    {
      "saleId": 1,
      "date": "2021-09-09T04:54:54.000Z",
      "productId": 2,
      "quantity": 2
    }
  ];

  const saleId = [
    {
      "date": "2021-09-09T04:54:29.000Z",
      "productId": 1,
      "quantity": 2
    },
    {
      "date": "2021-09-09T04:54:54.000Z",
      "productId": 2,
      "quantity": 2
    }
  ]

  describe('#getAllSales', () => {
    it('ao ser executada retorna um array', async () => {
      sinon.stub(connection, 'execute').resolves([allSales]);
      const result = await SalesModel.getAllSales();

      expect(result).to.be.a('array');
    })
    it('ao ser executada, lista todos as vendas', async () => {
      sinon.stub(connection, 'execute').resolves([allSales]);
      const result = await SalesModel.getAllSales();

      expect(result).to.be.equal(allSales);
    });
  });

  describe('#getSalesId', () => {
    it('ao passar o "id" da venda, retorna um array de objetos das vendas daquele "id"', async () => {
      sinon.stub(connection, 'execute').resolves([saleId]);
      const result = await SalesModel.getSalesId(1);

      expect(result).to.be.a('array');
    });
    it('ao enviar um "id" da venda, deve retornar as vendas de mesmo id', async () => {
      sinon.stub(connection, 'execute').resolves([saleId]);
      const result = await SalesModel.getSalesId(1);

      expect(result).to.be.equal(saleId);
    });
    it('ao enviar um "id" de venda inexistente, retorna "undefined"', async () => {
      sinon.stub(connection, 'execute').resolves([]);
      const result = await SalesModel.getSalesId(5);

      expect(result).to.be.undefined;
    });
  });
});