const Joi = require('joi');
const { runSchema } = require('../error/runSchema');
const SalesModel = require('../models/SalesModel');
const ProductsService = require('./ProductService');

const SalesService = {
  validateBody: runSchema(Joi.object({
    productId: Joi.required(),
    quantity: Joi.number().min(1).required(),
  })),

  getAllSales: async () => {
    const sales = await SalesModel.getAllSales();
    return sales;
  },
  getSalesId: async (id) => {
    const salesId = await SalesModel.getSalesId(id);

    if (!salesId || salesId.length === 0) throw new Error('Sale not found');

    return salesId;
  },
  postSales: async (products) => {
    const ids = await Promise.all(products.map((product) =>
      ProductsService.getProductId(product.productId)));

    if (!ids || ids.length === 0) throw new Error('Product not found');
    
    const result = await SalesModel.postSales(products); 

    return result;
  },
};

module.exports = SalesService;