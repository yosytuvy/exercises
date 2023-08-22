const express = require('express');
const controller = require('../controller/controller-products');
const router = express.Router();

router.get('/all_products', controller.getAllProducts);

router.get('/product/:id', controller.getProductById);

router.post('/add_product', controller.addProduct);

router.put('/update_product/:id', controller.updateProduct);

router.delete('/delete_product/:id', controller.deleteProduct)

router.put('/update_quantity/:operator/:id', controller.updateQuantity)


module.exports = router;