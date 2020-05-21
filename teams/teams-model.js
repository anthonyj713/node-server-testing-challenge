const db = require('../data/dbConfig.js');

modules.exports = {
    find,
    findById,
    add,
    remove,
    edit
};

function find(){
    return db('teams')
};


function findById(id){
    return db('teams')
    .where('id', id)
    .first();
};


function add(team){
    return db('teams')
    .insert(team, 'id')
    .then(ids => {
        return findById(ids[0]);
    });
};


function remove(id){
    return db('teams')
    .where({ id })
    .del()

};


function edit(changes, id){
    return db('teams')
    .where({ id })
    .update(changes)
};