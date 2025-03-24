const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.get('/id/:id', productController.productDetail);
router.get('/cart', productController.getCart);

module.exports = router;
