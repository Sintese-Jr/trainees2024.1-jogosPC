import mongoose from 'mongoose'
import game from '../models/game.js'

async function connectDatabase() {
    mongoose.connect("mongodb+srv://lion:atlaslion18@rascunho-api.mnbdqfx.mongodb.net/Jogos?retryWrites=true&w=majority&appName=rascunho-api")       
}

async function ListarJogos() {
    return await game.find()
}

export {connectDatabase, ListarJogos}