'use strict';

const router = require('express').Router();
const customers = require('../controller/customer');

router.get('/customers/', customers.all);

/* Export module */
module.exports = router;