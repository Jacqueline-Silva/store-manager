const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const ProductsController = require('./controllers/ProductController');
const SalesController = require('./controllers/SalesController');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', rescue(ProductsController.getAllProducts));
app.get('/products/:id', rescue(ProductsController.getProductId));
app.post('/products', rescue(ProductsController.postProducts));
app.put('/products/:id', rescue(ProductsController.putProduct));
app.delete('/products/:id', rescue(ProductsController.deleteProduct));

app.get('/sales', rescue(SalesController.getAllSales));
app.get('/sales/:id', rescue(SalesController.getSalesId));
app.post('/sales', rescue(SalesController.postSales));
app.delete('/sales/:id', rescue(SalesController.deleteSale));
app.put('/sales/:id', rescue(SalesController.putSale));

app.use((err, _req, res, _next) => {
  const { name, code, message } = err;

  switch (name) {
    case 'Error': res.status(404).json({ message }); break;
    case 'ValidationError': res.status(code).json({ message }); break;
    default: res.status(500).json({ message });
  }
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;