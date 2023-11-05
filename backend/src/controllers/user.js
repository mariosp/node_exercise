const express = require('express');
const router = express.Router();
const {searchUsers, createUser, getUserConversations, getUserByUsername} = require('../services/user');

router.get('/:username', async (req, res) => {
    try {
        const result = await getUserByUsername(req.params['username']);
        res.status(200).json(result);
    } catch (err){
        res.status(400).json({error: err.toString()});
    }
});

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

router.get('/:id/user-conversations', async (req, res) => {
    try {
        const id = req.params['id'];
        let fields = req.query['fields'];
        fields = fields && fields.split(',');
        let limit = req.query['limit'];
        limit = !!limit;
        const result = await getUserConversations(id, fields, limit);
        res.status(200).json(result);
    } catch (err){
        res.status(400).json({error: err.toString()});
    }
});


module.exports = router;