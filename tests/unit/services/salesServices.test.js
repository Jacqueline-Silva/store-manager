const { expect, use } = require("chai");
const sinon = require("sinon");
const chaiAsPromised = require('chai-as-promised');
const SalesModel = require('../../../models/SalesModel');
const SalesService = require("../../../services/SalesService");

use(chaiAsPromised);

describe('SalesService', () => {
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
    it('retorna array de produtos', async () => {
      sinon.stub(SalesModel, 'getAllSales').resolves([allSales]);
      const result = await SalesService.getAllSales();

      expect(result).to.be.a('array');
    })
    it('quando chamada, lista todos os produtos', async () => {
      sinon.stub(SalesModel, 'getAllSales').resolves(allSales);
      const result = await SalesService.getAllSales();

      expect(result).to.be.equal(allSales);
    });
  })

  describe('#getSalesId', () => {
    it('ao enviar o "id" da venda, retorna objeto', async () => {
      sinon.stub(SalesModel, 'getSalesId').resolves(saleId);
      const [result] = await SalesService.getSalesId(1);

      expect(result).to.be.a('object');
    })
    it('ao enviar o "id" da venda, deve retornar as vendas de mesmo id', async () => {
      sinon.stub(SalesModel, 'getSalesId').resolves(saleId);
      const result = await SalesService.getSalesId(1);

      expect(result).to.be.equal(saleId);
    });
    it('ao enviar um "id" inexistente, retorna um erro', async () => {
      sinon.stub(SalesModel, 'getSalesId').resolves(undefined);
      const result = SalesService.getSalesId(5);

      expect(result).to.be.rejectedWith(Error)
    });
  });

});
