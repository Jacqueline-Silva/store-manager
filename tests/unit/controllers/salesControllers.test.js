const { expect } = require("chai");
const sinon = require("sinon");
const SalesController = require("../../../controllers/SalesController");
const SalesService = require("../../../services/SalesService");

describe('ProductsController', () => {
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
    it('ao fazer a requisição, retorna o status 200', async () => {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(SalesService, 'getAllSales').resolves(allSales);

      await SalesController.getAllSales(req, res);

      expect(res.status.calledWith(200)).to.be.true;
    });

  });

  describe('#getSalesId', () => {
    it('ao fazer a requisição passando um "id", retorna status 200', async () => {
      const req = { params: { id: 1 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(SalesService, 'getSalesId').resolves(saleId);

      await SalesController.getAllSales(req, res);

      expect(res.status.calledWith(200)).to.be.true;
    });
    it('ao fazer a requisição passando um "id", retorna as vendas de mesmo "id"', async () => {
      const req = { params: { id: 1 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(SalesService, 'getSalesId').resolves(saleId);

      await SalesController.getSalesId(req, res);

      expect(res.json.calledWith(saleId)).to.be.true;
    });
  });

});