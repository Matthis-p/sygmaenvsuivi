const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config(); // Charger les variables d'environnement

const app = express();

// Middleware pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Utiliser les routes
app.use('/', routes);

// Utiliser le middleware de gestion des erreurs
app.use(errorHandler);

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
