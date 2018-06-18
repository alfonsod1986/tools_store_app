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
controller.logIn = (req, res) => {
    var {username} = req.params;
    var {password} = req.params;

    User.findOne({
        where: {
            username: username,
            password: password
        }
    }).then(user => {
        if(user){
            bcrypt.compare(password, user.password, (err, check) => {
                if(check){
                    if(params.gettoken){
                        // Devolver token
                        // Generar token
                        return res.status(200).send({
                            token: jwt.createToken(user)
                        });
                    }else{
                        // Devolver datos de usuario
                        user.password = undefined;
                        return res.status(200).send({ success: true, user});
                    }
                }else{
                    return res.status(404).send({ success: false, message: 'El usuario no se ha podido identificar.'});
                }
            });
        }
        res.status(200).send(user);
    }).catch((err) =>{
        res.status(500).send(err);
    });
};

/* Export module */
module.exports = controller;