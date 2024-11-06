const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// CRUD routes
router.get('/', productController.getAllProducts);
router.get('/new', productController.create);
router.post('/create', productController.createProduct);
router.get('/products/:id', productController.getProductById);
router.get('/edit/:id', productController.updateProduct);
router.post('/update/:id', productController.update);
router.post('/delete/:id', productController.deleteProduct);

module.exports = router;

