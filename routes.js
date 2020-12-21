const express = require('express');
const path = require('path');

const routes = express.Router();

routes.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')));
routes.get('/cadastro', (req, res) => res.sendFile(path.join(__dirname + '/public/cadastro.html')));

module.exports = routes;