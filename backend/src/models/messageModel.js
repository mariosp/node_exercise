const { DataTypes, Sequelize } = require('sequelize');
const { getSequelize } = require('../../config/db');

const Message = getSequelize().define('Message', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sender: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    receiver: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    seen: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    timestampsent: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {tableName: 'messages', timestamps: false});

module.exports = Message;