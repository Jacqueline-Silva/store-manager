const connection = require('../db/connection');

const SalesModel = {
  getAllSales: async () => {
    const query = `
      SELECT 
        slP.sale_id AS saleId,
        sal.date AS date, 
        slP.product_id AS productId, 
        slP.quantity AS quantity
      FROM
        StoreManager.sales_products AS slP
      INNER JOIN StoreManager.sales AS sal
      ON slP.sale_id = sal.id
      ORDER BY sale_id, product_id;`;
    const [sales] = await connection.execute(query);

    return sales;
  },
  getSalesId: async (id) => {
    const query = `
      SELECT 
        sal.date AS date, 
        slP.product_id AS productId, 
        slP.quantity AS quantity
      FROM
        StoreManager.sales AS sal
      INNER JOIN StoreManager.sales_products AS slP
      ON slP.sale_id = sal.id
      WHERE sale_id = (?);`;
    const [salesId] = await connection.execute(query, [id]);

    return salesId;
  },
};

module.exports = SalesModel;