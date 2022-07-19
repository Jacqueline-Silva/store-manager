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
  postSales: async (products) => {
    const idSale = `
      INSERT INTO StoreManager.sales (date)
      VALUES (NOW());`;
    const [{ insertId }] = await connection.execute(idSale);

    const values = products.map(({ productId, quantity }) => [insertId, productId, quantity]);
  
    const query = `
      INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
      VALUES (?, ?, ?);`;
    
    await connection.execute(query, ...values);

    return { id: insertId, itemsSold: products };
  },
  deleteSale: async (id) => {
    const query = 'DELETE FROM StoreManager.sales WHERE id = (?);';
    await connection.execute(query, [id]);
  },
  putSale: async (id, saleUpdate) => {
    const { productId, quantity } = saleUpdate;

    const query = `
    UPDATE StoreManager.sales_products
      SET product_id = (?), quantity = (?)
      WHERE sale_id = (?) AND product_id = (?);`;
    
    await connection.execute(query, [productId, quantity, id, productId]);
  },
};

module.exports = SalesModel;