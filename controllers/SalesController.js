const SalesService = require('../services/SalesService');

const SalesController = {
  getAllSales: async (_req, res) => {
    const sales = await SalesService.getAllSales();

    res.status(200).json(sales);
  },
  getSalesId: async (req, res) => {
    const { id } = req.params;
    const salesId = await SalesService.getSalesId(id);

    res.status(200).json(salesId);
  },
};

module.exports = SalesController;