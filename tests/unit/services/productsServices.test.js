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

});