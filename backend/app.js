import express from 'express';
import cors from 'cors';
import { connectDatabase, ListarJogos } from './src/database/db.js';

const app = express();
app.use(cors()); // Confirugração do CORS para permitir que o frontend acesse o backend ;)
const PORT = 3000; 

connectDatabase()
    .then(() => console.log("Banco de dados conectado"))
    .catch((error) => console.log("Erro na conexão com o banco de dados: " + error.message));


app.get('/', async (req, res) => {
    const jogos = await ListarJogos()
    res.json(jogos)
})

app.listen(PORT, () => {
    console.log(`> Servidor de Jogos iniciado na porta ${PORT}`);
    console.log(`> Recomendação: utilize a função fetch("http://localhost:${PORT}") para conseguir seus dados ;)'`);
})
