const { default: Axios } = require('axios');
const express = require('express');
const axios = require('axios');
// const cors = require('cors');


// Iniciando o app
const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/public'));
// app.use(cors());

// Iniciando o DB
// mongoose.connect("mongodb://localhost:27017/nodeapi", { useNewUrlParser: true,  useUnifiedTopology: true });
// requireDir('./src/models');



// Rotas
app.use('/', require('./routes'));

app.listen(8082);