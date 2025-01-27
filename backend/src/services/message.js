const Message = require('../models/messageModel');
const { getSequelize } = require('../../config/db');
const { Op } = require("sequelize");

const createMessage = async (message)=> {
    return await Message.create(message);
};

const createMessages = async (messages)=> {
    const results = await getSequelize().transaction(async (t) => {
        const messagesResult = [];
        for (const message of messages) {
            messagesResult.push(Message.create(message, { transaction: t }));
        }
        return await Promise.all(messagesResult);
    });
    return results;
}

const updateMessage = (id, message) => {
    return Message.update(message, {
        where: {
            id
        },
        returning: true,
        plain: true
    });
}

const searchMessages = (messageCriteria) => {
    return Message.findAll({
        where: {
           ...messageCriteria,
        },
    });
}

const getConversationOrderByRecent = (id1, id2) => {
    return Message.findAll({
        where:{
            sender: {
                [Op.or]: [id1, id2]
            },
            receiver: {
                [Op.or]: [id1, id2]
            },
        },
        order: [['timestampsent', 'DESC'],],
    });
}

const markMessagesAsRead = (id1, id2) => {
    return Message.update({seen: true}, {
        where:{
            sender: id2,
            receiver: id1,
            seen: false,
        },
    });
}

module.exports = {markMessagesAsRead, createMessages, createMessage , updateMessage, searchMessages, getConversationOrderByRecent};