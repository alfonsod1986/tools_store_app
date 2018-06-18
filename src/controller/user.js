'use strict';

const bcrypt = require('bcrypt-nodejs');
const db = require('../config/db.config');
const User = db.users;

const controller = {};

/**
 * Obtener todos los usuarios
 * 
 * @param req
 * @param res
 * 
 * @returns users
 */
controller.all = (req, res) => {
    User.findAll().then(users => {
        res.status(200).send(users);
    }).catch((err) =>{
        res.status(500).send(err);
    });
};

/**
 * Log in
 * 
 * @param req
 * @param res
 * 
 * @returns user
 */
controller.logIn = (req, res) => {};

/* Export module */
module.exports = controller;