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
    'imagem': String,
    'ranking': {
        type: Number,
        default: 0 // or any default value you prefer
    }
}, { collection: 'Jogos' })


const game = mongoose.model('Jogos', gameSchema)

export default game