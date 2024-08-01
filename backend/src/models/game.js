import mongoose from "mongoose";

// Schema do Objeto estático que será retornado pelo banco de dados
// NÃO MODIFICAR AQUI, ver em responseGame.js
const gameSchema = new mongoose.Schema({
    'game': String,
    'total_copies_sold': String,
    'serie': String,
    'release_date': String,
    'genre': String,
    'developer': String,
    'publisher': String,
    'id': Number,

}, {collection: 'Jogos'})


const game = mongoose.model('game', gameSchema)

export default game