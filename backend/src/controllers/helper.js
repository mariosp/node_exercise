const express = require('express');
const router = express.Router();
const { readExcelFile, dropTables } = require('../services/helper');

router.post('/feedDB', async (req, res) => {
    try{
        const result = await readExcelFile('seeds.xlsx');
        res.status(200).json({ messages: result.messages, users: result.users});
    }catch(err){
        res.status(400).json({error: err.toString()})
    }
});

router.post('/dropDB', async (req, res) => {
    try{
        await dropTables();
        res.status(200).json({description: "DROP OK"});
    }catch(err){
        res.status(400).json({error: err.toString()})
    }
});

module.exports = router;
