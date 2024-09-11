const express = require('express');
const path = require('path');
const routes = require('./routes/index'); // Assure-toi que './routes/index' exporte une fonction Router
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config();

const app = express();

// Middleware pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Utiliser les routes
app.use('/', routes); // Assure-toi que routes est un middleware fonctionnel

// Middleware pour gérer les erreurs
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
