const User = require('../models/userModel');
const { getSequelize } = require('../../config/db');

const createUser = (user) => {

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

module.exports = { createUsers };