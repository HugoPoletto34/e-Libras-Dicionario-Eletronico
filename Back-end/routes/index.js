const express = require('express')
const router = express.Router();
const DicionarioController = require('./dicionario')

router.use('/dicionario', DicionarioController);

module.exports = router;