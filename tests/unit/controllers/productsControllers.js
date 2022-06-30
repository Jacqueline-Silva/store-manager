const { expect } = require("chai");
const sinon = require("sinon");
const ProductsService = require('../../../services/ProductService');
const ProductsController = require('../../../controllers/ProductController');

describe('ProductsController', () => {
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
    it('retorna status 200', async () => {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(ProductsService, 'getAllProducts').resolves(allProducts);

      await ProductsController.getAllProducts(req, res);


      expect(res.status.calledWith(200)).to.be.true;
    });
    
  });

  describe('#getProductId', () => {
    it('retorna status 200', async () => {
      const req = { params: { id: 1} };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(ProductsService, 'getProductId').resolves(allProducts[0]);

      await ProductsController.getProductId(req, res);


      expect(res.status.calledWith(200)).to.be.true;
    });
    it('retorna o produto esperado', async () => {
      const req = { params: { id: 1 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(ProductsService, 'getProductId').resolves(allProducts[0]);

      await ProductsController.getProductId(req, res);

      expect(res.json.calledWith(allProducts[0])).to.be.true;
    });
  });
  
});