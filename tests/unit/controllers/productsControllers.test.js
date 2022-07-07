const { expect } = require("chai");
const sinon = require("sinon");
const ProductsService = require('../../../services/ProductService');
const ProductsController = require('../../../controllers/ProductController');

describe('ProductsController', () => {
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

  describe('#postProducts', () => {
    it('ao enviar um "name" válido, retorna status 201', async () => {
      const req = { body: { name: newProductName }};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      await ProductsService.validateBody(req.body);

      sinon.stub(ProductsService, 'postProducts').resolves(newProduct);

      await ProductsController.postProducts(req, res);

      expect(res.status.calledWith(201)).to.be.true;
    });
  });

  describe('#putProducts', () => {
    it('ao enviar um "name" válido, retorna o status 200', async () => {
      const req = {
        params: { id: 5 },
        body: { name: 'ProductY' }
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      await ProductsService.validateBody(req.body);

      sinon.stub(ProductsService, 'putProduct').resolves(productAtt);

      await ProductsController.putProduct(req, res);

      expect(res.status.calledWith(200)).to.be.true;
    });
    it('ao enviar um "name" válido, retorna status 200 e o produto atualizado', async () => {
      const req = {
        params: { id: 5 },
        body: { name: 'ProductY' }
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      await ProductsService.validateBody(req.body);

      sinon.stub(ProductsService, 'putProduct').resolves(productAtt);

      await ProductsController.putProduct(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(productAtt)).to.be.true;
    });
  });
  
  describe('#deleteProducts', () => {
    it('ao enviar um "id" válido e deletar um produto, retorna status 204', async () => {
      const req = { params: { id: 5 } };
      const res = {};

      res.sendStatus = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(ProductsService, 'deleteProduct').resolves();

      await ProductsController.deleteProduct(req, res);

      expect(res.sendStatus.calledWith(204)).to.be.true;
    });
  });

});