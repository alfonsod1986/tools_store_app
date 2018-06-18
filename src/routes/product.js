'use strict';

const router = require('express').Router();
const products = require('../controller/product');

router.get('/products/', products.all);

/* Export module */
module.exports = router;