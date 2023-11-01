const readXlsxFile = require('read-excel-file/node');
const path = require('path');
const { createUsers } = require('./user');
const { createMessages } = require('./message');
const { throws } = require('assert');

const readExcelFile = async (fileName) => {
    const filePath = path.resolve(__dirname,`../../../${fileName}`);

    const usersResult = readXlsxFile(filePath, {sheet: 'users'});
    const messagesResult = readXlsxFile(filePath, {sheet: 'messages'});

    const excelFile = await Promise.all([usersResult, messagesResult]);
    
    const users = mapToUserModel(excelFile[0]);
    const messages = mapToMessageModel(excelFile[1]);
    try {
        const userResult = await createUsers(users);
        const msgResult = await createMessages(messages);

        return {
            messages: msgResult.length,
            users: userResult.length
        }
    } catch(error) {
        throw new Error(error);
    }
};

const mapToUserModel = (array)=>{
    const users = [];
    array.forEach(columns => {
        users.push({
            id: columns[0],
            firstname: columns[1],
            lastname: columns[2],
            birthday: columns[3],
            gender: columns[4],
            username: columns[5],
        });
    });
    return users;
};

const mapToMessageModel = (array)=>{
    const messages = [];
    array.forEach(columns => {
        messages.push({
            id: columns[0],
            content: columns[1],
            sender: columns[2],
            receiver: columns[3],
            seen: columns[4],
            timestampsent: columns[5],
        });
    });
    return messages
};

module.exports = { readExcelFile }