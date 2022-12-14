const ProductsService = require('../services/ProductService');

const ProductsController = {
  getAllProducts: async (_req, res) => {
    const products = await ProductsService.getAllProducts();
    
    res.status(200).json(products);
  },
  getProductId: async (req, res) => {
    const { id } = req.params;
    const productId = await ProductsService.getProductId(id);

    res.status(200).json(productId);
  },
  postProducts: async (req, res) => {
    const { name } = req.body;
    await ProductsService.validateBody(req.body);

    const newProduct = await ProductsService.postProducts(name);

    res.status(201).json(newProduct);
  },
  putProduct: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    
    await ProductsService.validateBody(req.body);
    
    const updateProduct = await ProductsService.putProduct(id, name);

    res.status(200).json(updateProduct);
  },
  deleteProduct: async (req, res) => {
    const { id } = req.params;

    await ProductsService.deleteProduct(id);

    res.sendStatus(204);
  },
  searchProduct: async (req, res) => {
    const { q } = req.query;

    const productSelected = await ProductsService.searchProduct(q);

    res.status(200).json(productSelected);
  },
};

module.exports = ProductsController;