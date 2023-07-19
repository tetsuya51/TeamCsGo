const express = require("express");

const router = express.Router();

const equipeControllers = require("./controllers/equipeControllers");
const joueurControllers = require("./controllers/joueurControllers");

router.get("/equipes", equipeControllers.browse);
router.get("/equipes/:id", equipeControllers.read);
router.put("/equipes/:id", equipeControllers.edit);
router.post("/equipes", equipeControllers.add);
router.delete("/equipes/:id", equipeControllers.destroy);

router.get("/joueurs", joueurControllers.browse);
router.get("/joueurs/:id", joueurControllers.read);
router.put("/joueurs/:id", joueurControllers.edit);
router.post("/joueurs", joueurControllers.add);
router.delete("/joueurs/:id", joueurControllers.destroy);

module.exports = router;
