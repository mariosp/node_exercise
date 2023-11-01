const Message = require('../models/messageModel');
const { getSequelize } = require('../../config/db');

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

module.exports = {createMessages, createMessage};