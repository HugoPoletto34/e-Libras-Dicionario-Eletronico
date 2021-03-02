const express = require('express')
const router = express.Router();
const DicionarioController = require('../controllers/dicionario-controller')

router.get('/palavra', DicionarioController.getPalavras);


module.exports = router;