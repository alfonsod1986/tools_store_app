'use strict';

const router = require('express').Router();
const user = require('../controller/user');

router.get('/users/', user.all);
router.post('/auth', user.logIn);

/* Export module */
module.exports = router;
