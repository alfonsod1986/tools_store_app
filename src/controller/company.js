'use strict';

const db = require('../config/db.config');
const Company = db.companies;

const controller = {};

/**
 * Obtener todas las empresas
 * 
 * @param req
 * @param res
 * 
 * @returns companies
 */
controller.all = (req, res) => {
    Company.findAll().then(companies => {
        res.status(200).send(companies);
    }).catch((err) =>{
        res.status(500).send(err);
    });
};

/* Export module */
module.exports = controller;