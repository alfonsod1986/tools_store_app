'use strict';

const db = require('../config/db.config');
const Customer = db.customers;

const controller = {};

/**
 * Obtener todos los clientes
 * 
 * @param req
 * @param res
 * 
 * @returns customers
 */
controller.all = (req, res) => {
    Customer.findAll().then(customers => {
        res.status(200).send(customers);
    }).catch((err) =>{
        res.status(500).send(err);
    });
};

/* Export module */
module.exports = controller;