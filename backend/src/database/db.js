import mongoose from 'mongoose';
import game from '../models/game.js'

async function connectDatabase() {
    mongoose.connect("mongodb+srv://back:WZsfQutJJgXOGzxw@cluster0.ih9ygex.mongodb.net/Jogos");
}

async function ListarJogos() {
    return await game.find();
}

export {connectDatabase, ListarJogos};