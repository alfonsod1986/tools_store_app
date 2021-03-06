'use strict';

const express = require('express');
const morgan = require('morgan');

const app = express();
const bodyParser = require('body-parser');

/* Importing Routes */
const user = require('./routes/user');
const measurement_unit = require('./routes/measurement_unit');
const product = require('./routes/product');
const customer = require('./routes/customer');
const company = require('./routes/company');

/* Middlewares */
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    next();
});

/* Routes */
app.use('/api', user);
app.use('/api', measurement_unit);
app.use('/api', product);
app.use('/api', customer);
app.use('/api', company);

/* Export module */
module.exports = app;
