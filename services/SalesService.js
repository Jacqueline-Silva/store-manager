const SalesModel = require('../models/SalesModel');

const SalesService = {
  getAllSales: async () => {
    const sales = await SalesModel.getAllSales();
    return sales;
  },
  getSalesId: async (id) => {
    const salesId = await SalesModel.getSalesId(id);

    if (!salesId || salesId.length === 0) throw new Error('Sale not found');

    return salesId;
  },
};

module.exports = SalesService;