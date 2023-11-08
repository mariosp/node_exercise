const { DataTypes } = require('sequelize');
const { getSequelize } = require('../../config/db');
const Message = require('./messageModel');

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

User.hasMany(Message, { foreignKey: 'sender', as: 'SentMessages' });
User.hasMany(Message, { foreignKey: 'receiver', as: 'ReceivedMessages' });

Message.belongsTo(User, { foreignKey: 'sender', as: 'Sender' });
Message.belongsTo(User, { foreignKey: 'receiver', as: 'Receiver'});

module.exports = User;