// 1 import expres
const express = require("express");
//const mongoose = require("./db/mongodb")

require('dotenv');
//require('mongoose');

// 2 instanciar aplicacion de express

const app = express();

// 3 to do late


// 4 enpoints

app.get('/', (req, res) => {
    res.json({
        nombre: "Hello",
        apellido: "World"
    })
});

//5 Listener

const port = 8080;

app.listen(port, () => {
    console.log('el servidor se esta ejecutando en el puerto ', port);
})