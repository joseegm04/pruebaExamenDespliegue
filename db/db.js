const mongoose = require('mongoose');

const uri = "mongodb+srv://usuario:12345678abc@cluster0.ulerm98.mongodb.net/rickandmorty?retryWrites=true&w=majority";

mongoose.connect(uri, {});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
    console.log("Conectado a MongoDB.");
})