const express = require('express');
const router = express.Router();
const { createMessage } = require('../services/message');

router.post('/', async (req, res) => {
    try {
        const result = await createMessage(req.body);
        res.status(201).json(result);
    } catch (err){
        res.status(400).json({error: err.toString()})
    }
});

module.exports = router;