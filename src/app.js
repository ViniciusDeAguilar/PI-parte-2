const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json')
const app = express();

const fichas = require('./routes/fichaRoutes');
const jogadores = require('./routes/jogadorRoutes');
const npcs = require('./routes/npcRoutes');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json()); 
app.use('/ficha', fichas);
app.use('/jogador', jogadores);
app.use('/npc', npcs);


module.exports = app;