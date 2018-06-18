'use strict';

module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('customer', {
        customer_id:{
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        short_name:{
            type: Sequelize.STRING(60),
            len: [5,60]
        },
        business_name:{
            type: Sequelize.STRING(255),
            len: [5,255]
        },
        rfc:{
            type: Sequelize.STRING(25),
            unique: true,
            len: [5,25]
        },
        country:{
            type: Sequelize.STRING(100),
            len: [5,100]
        },
        state:{
            type: Sequelize.STRING(100),
            len: [5,100]
        },
        city:{
            type: Sequelize.STRING(100),
            len: [5,100]
        },
        neigborhood:{
            type: Sequelize.STRING(100),
            len: [5,100]
        },
        address:{
            type: Sequelize.STRING(100),
            len: [5,100]
        },
        zipcode:{
            type: Sequelize.STRING(10),
            len: [5,10]
        },
        
    },
    {
        tableName: 'customers',
        createdAt: false,
        updatedAt: false
    });

    return Customer;
};