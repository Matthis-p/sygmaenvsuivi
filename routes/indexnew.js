const express = require('express');
const router = express.Router();
const systemController = require('../controllers/systemController');

// Route pour obtenir les systèmes installés
router.get('/systems', systemController.getSystems);

module.exports = router;
