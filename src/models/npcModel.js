const mongoose = require('mongoose');

const npcSchema = mongoose.Schema({
    nome: {
        type: String,
        trim: true,
        maxLength: [30, 'O nome de um NPC dever ter no máximo 30 caractéres'],
        required: [ true, 'Nome do NPC é um parâmetro obrigatório!']
    },
    raca: {
        type: String,
        trim: true,
        maxLength: [20, 'A raça deve ter no máximo 20 caractéres'],
        required: [true, 'A raça de um NPC é um parâmetro obrigatório!']
    },
    classe: {
        type: String,
        trim: true,
        maxLength: [20, 'A classe deve ter no máximo 20 caractéres'],
        required: [true, 'A classe de um NPC é um parâmetro obrigatório!']
    },
    vivo: {
        type: Boolean,
        required: [true, 'Nossa API não está preparada para NPCs de Schrodinger!']
    }
});