const { DataTypes } = require('sequelize');
const { getSequelize } = require('../../config/db');

const User = getSequelize().define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstname: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A',

    },
    username: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
    },
}, {tableName: 'users', timestamps: false});

module.exports = User;