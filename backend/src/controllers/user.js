const express = require('express');
const router = express.Router();
const {searchUsers, createUser} = require('../services/user');

router.post('/', async (req, res) => {
    try {
        const result = await createUser(req.body);
        res.status(201).json(result);
    } catch (err){
        res.status(400).json({error: err.toString()});
    }
});

router.post('/search', async (req, res) => {
    try {
        const result = await searchUsers(req.body);
        res.status(200).json(result);
    } catch (err){
        res.status(400).json({error: err.toString()});
    }
});

module.exports = router;