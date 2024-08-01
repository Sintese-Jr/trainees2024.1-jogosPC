import express from 'express';
import cors from 'cors';
import { ListarJogos, BuscarJogos, BuscarImagemJogo, BuscarGenero, BuscarPag } from './src/database/db.js';
import convertGameToResponseGame from './src/models/responseGame.js';

const app = express();
app.use(cors()); // Confirugração do CORS para permitir que o frontend acesse o backend ;)
/*
 Pra saber mais: https://www.telerik.com/blogs/all-you-need-to-know-cors-errors
*/
const PORT = 3001; 

app.get('/', async (req, res) => {
    const jogos = await ListarJogos();

    const updatedJogos = jogos.map(jogo => {
        return convertGameToResponseGame(jogo);
    });

    res.json(updatedJogos);
});


app.get("/pag/:numPag", async(req, res) => {
    const jogosMetadata = await BuscarPag(req.params.numPag);

    const updatedJogos = jogosMetadata.jogos.data.map(jogo => {
        return convertGameToResponseGame(jogo);
    });

    res.json(updatedJogos);
})


app.get("/paginas", async(req, res) => {


    const totalPaginas = await BuscarPag(req.params.numPag)


    res.json(totalPaginas.jogos.metadata.totalpag);
})


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

    console.log(jogosPesquisados);

    const updatedJogos = jogosPesquisados.map(jogo => {
        return convertGameToResponseGame(jogo);
    });

    res.json(updatedJogos);
});

app.get("/genero/:genero", async(req, res) => {
    const generosPesquisados = await BuscarGenero(req.params.genero);

    const updatedGeneros = generosPesquisados.map(jogo => {
        return convertGameToResponseGame(jogo);
    });

    res.json(updatedGeneros);
})

app.listen(PORT, () => {
    console.log(`> Servidor de Jogos iniciado na porta ${PORT}`);
    console.log(`> Recomendação: utilize a função fetch("http://localhost:${PORT}") para conseguir seus dados ;)'`);
})
