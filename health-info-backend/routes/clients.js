const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientsController');

router.post('/', clientController.createClient);
router.get('/', clientController.getClients);
router.get('/:id', clientController.getClientProfile);

module.exports = router;