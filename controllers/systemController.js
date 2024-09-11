const axios = require('axios');
const config = require('../config/config'); // Charger la clé API depuis la config

// Fonction pour récupérer les systèmes installés
exports.getSystems = async (req, res, next) => {
  try {
    const response = await axios.get(`https://api.enphaseenergy.com/api/v2/systems?key=${config.apiKey}`);
    res.json(response.data);
  } catch (error) {
    next(error); // Passer l'erreur au middleware de gestion des erreurs
  }
};
