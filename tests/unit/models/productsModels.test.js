const { expect } = require("chai");
const sinon = require("sinon");
const connection = require('../../../db/connection');
const ProductsModel = require('../../../models/ProductModel');

describe('ProductsModel', () => {
  beforeEach(() => {
    sinon.restore();
  });

  const newProductName = 'ProductX';
  const newProduct = { id: 5, name: 'ProductX' };

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

  describe('#postProducts', () => {
    it('retorna um objeto', async () => {
      sinon.stub(connection, 'execute').resolves([{ insertId: 5 }]);
      const result = await ProductsModel.postProducts(newProductName);

      expect(result).to.be.a('object');
    });
    it('retorna o produto cadastrado', async () => {
      sinon.stub(connection, 'execute').resolves([{ insertId: 5 }]);
      const result = await ProductsModel.postProducts(newProductName);

      expect(result).to.be.deep.equal(newProduct);
    });
  })

  describe('#putProduct', () => {
    it('retorna um objeto', async () => {
      const result = await ProductsModel.putProduct(5, 'ProductY');

      expect(result).to.be.a('object');
    });
    it('retorna o produto com o nome atualizado', async () => {
      const productAtt = { id: 5, name: 'ProductY' };

      const result = await ProductsModel.putProduct(5, 'ProductY');

      expect(result).to.be.deep.equal(productAtt);
    });
  });

  describe('#deleteProduct', () => {
    it('ao deletar um produto não retorna nenhum objeto', async () => {
      sinon.stub(connection, 'execute').returns();
      const result = await ProductsModel.deleteProduct(5);

      expect(result).to.be.not.a('object');
    });

  });

});