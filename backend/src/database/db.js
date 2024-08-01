import mongoose from 'mongoose';
import game from '../models/game.js'
import { convertCopiesSoldToNumbers } from '../models/data_format.js';

async function connectDatabase() {
    try {
        await mongoose.connect("mongodb+srv://back:WZsfQutJJgXOGzxw@cluster0.ih9ygex.mongodb.net/Jogos")
    } catch (error) {
        console.log("Erro na conexão com o banco de dados: " + error.message);
        return { error: error.message } 
    } 
}

function sortMyResults(a, b) {
    return convertCopiesSoldToNumbers(b.total_copies_sold) - convertCopiesSoldToNumbers(a.total_copies_sold);
}

async function ListarJogos(limite = null) {
    try {
        await connectDatabase();

        const games =  await game.find({}, { _id: 0, __v: 0 }).limit(limite);

        /*
        Deus abençoe o JavaScript

        sort() é um método que ordena um array de acordo com uma função de comparação. Nesse caso, eu tenho a versão NUMÉRICA do total copies sold de cada jogo, tiro a diferença entre eles e ordeno de forma decrescente.
        */
        games.sort(sortMyResults);

        return games;
    } catch (error) {
        console.log("Erro ao listar jogos: " + error.message);
        return [];
    } finally {
        mongoose.disconnect();
    }
}

async function BuscarPag(numPag){
    try{
        await connectDatabase();

        numPag = parseInt(numPag, 10) || 1;
        let tamanhoPag = 15;

        const jogos = await game.find({}, { _id: 0, __v: 0 });

        const sortedData = jogos.sort(sortMyResults);

        const paginatedData = sortedData.slice((numPag - 1) * tamanhoPag, numPag * tamanhoPag);

        const quantidadeTotal = jogos.length;

        return {
            jogos: {
                metadata: { quantidadeTotal, numPag, tamanhoPag },
                data: paginatedData
            }
        }

    } catch (error) {
        console.log("Erro ao buscar por página: " + error.message);
        return[];
    } finally {
        mongoose.disconnect();
    }
}

async function BuscarJogos(nome) {
    try {
        await connectDatabase();

        const foundGames = await game.find({game: new RegExp(nome, 'i')}, { _id: 0, __v: 0 });

        foundGames.sort(sortMyResults);

        return foundGames;
    } catch (error) {
        console.log("Erro ao buscar jogos: " + error.message);
        return [];
    } finally {
        mongoose.disconnect();
    }
}

async function BuscarGenero(genero) {
    try {
        await connectDatabase();

        const genreGames = await game.find({genre: genero }, { _id: 0, __v: 0 });

        genreGames.sort(sortMyResults);

        return genreGames;
    } catch (error) {
        console.log("Erro ao buscar jogos: " + error.message);
        return [];
    } finally {
        mongoose.disconnect();
    }
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

async function attribuateRanking() {
    try {
        await connectDatabase();

        const games =  await game.find({}, { _id: 0, __v: 0 });

        games.sort(sortMyResults);

        return games;
    } catch (error) {
        console.log("Erro ao atribuir ranking: " + error.message);
        return [];
    } finally {
        mongoose.disconnect();
    }
}

export { ListarJogos, BuscarJogos, BuscarImagemJogo, BuscarGenero, BuscarPag};