function errorHandler(err, req, res, next) {
    console.error(err.message);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
  
  module.exports = errorHandler;
  