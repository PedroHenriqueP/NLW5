import express from 'express';

const app = express();

/*
GET = buscas
POST = criação
DELETE = deletar
PUT = atualizar
PATCH = alterar uma informação específica
*/

app.get('/', (req, res) =>{
    return res.json({
        message: 'Olá NLW 05'
    });
});

app.post('/', (req, res) => {
    res.json({
        message: 'Usuário cadastrado com sucesso'
    });
});

app.listen(3333, () => { console.log('Server running on port 3333') });