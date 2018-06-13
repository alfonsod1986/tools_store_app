'use strict';

const router = require('express').Router();
const user = require('../controller/user');

router.post('/login', user.logIn);

/* Export module */
module.exports = router;
