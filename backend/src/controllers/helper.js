const express = require('express');
const router = express.Router();

const  { readExcelFile } = require('../services/readfile');

router.post('/feedDB', async (req, res) => {
    try{
        const result = await readExcelFile('seeds.xlsx');
        res.status(200).json({ messages: result.messages, users: result.users});
    }catch(err){
        res.status(400).json({error: err.toString()})
    }
});

module.exports = router;
