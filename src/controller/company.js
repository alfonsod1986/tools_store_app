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

/**
 * Obtener una empresa por Id
 * 
 * @param req
 * @param res
 * 
 * @returns company
 */
controller.show = (req, res) => {
    const { companyId } = req.params;

    Company.findById(companyId).then(company => {
        res.status(200).send(company);
    }).catch((err) =>{
        res.status(500).send(err);
    });
};

/* Export module */
module.exports = controller;