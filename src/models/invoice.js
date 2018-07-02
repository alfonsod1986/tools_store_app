'use strict';

const Customer = require('./customer');
const User = require('./user');

module.exports = (sequelize, Sequelize) => {
    const Invoice = sequelize.define('invoice', {
        invoice_id:{
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        customer_id:{
            type: Sequelize.INTEGER.UNSIGNED,
            references: {
                model: Customer,
                key: 'customer_id'
            }
        },
        user_id:{
            type: Sequelize.INTEGER.UNSIGNED,
            references: {
                model: Invoice,
                key: 'user_id'
            }
        },
        invoice_date:{
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW')
        },
        discount:{
            type: Sequelize.DECIMAL(10,2),
            allowNull: true,
            defaultValue: 0.0
        },
        subtotal:{
            type: Sequelize.DECIMAL(10,2)
        },
        tax:{
            type: Sequelize.DECIMAL(10,2)
        },
        total:{
            type: Sequelize.DECIMAL(10,2)
        }
    },
    {
        tableName: 'invoices',
        createdAt: false,
        updatedAt: false
    });

    return Invoice;
};