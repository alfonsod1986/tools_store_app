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

/* Models */
db.users = require('../models/user')(tools_store_app, Sequelize);
db.measurement_units = require('../models/measurement_unit')(tools_store_app, Sequelize);
db.products = require('../models/product')(tools_store_app, Sequelize);

/* Relations */
//-- Products relationships
db.products.belongsTo(db.measurement_units, { foreignKey: 'measurement_unit_id' });

// -- Measurement Unit relationships
db.measurement_units.hasMany(db.products, { foreignKey: 'measurement_unit_id' });


/* Export module */
module.exports = db;