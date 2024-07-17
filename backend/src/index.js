import express from 'express'
import mongoose from 'mongoose'
import { connectDatabase, ListarJogos} from './database/db.js'

const app = express()
app.use(express.json());

connectDatabase()
    .then(() => console.log("Banco de dados conectado"))
    .catch(() => console.log("Erro na conexão com o banco de dados"))


app.get('/TodosJogos', async (req, res) => {
    const jogos = await ListarJogos()
    res.send(jogos)
})


app.listen(3000)