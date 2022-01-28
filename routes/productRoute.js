const express = require('express');
const productController = require('../controllers/productController');

const router  = express.Router();

// http://localhost:5000/products (GET)
router.route('/').get(productController.getAllProducts);

// http://localhost:5000/products/product/id (GET)
router.route('/product/:id').get(productController.getById);

// http://localhost:5000/products/isDiscount (GET)
router.route('/:isDiscount').get(productController.getByDiscount);

// http://localhost:5000/products (POST)
router.route('/').post(productController.createProduct);

// http://localhost:5000/products/id (PUT)
router.route('/:id').put(productController.updateProduct);

// http://localhost:5000/products/id (DELETE)
router.route('/:id').delete(productController.deleteProduct);

module.exports = router;