const mongoose = require('mongoose');

const jogadorSchema = mongoose.Schema({
    nome: {
        type: String,
        trim: true,
        maxLength: [20, 'O nome do jogador deve no máximo 20 caracteres'],
        required: [ true, 'Nome do jogador é um parâmetro obrigatório!']
    },
    telefone: {
        type: String,
        trim: true,
        maxLenght: [15, 'O telefone deve ter menos de 15 caracteres']
    },
    email: {
        type: String,
        trim: true,
        maxLenght: [50, 'O telefone deve ter menos de 50 caracteres']
    }
});

module.exports = mongoose.model('Jogador', jogadorSchema);
