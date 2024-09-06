import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors';
import { ListarJogos, BuscarJogos, BuscarGenero, BuscarPag, quantitade_jogo } from '../src/database/db.js';
import convertGameToResponseGame from '../src/models/responseGame.js';

const app = express();
app.use(cors()); 
let tamanho_das_paginas = 15;

app.get('/', async (req, res) => {
    const jogos = await ListarJogos();

    const updatedJogos = jogos.map(jogo => {
        return convertGameToResponseGame(jogo);
    });

    res.json(updatedJogos);
});

app.get("/pag", async (req, res) => {
    const total = await quantitade_jogo();

    res.json({ pages: Math.ceil(total / tamanho_das_paginas) });
});

app.get("/pag/:numPag", async (req, res) => {
    const jogosMetadata = await BuscarPag(req.params.numPag, tamanho_das_paginas);

    const updatedJogos = await jogosMetadata.jogos?.data?.map(jogo => {
        return convertGameToResponseGame(jogo);
    });

    res.json(updatedJogos);
})

app.get("/:nome", async (req, res) => {
    const jogosPesquisados = await BuscarJogos(req.params.nome);

    console.log(jogosPesquisados);

    const updatedJogos = jogosPesquisados.map(jogo => {
        return convertGameToResponseGame(jogo);
    });

    res.json(updatedJogos);
});

app.get("/genero/:genero", async (req, res) => {
    let tamanho_das_paginas_genero = 3;
    const generosPesquisados = await BuscarGenero(req.params.genero, tamanho_das_paginas_genero);

    const updatedGeneros = generosPesquisados.map(jogo => {
        return convertGameToResponseGame(jogo);
    });

    res.json(updatedGeneros);
});

app.get("/listar/generos", async (req, res) => {
    const jogos = await ListarJogos();

    const generos = jogos?.map(jogo => jogo.genre);

    const meusGeneros = [...new Set(generos)];

    res.json(meusGeneros);
});

export const handler = serverless(app); 
