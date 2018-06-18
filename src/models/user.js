'use strict';

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        dni:{
            type: Sequelize.STRING(30),
            primaryKey: true,
            allowNull: true,
            len: [5,30]  
        },
        username:{
            type: Sequelize.STRING(20),
            unique: true,
            len: [5,20]
        },
        password:{
            type: Sequelize.STRING(70),
            len: [5,20]
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