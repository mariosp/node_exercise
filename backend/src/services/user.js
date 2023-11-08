const User = require('../models/userModel');
const { getSequelize } = require('../../config/db');
const Message = require('./../models/messageModel');
const { Op,Sequelize, QueryTypes } = require('sequelize');

const getUserByUsername = async (username) => {
  const results = await searchUsers({username});
  if(results.length) {
    return results[0]
  } else {
    throw new Error("Usename not found");
  };
};

const createUser = (user) => {
  return User.create(user);
};

const createUsers = async (users)=> {
    const result = await getSequelize().transaction(async (t) => {
        const usersResult = [];
        for (const user of users) {
            usersResult.push(await User.create(user, { transaction: t }));
        }
      return usersResult;
    });
   return result;
}

const getUserConversations = async (userId, fields =[], limit) => {
  if(fields.length && !fields.includes('timestampsent')){
    fields.push('timestampsent');
  }

  const userIDs = await getSequelize().query(
    `SELECT DISTINCT sender AS userId FROM messages WHERE receiver = ? 
      UNION 
      SELECT DISTINCT receiver AS userId FROM messages WHERE sender = ?`,
    {
      replacements: [userId, userId],
      type: QueryTypes.SELECT,
    }
  );

  const userIdsArray = userIDs.map(user => user.userid);

  const conversations = await User.findAll({
    where: {
      id: {
          [Op.ne]: userId,
          [Op.in]: userIdsArray,
      },
    },
    include: [
        {
            model: Message,
            attributes: [...fields],
            as: 'SentMessages',
            required: false,
            where: {
              receiver: userId,
            },
        },
        {
          model: Message,
          attributes: [...fields],
          as: 'ReceivedMessages',
          required: false,
          where: {
            sender: userId,
          },
      },
    ],
    order: [
      [
        Sequelize.fn(
          'GREATEST',
          Sequelize.col('SentMessages.timestampsent'),
          Sequelize.col('ReceivedMessages.timestampsent')
        ),
        'DESC'
      ],
    ],
  });

  if(fields.length) {
    const sortedMessages = conversations.map(conv=> conv.toJSON()).map(conv=>({
        ...conv,
        SentMessages: [...conv.SentMessages.sort((a, b) => b.timestampsent - a.timestampsent)],
        ReceivedMessages: [...conv.ReceivedMessages.sort((a, b) => b.timestampsent - a.timestampsent)],
      }));

      return !limit? sortedMessages : sortedMessages.map(conv=>({
        ...conv,
        SentMessages: [conv.SentMessages[0]],
        ReceivedMessages: [conv.ReceivedMessages[0]],
      }));
  }
  return conversations;
}

const searchUsers = (userCriteria) => {
  return User.findAll({
    where: {
      ...userCriteria,
    }
  });
}

module.exports = { createUsers, searchUsers, createUser, getUserConversations, getUserByUsername };