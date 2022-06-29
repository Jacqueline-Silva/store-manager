const connection = require('./connection');

const ProductsModel = {
  getAllProducts: async () => {
    const query = 'SELECT * FROM StoreManager.products ORDER BY id;';
    const [products] = await connection.execute(query);

    return products;
  },
  getProductId: async (id) => {
    const query = 'SELECT * FROM StoreManager.products WHERE id = (?);';
    const [[productId]] = await connection.execute(query, [id]);
    
    return productId;
  },
};

module.exports = ProductsModel;