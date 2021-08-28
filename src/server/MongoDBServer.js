/* MongoDB */
const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const app = express();

mongoose.connect('mongodb+srv://GustavoDantas:190713@cluster0.bachh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    userNewUrlParser: true,
    useCreateIndex: true
});

app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(require('./routes'));
app.listen('5000', () => {
    console.log('rodando na porta 5000');
});