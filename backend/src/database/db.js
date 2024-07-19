import mongoose from 'mongoose';
import game from '../models/game.js'

async function connectDatabase() {
    mongoose.connect("mongodb+srv://back:WZsfQutJJgXOGzxw@cluster0.ih9ygex.mongodb.net/Jogos");
}

async function ListarJogos(limite = null) {
    if (limite == null) {
        return await game.find();
    } 
    return await game.find().limit(limite);
}

async function BuscarJogos(nome) {
    return await game.find({Game: new RegExp(nome, 'i')});
}

async function BuscarGenero(genero) {
    return await game.find({"Genre(s)": new RegExp(genero, 'i')});
}

async function BuscarImagemJogo(nome) {
    return fetch(`https://api.rawg.io/api/games?key=ac9af96231f64ff09afe969f2e97c770&search=${nome}`)
    .then(response => response.json())
    .then(data => {
        // Se não encontramos o jogo, retornamos uma string vazia
        if (data.count != 0) return data.results[0].background_image;
        
        /*
        Repare que um jogo nessa API pode não estar na Coleção de Jogos que temos no banco de dados.
        
        Isso será tratado no servidor.
        */

        return ""; 
    })
    .catch(error => {
        console.log("Erro ao buscar imagem do jogo: " + error.message);
        return ""; 
    });
}

export {connectDatabase, ListarJogos, BuscarJogos, BuscarImagemJogo, BuscarGenero};