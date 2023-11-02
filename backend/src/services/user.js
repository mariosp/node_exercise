const User = require('../models/userModel');
const { getSequelize } = require('../../config/db');
const Message = require('./../models/messageModel');
const { Op } = require('sequelize');

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

const getUserConversations = (userId) => {
  console.log(userId)
  return User.findAll({
    where: {
        id: { [Op.ne]: userId },
    },
    include: [
        {
            model: Message,
            attributes: [],
            where: {
                [Op.or]: [
                    { sender: userId },
                    { receiver: userId },
                ],
            },
        },
    ],
    order: [[Message, 'timestampsent', 'DESC']],
});
}
const searchUsers = (userCriteria) => {
  return User.findAll({
    where: {
      ...userCriteria,
    }
  });
}

module.exports = { createUsers, searchUsers, createUser, getUserConversations };