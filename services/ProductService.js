const Joi = require('joi');
const ProductsModel = require('../models/ProductModel');
const { runSchema } = require('./runSchema');

const ProductsService = {
  validateBody: runSchema(
    Joi.object({
      name: Joi.string().min(5).required(),
    }),
  ),
  getAllProducts: async () => {
    const products = await ProductsModel.getAllProducts();
    return products;
  },
  getProductId: async (id) => {
    const productId = await ProductsModel.getProductId(id);

    if (!productId) throw new Error('Product not found');
    
    return productId;
  },
  postProducts: async (productName) => {
    const newProduct = await ProductsModel.postProducts(productName);

    return newProduct;
  },
};

module.exports = ProductsService;