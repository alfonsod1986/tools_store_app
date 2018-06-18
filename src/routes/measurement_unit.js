'use strict';

const router = require('express').Router();
const measurement_units = require('../controller/measurement_unit');

router.get('/users/', measurement_units.all);

/* Export module */
module.exports = router;