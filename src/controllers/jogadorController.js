const { ObjectID } = require('bson');
const Jogador = require('../models/jogadorModel');

const { v4: uuidv4 } = require('uuid');
const {response } = require('../app');
uuidv4();

async  function listar(req,res){
    await Jogador.find({})
    .then(jogadores => {return res.json(jogadores)})
    .catch( error => {return res.status(500).json(error)});
};

async function listarId(req,res){
    await Jogador.findOne({_id: ObjectID(req.params.id)})
    .then(Jogador => {
        if(Jogador) return res.json(Jogador);
        else return res.status(404).json('Jogador não encontrado');
    })
    .catch(error => {return res.status(500).json(error) });
};


async function criar(req, res){
    const jogador =  new Jogador(req.body);
    await jogador.save()
    .then (doc => {
        return res.status(201).json(doc);
    })
    .catch(error => {
        const msgErro = {};
        Object.values(error.errors).forEach(({properties}) => {
            msgErro[properties.path] = properties.message;
        });
        return res.status(422).json(msgErro);
})
}

async function atualizar(req,res){

    await Jogador.findOneAndUpdate({_id:ObjectID(req.params.id)},req.body, {runValidators : true})
    .then(Jogador => {
        if(Jogador) {return res.status(204).end()}
        else{ return res.status(404).json("Jogador não encontrado")};
    })
    .catch(error => {
        const msgErro = {};
        Object.values(erro.errors).forEach(({properties}) => {
            msgErro[properties.path] = properties.message;
        });
        return res.status(422).json(msgErro);
    });

};

async function remover(req,res){
    await Jogador.findOneAndDelete({_id: ObjectID(req.params.id) })
    .then(Jogador => {
        if(Jogador) return res.status(204).end();
        else return res.status(404).json('Jogador não encontrado'); 
    })
    .catch (error => {return res.status(500).json (error) });
};


module.exports = {
    criar,
    listar,
    listarId,
    atualizar,
    remover
}