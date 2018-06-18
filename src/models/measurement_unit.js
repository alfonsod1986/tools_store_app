'use strict';

module.exports = (sequelize, Sequelize) => {
    const MeasurementUnit = sequelize.define('measurement_unit', {
        measurement_unit_id:{
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: Sequelize.STRING(60),
            len: [5,128]
        },
        description:{
            type: Sequelize.TEXT
        },
        abbreviation:{
            type: Sequelize.STRING(8),
            len: [1,8]
        }
    },
    {
        tableName: 'measurement_units',
        createdAt: false,
        updatedAt: false
    });

    return MeasurementUnit;
};