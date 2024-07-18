import express from 'express';
import cors from 'cors';
import { connectDatabase, ListarJogos, BuscarJogos, BuscarImagemJogo } from './src/database/db.js';

const app = express();
app.use(cors()); // Confirugração do CORS para permitir que o frontend acesse o backend ;)
/*
 Pra saber mais: https://www.telerik.com/blogs/all-you-need-to-know-cors-errors
*/
const PORT = 3000; 

connectDatabase()
    .then(() => console.log("Banco de dados conectado"))
    .catch((error) => console.log("Erro na conexão com o banco de dados: " + error.message));


app.get('/', async (req, res) => {
    const jogos = await ListarJogos(10);

    res.json(jogos)
});

app.get("/imagem/:nome", async(req, res) => {
    const jogosPesquisados = await BuscarJogos(req.params.nome);

    // Se o jogo buscado não estiver do banco, retornamos uma imagem vazia
    if (jogosPesquisados.length == 0) {
        res.json({imagem: ""});
        return;
    }
    
    const imagem = await BuscarImagemJogo(req.params.nome);

    res.json({imagem: imagem});
});

app.get("/:nome", async(req, res) => {
    const jogosPesquisados = await BuscarJogos(req.params.nome); 

    res.json(jogosPesquisados);
});

app.listen(PORT, () => {
    console.log(`> Servidor de Jogos iniciado na porta ${PORT}`);
    console.log(`> Recomendação: utilize a função fetch("http://localhost:${PORT}") para conseguir seus dados ;)'`);
})
