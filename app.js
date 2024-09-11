const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config();

const app = express();

// Middleware pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Configuration du moteur de rendu si tu utilises EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', routes);

// Gestion des erreurs
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
