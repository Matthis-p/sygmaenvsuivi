const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

// Clé API et URL de l'API Emphase (à ajuster selon l'API réelle)
const API_KEY = '4d6a55354f546b774d513d3d0a';  // Remplace par la clé API réelle
const BASE_URL = 'https://api.emphase.com/v1/boitiers';  // Remplace par l'URL réelle

// Servir les fichiers statiques dans le dossier public
app.use(express.static(path.join(__dirname, 'public')));

// Route pour récupérer les données des boîtiers via l'API d'Emphase
app.get('/api/boitiers', async (req, res) => {
    try {
        const response = await axios.get(BASE_URL, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        res.json(response.data);  // Transmettre les données au frontend
    } catch (error) {
        console.error('Erreur lors de l\'appel API :', error.response ? error.response.data : error.message);
        res.status(500).send('Erreur lors de la récupération des données');
    }
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
