var express = require('express');
var router = express.Router();
const Personaje = require("../models/personaje")

/* GET users listing. */
router.get('/todos', async function(req, res, next) {
  try {
    const personajes = await Personaje.find({});
    res.render("index", {personajes});
  } catch (error) {
    res.status(500).send("Error al obtener la lista de personajes.");
  }
});

router.get("/:id", async function(req, res, next){
  const {id} = req.params;
  if(isNaN(id)){
    res.redirect("/todos");
  }
  try {
    let personaje = await Personaje.find({ id: id });
    personaje.length === 0 ? res.redirect("/todos") : false;
    personaje = personaje[0];
    switch (personaje.gender) {
      case "Male":
        personaje.gender = "Masculino";
        break;
      case "Female":
        personaje.gender = "Femenino";
        break;
      case "unknown":
        personaje.gender = "Desconocido";
        break;
    }
    res.render("personaje", { personaje });
  } catch (error) {
    res.end();
  }
})

module.exports = router;
