'use strict';

const router = require('express').Router();
const customers = require('../controller/customer');

router.get('/customers/', customers.all);
router.get('/customers/:customerId', customers.show);

/* Export module */
module.exports = router;