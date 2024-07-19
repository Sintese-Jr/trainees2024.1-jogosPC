import mongoose from 'mongoose';
import game from '../models/game.js'

async function connectDatabase() {
    await mongoose.connect("mongodb+srv://back:WZsfQutJJgXOGzxw@cluster0.ih9ygex.mongodb.net/Jogos").then(() => console.log("Banco de dados conectado"))
    .catch((error) => console.log("Erro na conexão com o banco de dados: " + error.message));
}

async function ListarJogos(limite = null) {
    try {
        await connectDatabase();

        if (limite == null) {
            return await game.find();
        } 
        return await game.find().limit(limite);
    } catch (error) {
        console.log("Erro ao listar jogos: " + error.message);
        return [];
    } finally {
        mongoose.disconnect();
    }
}

async function BuscarJogos(nome) {
    try {
        await connectDatabase();

        return await game.find({Game: new RegExp(nome, 'i')});
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

        // Irá converter a entrada para TitleCase: "action" -> "Action"
        let generoCerto = genero.charAt(0).toUpperCase() + genero.slice(1).toLowerCase();

        return await game.find({"Genre(s)": generoCerto });
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

// Script para modificar diretamente o banco, não será levado para a API
async function traduzirGenero() {
    try {
        await connectDatabase(); // conexão com o banco de dados
        const genero = 'Action'; 

        const jogosDesseGenero = await game.find({ 'Genre(s)': genero });

        // Atualizar cada jogo
        for (let jogoDoGenero of jogosDesseGenero) {
            let generoDoJogo = jogoDoGenero['Genre(s)'];

            const generoAtualizado = generoDoJogo.replace(genero, 'Ação');

            await game.updateOne({ _id: jogoDoGenero._id }, { $set: { 'Genre(s)': generoAtualizado } });
        }

        console.log("modificações: " + jogosDesseGenero.length);
    } catch (error) {
        console.error('Error ao tentar mudar as ocorrências:', error);
    } finally {
        mongoose.disconnect();
    }
}

// traduzirGenero(); - tire esse comentário para mudar as ocorrências - CUIDADO
// node src/database/db.js

export { ListarJogos, BuscarJogos, BuscarImagemJogo, BuscarGenero};