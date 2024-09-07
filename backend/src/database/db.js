import mongoose from 'mongoose';
import "dotenv/config";
import game from '../models/game.js'
import { convertCopiesSoldToNumbers } from '../models/data_format.js';

let isConnected = false; 

async function connectDatabase() {
    if (isConnected) return;

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            maxPoolSize: 15, 
            serverSelectionTimeoutMS: 10000,  
            socketTimeoutMS: 60000,           
        });
        isConnected = true;
        console.log('Conectado ao MongoDB');
    } catch (error) {
        console.log("Erro na conexão com o banco de dados: " + error.message);
        throw new Error('Erro na conexão com o banco de dados');
    }
}

function sortMyResults(a, b) {
    return convertCopiesSoldToNumbers(b.total_copies_sold) - convertCopiesSoldToNumbers(a.total_copies_sold);
}

async function ListarJogos(limite = null) {
    try {
        await connectDatabase();
        const games = await game.find({}, { _id: 0, __v: 0 }).limit(limite);

        /*
            Deus abençoe o JavaScript
            .sort() é um método que ordena um array de acordo com uma função de comparação. 
            Nesse caso, eu tenho a versão NUMÉRICA do total copies sold de cada jogo, 
            tiro a diferença entre eles e ordeno de forma decrescente.
        */
        games.sort(sortMyResults);

        return games;
    } catch (error) {
        console.log("Erro ao listar jogos: " + error.message);
        return [];
    }
}

async function BuscarPag(numPag, tamanho_da_pagina) {
    try {
        await connectDatabase();

        numPag = parseInt(numPag, 10) || 1;

        const jogos = await game.find({}, { _id: 0, __v: 0 });

        const sortedData = jogos.sort(sortMyResults);

        const paginatedData = sortedData.slice((numPag - 1) * tamanho_da_pagina, numPag * tamanho_da_pagina);

        const quantidadeTotal = jogos.length;

        return {
            jogos: {
                metadata: { quantidadeTotal, numPag, tamanho_da_pagina },
                data: paginatedData
            }
        }

    } catch (error) {
        console.log("Erro ao buscar por página: " + error.message);
        return [];
    }
}

async function BuscarJogos(nome) {
    try {
        await connectDatabase();

        const foundGames = await game.find({ game: new RegExp(nome, 'i') }, { _id: 0, __v: 0 });

        foundGames.sort(sortMyResults);

        return foundGames;
    } catch (error) {
        console.log("Erro ao buscar jogos: " + error.message);
        return [];
    }
}

async function BuscarGenero(genero, tamanho_da_pagina) {
    try {
        await connectDatabase();

        const genreGames = await game.find({ genre: genero }, { _id: 0, __v: 0 });

        const sortedData = genreGames.sort(sortMyResults);
        const paginatedData = sortedData.slice(0, tamanho_da_pagina);


        return paginatedData;
    } catch (error) {
        console.log("Erro ao buscar jogos: " + error.message);
        return [];
    }
}

async function quantitade_jogo() {
    try {
        await connectDatabase();

        return await game.countDocuments();
    } catch (error) {
        console.log("Erro ao buscar jogos: " + error.message);
        return 0;
    }
}

process.on('SIGINT', async () => {
    if (mongoose.connection.readyState === 1) {
        await mongoose.disconnect();
        console.log('Desconectado do MongoDB');
    }
    process.exit(0);
});

export { ListarJogos, BuscarJogos, BuscarGenero, BuscarPag, quantitade_jogo };