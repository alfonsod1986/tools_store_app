'use strict';

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        user_id:{
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        dni:{
            type: Sequelize.STRING(30),
            allowNull: true,
            len: [5,30]  
        },
        first_name:{
            type: Sequelize.STRING(128),
            len: [5,128]
        },
        last_name:{
            type: Sequelize.STRING(45),
            len: [5,128]
        },
        second_name:{
            type: Sequelize.STRING(128),
            allowNull: true,
            len: [5,128]
        },
    },
    {
        tableName: 'users',
        createdAt: false,
        updatedAt: false
    });

    return User;
};