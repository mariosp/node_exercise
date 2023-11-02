const express = require('express');
const router = express.Router();
const { createMessage, updateMessage, searchMessages, getConversationOrderByRecent } = require('../services/message');

router.post('/', async (req, res) => {
    try {
        const result = await createMessage(req.body);
        res.status(201).json(result);
    } catch (err){
        res.status(400).json({error: err.toString()})
    }
});

router.patch('/:id', async (req, res) => {
    try {
        await updateMessage(req.params['id'], req.body);
        res.status(200).json({description: "Updated"});
    } catch (err){
        res.status(400).json({error: err.toString()})
    }
});

router.post('/search', async (req, res) => {
    try {
        const result = await searchMessages(req.body);
        res.status(200).json(result);
    } catch (err){
        res.status(400).json({error: err.toString()})
    }
});

router.get('/conversation/:ids', async (req, res) => {
    try {
        const [id1,id2] = req.params['ids'].split(',');
        const result = await getConversationOrderByRecent(id1, id2);
        res.status(200).json(result);
    } catch (err){
        res.status(400).json({error: err.toString()})
    }
});



module.exports = router;