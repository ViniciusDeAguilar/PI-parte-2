const express = require("express");
const jogador = require('../controllers/jogadorController');
const routes = express.Router();

routes.get("/", jogador.listar);

routes.get("/listPorId/:id", jogador.listarId);

routes.post("/", jogador.criar);

routes.delete("/delete/:id", jogador.remover);

routes.put("/:id", jogador.atualizar);

module.exports = routes;