const express = require('express');
const routerProducts = require('../products/routs/router-products');
const routerUsers = require('../users/routs/router-users');
const router = express.Router();


router.use('/products', routerProducts);
router.use('/users', routerUsers);


module.exports = router;