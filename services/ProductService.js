const ProductsModel = require('../models/ProductModel');

const ProductsService = {
  getAllProducts: async () => {
    const products = await ProductsModel.getAllProducts();
    return products;
  },
  getProductId: async (id) => {
    const productId = await ProductsModel.getProductId(id);

    if (!productId) throw new Error('Product not found');
    
    return productId;
  },
};

module.exports = ProductsService;