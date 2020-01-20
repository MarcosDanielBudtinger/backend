const express = require('express');

const app = express();

app.use(express.json());

// Métodos http:  GET, POST, PUT, DELETE

// Tipos de Parâmetros
// Query Params: request.query (Utilizado para Filtros, Ordenação, Paginação, ...)
// Route Params: request.params (identificar um recurso na alteraçõa ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

app.get('/', (request, response) => {
    return response.json(
        {
            message: 'response the server!'
        }
    );
});

app.get('/users', (request, response) => {
    console.log(request.query);
    return response.json(
        {
            message: 'response the server!'
        }
    );
});

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json(
        {
            message: 'response the server!'
        }
    );
});

app.listen(3333);