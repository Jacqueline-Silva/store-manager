const connection = require('../db/connection');

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
  postProducts: async (productName) => {
    const query = 'INSERT INTO StoreManager.products(name) VALUES (?);';
    const [{ insertId }] = await connection.execute(query, [productName]);
    const newProduct = { id: insertId, name: productName };

    return newProduct;
  },
  putProduct: async (id, updateProductName) => {
    const query = 'UPDATE StoreManager.products SET name = (?) WHERE id = (?);';

    await connection.execute(query, [updateProductName, id]);

    const updateProduct = { id, name: updateProductName };

    return updateProduct;
  },
  deleteProduct: async (id) => {
    const query = 'DELETE FROM StoreManager.products WHERE id = (?);';
    await connection.execute(query, [id]);
  },
};

module.exports = ProductsModel;