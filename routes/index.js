var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    res.redirect("/personaje/todos");
  } catch (error) {
    res.status(500).send('Error al obtener la lista de personajes.');
  }
});

module.exports = router;
