import express from 'express';
// recomendo criar um arquivo só para a conexão com o banco de dados e exportá-lo

const app = express();
const PORT = 3000; 

app.get('/', (req, res) => {
    // Implementar até o dia 19: 
    // conexão com o banco de dados e trazer TODOS os jogos na rota "/"
    res.json({});
});

app.listen(PORT, () => {
    console.log(`> Servidor de Jogos iniciado na porta ${PORT}`);
    console.log(`> Recomendação: utilize a função fetch("http://localhost:${PORT}") para conseguir seus dados ;)'`);
})
