import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    'Game': String,
    'Total copies sold': String,
    'Series': String,
    'Release date': String,
    'Genre(s)': String,
    'Developer(s)': String,
    'Publisher(s)': String,

}, {collection: 'Jogos'})


const game = mongoose.model('game', gameSchema)

export default game