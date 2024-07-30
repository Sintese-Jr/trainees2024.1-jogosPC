import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    'game': String,
    'total_copies_sold': String,
    'series': String,
    'release_date': String,
    'genre': String,
    'developer': String,
    'publisher': String,
    'id': Number,

}, {collection: 'Jogos'})


const game = mongoose.model('game', gameSchema)

export default game