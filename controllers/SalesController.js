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
  postSales: async (req, res) => {
    const products = req.body;

    await SalesService.validateBody(...products);

    const newSalesProducts = await SalesService.postSales(products);
    
    res.status(201).json(newSalesProducts);
  },
  deleteSale: async (req, res) => {
    const { id } = req.params;

    await SalesService.deleteSale(id);

    res.sendStatus(204);
  },
};

module.exports = SalesController;