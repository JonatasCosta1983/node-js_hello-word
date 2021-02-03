//Importar o módulo para tratar requisições http
const express = require('express');
const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('hello word');
    
});
console.log('Express em funcionamento...')

app.listen(PORT);
