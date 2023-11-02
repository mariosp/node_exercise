const { DataTypes, Sequelize } = require('sequelize');
const { getSequelize } = require('../../config/db');
const User = require('./userModel');

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
    },
}, {tableName: 'messages', timestamps: false});

// console.log(User);
// console.log(Message);
// Message.belongsTo(User);
// Message.belongsTo(User, { foreignKey: 'receiver' });

module.exports = Message;