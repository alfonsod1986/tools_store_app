'use strict';

const router = require('express').Router();
const companies = require('../controller/company');

router.get('/companies/', companies.all);
router.get('/companies/:companyId', companies.show);

/* Export module */
module.exports = router;