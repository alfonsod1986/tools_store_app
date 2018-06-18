'use strict';

const router = require('express').Router();
const companies = require('../controller/company');

router.get('/companies/', companies.all);

/* Export module */
module.exports = router;