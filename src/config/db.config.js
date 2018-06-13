'use strict';

const env = require('./env');
const Sequelize = require('sequelize');
const tools_store_app = new Sequelize(
    env.database,
    env.username,
    env.password,{
        dialect: env.dialect,
        host: env.host,
        port: env.port,
        operatorsAliases: false,
        pool:{
            max: env.pool.max,
            min: env.pool.min,
            acquire: env.pool.acquire,
            idle: env.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.tools_store_app = tools_store_app;