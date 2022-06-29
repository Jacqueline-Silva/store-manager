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
};

module.exports = ProductsController;