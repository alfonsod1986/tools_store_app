'use strict';

const router = require('express').Router();
const products = require('../controller/product');

router.get('/products/', products.all);
router.get('/products/:productId', products.show);

/* Export module */
module.exports = router;