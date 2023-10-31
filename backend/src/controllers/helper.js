const express = require('express');
const router = express.Router();

router.post('/feedDB', (req, res) => {
    res.status(200).json({ success: true, data: 'healthy!' });
});

module.exports = router;
