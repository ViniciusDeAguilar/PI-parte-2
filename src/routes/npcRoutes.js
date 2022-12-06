const express = require("express");
const npc = require('../controllers/npcController');
const routes = express.Router();

routes.get("/", npc.listar);

routes.get("/listPorId/:id", npc.listarId);

routes.post("/", npc.criar);

routes.delete("/delete/:id", npc.remover);

routes.put("/:id", npc.atualizar);

module.exports = routes;