const { expect, use } = require("chai");
const sinon = require("sinon");
const ProductsService = require('../../../services/ProductService');
const ProductsModel = require('../../../models/ProductModel');
const chaiAsPromised = require('chai-as-promised');

use(chaiAsPromised);

describe('ProductsService', () => {
  beforeEach(() => {
    sinon.restore();
  });

  const newProductName = 'ProductX';
  const newProduct = { id: 5, name: 'ProductX' };
  const productAtt = { id: 5, name: 'ProductY' };

  const allProducts = [
    {
      "id": 1,
      "name": "Martelo de Thor",
    },
    {
      "id": 2,
      "name": "Traje de encolhimento",
    }
  ]

  describe('#getAllProducts', () => {
    it('retorna array de produtos', async () => {
      sinon.stub(ProductsModel, 'getAllProducts').resolves(allProducts);
      const result = await ProductsService.getAllProducts();

      expect(result).to.be.a('array');
    })
    it('quando chamada, lista todos os produtos', async () => {
      sinon.stub(ProductsModel, 'getAllProducts').resolves(allProducts);
      const result = await ProductsService.getAllProducts();

      expect(result).to.be.equal(allProducts);
    });
  })

  describe('#getProductId', () => {
    it('retorna objeto', async () => {
      sinon.stub(ProductsModel, 'getProductId').resolves(allProducts);
      const [result] = await ProductsService.getProductId(1);
      
      expect(result).to.be.a('object');
    }) 
      it('ao enviar um "id" válido, deve retornar o produto de mesmo id', async () => {
        sinon.stub(ProductsModel, 'getProductId').resolves(allProducts);
        const [result] = await ProductsService.getProductId(1);

        expect(result).to.be.equal(allProducts[0]);
      });
    it('ao enviar um "id" inválido, retorna um erro', async () => {
      sinon.stub(ProductsModel, 'getProductId').resolves(undefined);
      const result = ProductsService.getProductId(5);
   
      expect(result).to.be.rejectedWith(Error)
    });
  });

  describe('#postProducts', () => {
    it('ao enviar um "name" válido, retorna um objeto', async () => {
      sinon.stub(ProductsModel, 'postProducts').resolves(newProduct);
      const result = await ProductsService.postProducts(newProductName);

      expect(result).to.be.a('object');
    });
    it('ao enviar um "name" válido, retorna o produto cadastrado', async () => {
      sinon.stub(ProductsModel, 'postProducts').resolves(newProduct);
      const result = await ProductsService.postProducts(newProductName);

      expect(result).to.be.deep.equal(newProduct);
    });
  });

  describe('#putProduct', () => {
    it('ao enviar o "id", retorna um objeto', async () => {
      sinon.stub(ProductsModel, 'getProductId').resolves(newProduct)
      sinon.stub(ProductsModel, 'putProduct').resolves(productAtt);
      const result = await ProductsService.putProduct(5, 'ProductY');

      expect(result).to.be.a('object');
    });
    it('ao enviar o "id", retorna o produto atualizado', async () => {
      sinon.stub(ProductsModel, 'getProductId').resolves(newProduct)
      sinon.stub(ProductsModel, 'putProduct').resolves(productAtt);
      const result = await ProductsService.putProduct(5, 'ProductY');

      expect(result).to.be.deep.equal(productAtt);
    });
    it('ao enviar "id" inexistente, retorna um erro', async () => {
      sinon.stub(ProductsModel, 'getProductId').returns(undefined);
      const result = ProductsService.putProduct(5, 'ProductY');

      expect(result).to.be.rejectedWith(Error);
    });
  });

  describe('#deleteProduct', () => {
    it('ao deletar um produto não retorna nenhum objeto', async () => {
      sinon.stub(ProductsModel, 'getProductId').resolves(newProduct)
      sinon.stub(ProductsModel, 'deleteProduct').returns();
      const result = await ProductsService.deleteProduct(5);

      expect(result).to.be.not.a('object');
    });
    it('ao enviar "id" inexistente, retorna um erro', async () => {
      sinon.stub(ProductsModel, 'getProductId').returns(undefined);
      const result = ProductsService.deleteProduct(5);

      expect(result).to.be.rejectedWith(Error);
    });
  });

});