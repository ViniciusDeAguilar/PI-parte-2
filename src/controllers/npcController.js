const { ObjectID } = require('bson');
const Npc = require('../models/npcModel');

const { v4: uuidv4 } = require('uuid');
const {response } = require('../app');
uuidv4();

async  function listar(req,res){
    await Npc.find({})
    .then(npcs => {return res.json(npcs)})
    .catch( error => {return res.status(500).json(error)});
};

async function listarId(req,res){
    await Npc.findOne({_id: ObjectID(req.params.id)})
    .then(Npc => {
        if(Npc) return res.json(Npc);
        else return res.status(404).json('Npc não encontrado');
    })
    .catch(error => {return res.status(500).json(error) });
};

async function criar(req, res){
    const npc =  new Npc(req.body);
    await npc.save()
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

    await Npc.findOneAndUpdate({_id:ObjectID(req.params.id)},req.body, {runValidators : true})
    .then(Npc => {
        if(Npc) {return res.status(204).end()}
        else{ return res.status(404).json("Npc não encontrado")};
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
    await Npc.findOneAndDelete({_id: ObjectID(req.params.id) })
    .then(Npc => {
        if(Npc) return res.status(204).end();
        else return res.status(404).json('Npc não encontrado'); 
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