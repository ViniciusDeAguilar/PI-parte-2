const mongoose = require('mongoose');

const fichaSchema = mongoose.Schema({
    nomeJogador: {
        type: String,
        trim: true,
        maxLength: [20, 'O nome do jogador deve no máximo 20 caracteres'],
        required: [ true, 'Nome do jogador é um parâmetro obrigatório!']
    },
    nomePersonagem: {
        type: String,
        trim: true,
        maxLength: [80 , 'O nome do personagem deve no máximo 80 caracteres'],
        required: [ true, 'Nome do jogador é um parâmetro obrigatório!']
    },
    raca: {
        type: String,
        trim: true,
        enum: {
            values: ['Orc', 'Humano', 'Elfo', 'Meio-Orc', 'Meio-Elfo', 'Anão', 'Gnomo', 'Dragonborn', 'Tiefling', 'Halfling'],
            message: '{VALUE} não é uma raça disponível no livro do jogador de D&D 5e'
        },
        required: [ true, 'Raça é um parâmetro obrigatório']
    },
    classe: {
        type: String,
        trim: true,
        enum: {
            values: ['Bárbaro', 'Bardo', 'Clérigo', 'Druida', 'Guerreiro', 'Monge', 'Paladino', 'Caçador', 'Ladino', 'Feiticeiro', 'Bruxo', 'Mago'],
            message: '{VALUE} não é uma classe disponível no livro do jogador de D&D 5e'
        },
        required: [ true, 'Classe é um parâmetro obrigatório']
    },
    forca: {
        type: Number,
        min: [0, 'Um atributo não pode ser menor que 0!'],
        required: [ true, 'Um atributo não pode ser nulo']
    },
    constituicao: {
        type: Number,
        min: [0, 'Um atributo não pode ser menor que 0!'],
        required: [ true, 'Um atributo não pode ser nulo']
    },
    destreza: {
        type: Number,
        min: [0, 'Um atributo não pode ser menor que 0!'],
        required: [ true, 'Um atributo não pode ser nulo']
    },
    inteligencia: {
        type: Number,
        min: [0, 'Um atributo não pode ser menor que 0!'],
        required: [ true, 'Um atributo não pode ser nulo']
    },
    carisma: {
        type: Number,
        min: [0, 'Um atributo não pode ser menor que 0!'],
        required: [ true, 'Um atributo não pode ser nulo']
    },
    sabedoria: {
        type: Number,
        min: [0, 'Um atributo não pode ser menor que 0!'],
        required: [ true, 'Um atributo não pode ser nulo']
    },
    jogando: {
        type: Boolean,
        required: [ true, 'Nossa API não está preparada para jogadores de Schrodinger!']
    }
    
});

module.exports = mongoose.model('Ficha', fichaSchema);
