'use strict';

const Invoice = require('./invoice');
const Product = require('./product');

module.exports = (sequelize, Sequelize) => {
    const InvoiceItem = sequelize.define('invoice_item', {
        invoice_item_id:{
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        invoice_id:{
            type: Sequelize.INTEGER.UNSIGNED,
            references: {
                model: Invoice,
                key: 'invoice_id'
            }
        },
        product_id:{
            type: Sequelize.INTEGER.UNSIGNED,
            references: {
                model: Product,
                key: 'product_id'
            }
        }
    },
    {
        tableName: 'invoice_items',
        createdAt: false,
        updatedAt: false
    });

    return InvoiceItem;
};