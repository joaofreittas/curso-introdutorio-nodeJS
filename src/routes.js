const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/product-controller');

//Primeira Rota
routes.get('/products', ProductController.all);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);
module.exports = routes;