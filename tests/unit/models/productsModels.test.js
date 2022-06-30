const { expect } = require("chai");
const sinon = require("sinon");
const connection = require('../../../models/connection');
const ProductsModel = require('../../../models/ProductModel');

describe('ProductsModel', () => {
  beforeEach(() => {
    sinon.restore();
  });

  const allProducts = [
    {
      "id": 1,
      "name": "Martelo de Thor",
    },
    {
      "id": 2,
      "name": "Traje de encolhimento",
    }
  ];
  
  describe('#getAllProducts', () => {
    it('retorna array de produtos', async () => {
      sinon.stub(connection, 'execute').resolves([allProducts]);
      const result = await ProductsModel.getAllProducts();

      expect(result).to.be.a('array');
    })
    it('quando chamada, lista todos os produtos', async () => {
      sinon.stub(connection, 'execute').resolves([allProducts]);
      const result = await ProductsModel.getAllProducts();

      expect(result).to.be.equal(allProducts);
    });
  });
    
  describe('#getProductId', () => {
    it('retorna objeto', async () => {
      sinon.stub(connection, 'execute').resolves([allProducts]);
      const result = await ProductsModel.getProductId(1);

      expect(result).to.be.a('object');
    });
      it('ao enviar um "id" válido, deve retornar o produto de mesmo id', async () => {
        sinon.stub(connection, 'execute').resolves([allProducts]);
        const result = await ProductsModel.getProductId(1);

        expect(result).to.be.equal(allProducts[0]);
      });
    it('ao enviar um "id" inválido, retorna "undefined"', async () => {
      sinon.stub(connection, 'execute').resolves([[]]);
      const result = await ProductsModel.getProductId(5);

      expect(result).to.be.undefined;
    });
  });

});