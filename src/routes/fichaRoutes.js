const express = require("express");
const ficha = require('../controllers/fichaController');
const routes = express.Router();

routes.get("/", ficha.listar);

routes.get("/listPorId/:id", ficha.listarId);

routes.post("/", ficha.criar);

routes.delete("/delete/:id", ficha.remover);

routes.put("/:id", ficha.atualizar);

module.exports = routes;