const express = require('express'); //agora temos o express disponivel dentro da variavel express
const mongoose = require('mongoose');//mongoose importado para o projeto
const routes = require('./routes'); //importando o routes 

//const pq o valor n vai ser alterado 
const app = express();

//aqui dentro vai a string de conexao que pegamos do mongodb atlas
mongoose.connect('mongodb+srv://gustavo:25578237@cluster0-itmnu.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//esse ponto use quer dizer que e algo que vai ser usado por todas as rotas da aplicação
app.use(express.json());
app.use(routes);

//apartir de agora a aplicação vai estar rodando nessa porta no localhost
app.listen(3333);