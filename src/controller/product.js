'use strict';

const db = require('../config/db.config');
const Product = db.products;

const controller = {};

/**
 * Obtener todas los productos
 * 
 * @param req
 * @param res
 * 
 * @returns products
 */
controller.all = (req, res) => {
    Product.findAll({
        attributes: {
            exclude: ['measurement_unit_id']
        },
        include: [{
            model: db.measurement_units,
            as: 'measurement_unit',
            required: false,
            attributes: ['name'],
            nested:false
        }]
    }).then(products => {
        res.status(200).send(products);
    }).catch((err) =>{
        res.status(500).send(err);
    });
};

/* Export module */
module.exports = controller;