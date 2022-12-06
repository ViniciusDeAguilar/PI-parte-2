const { ObjectID } = require('bson');
const Ficha = require('../models/fichaModel');

const { v4: uuidv4 } = require('uuid');
const {response } = require('../app');
uuidv4();

async  function listar(req,res){
    await Ficha.find({})
    .then(fichas => {return res.json(fichas)})
    .catch( error => {return res.status(500).json(error)});
};

async function listarId(req,res){
    await Ficha.findOne({_id: ObjectID(req.params.id)})
    .then(Ficha => {
        if(Ficha) return res.json(Ficha);
        else return res.status(404).json('Ficha não encontrada');
    })
    .catch(error => {return res.status(500).json(error) });
};


async function criar(req, res){
    const ficha =  new Ficha(req.body);
    await ficha.save()
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

    await Ficha.findOneAndUpdate({_id:ObjectID(req.params.id)},req.body, {runValidators : true})
    .then(Ficha => {
        if(Ficha) {return res.status(204).end()}
        else{ return res.status(404).json("Ficha não encontrada")};
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
    await Ficha.findOneAndDelete({_id: ObjectID(req.params.id) })
    .then(Ficha => {
        if(Ficha) return res.status(204).end();
        else return res.status(404).json('ficha não encontrada'); 
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