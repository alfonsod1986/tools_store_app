'use strict';

const router = require('express').Router();
const measurement_units = require('../controller/measurement_unit');

router.get('/measurement_units/', measurement_units.all);
router.get('/measurement_units/:measurementUnitId', measurement_units.show);

/* Export module */
module.exports = router;