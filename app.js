const express = require('express');
const rescue = require('express-rescue');
const ProductsController = require('./controllers/ProductController');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', rescue(ProductsController.getAllProducts));
app.get('/products/:id', rescue(ProductsController.getProductId));

app.use((err, _req, res, _next) => {
  const { name, message } = err;

  switch (name) {
    case 'Error': res.status(404).json({ message }); break;
    default: res.status(500).json({ message });
  }
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;