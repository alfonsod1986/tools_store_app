'use strict';

const db = require('../config/db.config');
const MeasurementUnit = db.measurement_units;

const controller = {};

/**
 * Obtener todas las unidades de medida
 * 
 * @param req
 * @param res
 * 
 * @returns measurement_units
 */
controller.all = (req, res) => {
    MeasurementUnit.findAll().then(measurement_units => {
        res.status(200).send(measurement_units);
    }).catch((err) =>{
        res.status(500).send(err);
    });
};

/**
 * Obtener una unidad de medida por Id
 * 
 * @param req
 * @param res
 * 
 * @returns customer
 */
controller.show = (req, res) => {
    const { measurementUnitId } = req.params;

    MeasurementUnit.findById(measurementUnitId).then(measurementUnit => {
        res.status(200).send(measurementUnit);
    }).catch((err) =>{
        res.status(500).send(err);
    });
};

/* Export module */
module.exports = controller;