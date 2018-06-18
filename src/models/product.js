'use strict';

const MeasurementUnit = require('./measurement_unit');

module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('product', {
        product_id:{
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        description:{
            type: Sequelize.STRING(255),
            len: [5,255]
        },
        unit_price:{
            type: Sequelize.DECIMAL(10, 2)
        },
        stock:{
            type: Sequelize.DECIMAL(10, 2)
        },
        measurement_unit_id:{
            type: Sequelize.INTEGER.UNSIGNED,
            references: {
                model: MeasurementUnit,
                key: 'measurement_unit_id'
            }
        }
    },
    {
        tableName: 'products',
        createdAt: false,
        updatedAt: false
    });

    return Product;
};